import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HeaderMobile from "./components/HeaderMobile";
import "./App.css";
// import MySignUpForm from "./components/MySignupForm";
import LandingPage from "./views/LandingPage";
import HomePage from "./views/HomePage";
import DetailPage from "./views/DetailPage";
import CheckOutPage from "./views/CheckOutPage";
import Footer from "./components/Footer";
function Root() {
  return (

    <>
      <Outlet />,
      <Footer />
    </>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      children: [
        {
          element: <LandingPage />,
          path: "/",
        },
        { element: <HomePage />, path: "/homepage" },

        {
          element: <DetailPage />,
          path: "/detailpage",
        },
        {
          element: <CheckOutPage />,
          path: "/checkoutpage",
        },
      ],
      element: <Root />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

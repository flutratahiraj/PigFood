import React from "react";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import LandingPage from "./views/LandingPage";
import HomePage from "./views/HomePage";
import DetailPage from "./views/DetailPage";
import CheckOutPage from "./views/CheckOutPage";
import LogIn from "./components/LogIn";
import ScrollToTopArrow from "./components/ScrollToTopArrow";
import AboutPage from "./views/AboutPage";
import CreateAccount from "./components/CreateAccount";
import AuthProvider from "./components/AuthContext";
import HeaderMobile from "./components/HeaderMobile";
import HMLoggedIn from "./components/HeaderMobileLoggedIn";
import { useAuth } from "./components/AuthContext";
import RecipePage from "./views/RecipePage";

function Root() {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn ? <HMLoggedIn /> : <HeaderMobile />}

      <ScrollToTopArrow />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      children: [
        {
          element: (
            <LandingPage
            // BecomeButtonProps={{
            //   label: "Become a Pig!",
            //   onClick: () => {
            /* Hantera klickhändelsen */
            //   },
            // }}
            />
          ),
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
        {
          element: <CreateAccount />,
          path: "/createaccount",
        },
        {
          element: <RecipePage />,
          path: "/recipe",
        },
        {
          element: <LogIn />,
          path: "/login",
        },
        {
          element: <AboutPage />,
          path: "/about",
        },
      ],
      element: <Root />,
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;

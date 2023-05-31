import React from "react";
import Footer from "./components/Footer";
// import logo from "./logo.svg";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import LandingPage from "./views/LandingPage";
import HomePage from "./views/HomePage";
import DetailPage from "./views/DetailPage";
import CheckOutPage from "./views/CheckOutPage";
import CarouselCard from "./components/CarouselCard";
import LogIn from "./components/LogIn";

function Root() {
  return (
    <>
      <Outlet />
      <Footer />
      <CarouselCard />
    </>
  );
}
function App() {
  const joinButtonProps = {
    label: "Join the pigsty!",
    onClick: () => {
      // Hantera klickhändelsen
    },
  };
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

        {
          element: (
            <LogIn
              LogInButtonProps={{
                label: "Log in",
                onClick: () => {
                  /* Hantera klickhändelsen */
                },
              }}
            />
          ),
          path: "/login",
        },
      ],
      element: <Root />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

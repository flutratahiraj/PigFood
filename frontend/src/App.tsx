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

function Root() {
  return (
    <>
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
        //   // {
        //   element: (
        //     <CreateAccount
        //       BecomeAPigProps={{
        //         label: "Become a Pig!",
        //         onClick: () => {
        //           /* Hantera klickhändelsen */
        //         },
        //       }}
        //     />
        //   ),
        //   path: "/login",
        // },

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

  return <RouterProvider router={router} />;
}

export default App;

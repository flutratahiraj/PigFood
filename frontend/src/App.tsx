import React from "react";
import Footer from "./components/Footer";
// import logo from "./logo.svg";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HeaderMobile from "./components/HeaderMobile";
import "./App.css";
import LandingPage from "./views/LandingPage";
import HomePage from "./views/HomePage";
import DetailPage from "./views/DetailPage";
import CheckOutPage from "./views/CheckOutPage";
import ScrollToTopArrow from "./components/ScrollToTopArrow";
import AboutPage from "./views/AboutPage";
// import Navbar from "./components/Navbar";
// import MySignUpForm from "./components/MySignupForm";

function Root() {
  return (

    <>
      <HeaderMobile />
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

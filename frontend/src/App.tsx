import React from "react";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import logo from './logo.svg';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HeaderMobile from "./components/HeaderMobile";
import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./views/Landing";


function App() {
// import MySignUpForm from "./components/MySignupForm";
import LandingPage from "./views/LandingPage";
import HomePage from "./views/HomePage";
import DetailPage from "./views/DetailPage";
import CheckOutPage from "./views/CheckOutPage";
function Root() {
  return (

    <>
      <HeaderMobile />
      <Outlet />
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

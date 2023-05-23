import React from "react";
<<<<<<< HEAD
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./views/Landing";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route></Route>
    </Routes>
    <Landing />
    </BrowserRouter>

=======
// import logo from './logo.svg';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HeaderMobile from "./components/HeaderMobile";
import "./App.css";
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
>>>>>>> 693cc0a682396418730e24206c53eca3e8accf0b
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

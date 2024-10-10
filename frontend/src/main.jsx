import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import components ....

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import { Login } from "./pages/Auth/Login";
import { SignUp } from "./pages/Auth/SignUp";
import Layout from "./layout/Layout";
import About from "./pages/About";
import Chatbot from "./components/Chatbox";
import Team from "./pages/Team";
import Services from "./pages/Services";
import HealthForm from "./pages/HealthForm";
import { LoginProvider } from "./context/LoginContext";

// Define your routes

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "chatbot",
        element: <Chatbot />,
      },
      {
        path: "/healthform",
        element: <HealthForm />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
    ],
  },
  {
    path: "/auth",
    
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);

// Render the app with the RouterProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginProvider>

    <RouterProvider router={router} />

    </LoginProvider>
    <ToastContainer />
  </React.StrictMode>
);

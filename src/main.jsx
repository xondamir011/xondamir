import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Product from "./components/Product.jsx";
import Users from "./components/Users.jsx";
import Shop from "./components/Shop.jsx";
import Home from "./components/Home.jsx"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",         
        element: <Home />
      },
      {
        path: "/products",  
        element: <Product search="{search}"/>
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/users",
        element: <Users />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
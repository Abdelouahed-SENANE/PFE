import React from "react";
import { BrowserRouter, Route, createBrowserRouter } from "react-router-dom";
import Home from "../views/pages/Home";
import About from "../views/pages/About";
import Layout from "../layouts/Layout";
import Contact from "../views/pages/Contact";
import Notfound from "../views/pages/errors/Notfound";
const Router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "*",
                element: <Notfound />,
            },
        ],
    },
]);

export default Router;

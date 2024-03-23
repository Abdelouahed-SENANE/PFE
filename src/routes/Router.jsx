import React from "react";
import { BrowserRouter, Route, createBrowserRouter } from "react-router-dom";
import Home from "../views/pages/Home";
import About from "../views/pages/About";
import Layout from "../layouts/Layout";
import Contact from "../views/pages/Contact";
import Notfound from "../views/pages/errors/Notfound";
import Login from "../views/auth/Login";
import AuthLayout from "../layouts/AuthLayout";
import Signup from "../views/auth/Signup";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../views/admin/Dashboard";
import UserManagement from "../views/admin/UserManagement";
import CategoryManagement from "../views/admin/CategoryManagement";
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
    {
        element: <AuthLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
        ],
    },
    {
        element: <AdminLayout />,
        children: [
            {
                path: "/admin/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/admin/users",
                element: <UserManagement />,
            },
            {
                path: "/admin/categories",
                element: <CategoryManagement />,
            },
        ],
    },
]);

export default Router;

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
import FreelancerLayout from "../layouts/FreelancerLayouut";
import Dashboard from "../views/admin/Dashboard";
import UserManagement from "../views/admin/UserManagement";
import ProfileAdmin from "../views/admin/Profile";
import CategoryManagement from "../views/admin/CategoryManagement";
import Profile from "../views/profile/Profile";
import ProfileLayout from "../layouts/ProfileLayout";
import Category from "../views/pages/Category";
import Offers from "../views/pages/Offers";
import Orders from "../views/freelancer/Orders";
import Gigs from "../views/freelancer/Gigs";
import NewGigs from "../views/freelancer/NewGigs";


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
                path: "/categories",
                children: [
                    {
                        path: "technology-programming",
                        element: (
                            <Category category="Technology & Programming" />
                        ),
                    },
                    {
                        path: "data",
                        element: (
                            <Category category={"Data Science & Analytics"} />
                        ),
                    },
                    {
                        path: "design-creative",
                        element: <Category category={"Design & Creative"} />,
                    },
                    {
                        path: "sales-and-marketing",
                        element: <Category category={"Sales & Marketing"} />,
                    },
                    {
                        path: "writing-translations",
                        element: (
                            <Category category={"Writing & Translations"} />
                        ),
                    },
                    {
                        path: "audio",
                        element: <Category category={"Audiovesiuelle"} />,
                    },
                ],
            },
            {
                path: "/Offers",
                element: <Offers />,
            },

        ],
    },
    {
        element: <FreelancerLayout />,
        children: [
            {
                path: '/orders',
                element : <Orders />
            },
            {
                path: "/gigs",
                element: <Gigs />,
            },
            {
                path: "/gigs/create",
                element: <NewGigs />,
            },

        ]
    },

    {
        path: "*",
        element: <Notfound />,
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
            {
                path: "/admin/profile",
                element: <ProfileAdmin />,
            },
        ],
    },
    {
        element: <ProfileLayout />,
        children: [
            {
                path: "/profile",
                element: <Profile />,
            },
        ],
    },
]);

export default Router;

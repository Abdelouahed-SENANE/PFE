import React from "react";
import {
    BrowserRouter,
    Route,
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";
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
import Services from "../views/pages/Services";
import Orders from "../views/freelancer/Orders";
import Gigs from "../views/freelancer/Gigs";
import NewGigs from "../views/freelancer/NewGigs";
import UpdateGig from "../views/freelancer/UpdateGig";
import ProtectedRoutes from "../layouts/ProtectedRoutes";
import { useAuth } from "../hooks/AuthContext";

// const Router = createBrowserRouter([
//     {
//         path:'/',
//         element: <PublicRoutes/>,
//         children : [
//             {
//                 element: <Layout />,
//                 children: [

//                 ],
//             },
//         ]
//     },

//     {
//         path: "*",
//         element: <Notfound />,
//     },
//     {
//         element: <AuthLayout />,
//         children: [
//             {
//                 path: "/login",
//                 element: <Login />,
//             },
//             {
//                 path: "/signup",
//                 element: <Signup />,
//             },
//         ],
//     },
    

// ]);

// export default Router;

const Routes = () => {
    const routesForPublic = [
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/services",
                    element: <Services />,
                },
                {
                    path: "/contact",
                    element: <Contact />,
                },
                {
                    path: "/about",
                    element: <About />,
                },
            ],
        },
        {
            path: "/*",
            element: <Notfound />,
        },
        {
            path: "/",
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
    ];

    const routesForAuthenticate = [
        {
            path: "/",
            element: <ProtectedRoutes />,
            children: [
                {
                    path: "/",
                    element: <FreelancerLayout />,
                    children: [
                        {
                            path: "/orders",
                            element: <Orders />,
                        },
                        {
                            path: "/gigs",
                            element: <Gigs />,
                        },
                        {
                            path: "/gigs/create",
                            element: <NewGigs />,
                        },
                        {
                            path: "/gigs/update/:id",
                            element: <UpdateGig />,
                        },
                    ],
                },
                {
                    path: "/",
                    element: <ProfileLayout />,
                    children: [
                        {
                            path: "/profile",
                            element: <Profile />,
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
            ],
        },
    ];

    const router = createBrowserRouter([
        ...routesForPublic,
        ...routesForAuthenticate,
    ]);

    return <RouterProvider router={router} />;
};

export default Routes;

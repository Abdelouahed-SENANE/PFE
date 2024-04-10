import React from "react";
import Logo from "../components/ui/Logo";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";
const AuthLayout = () => {
    const { token, user } = useAuth();

    if (token && user) {
        if (user.freelancer) {
            return <Navigate to={"/orders"} />;
        } else if (user.client) {
            return <Navigate to={"/services"} />;
        } else {
            return <Navigate to={"/admin/dashboard"} />;
            
        }
    }
    return (
        <>
            <header className="py-3">
                <div className="container mx-auto bg-white px-4  text-gray-700">
                    <Logo height={24} width={24} />
                </div>
            </header>
            <main className="w-full">
                <Outlet />
            </main>
            <footer className="">
                <div className=" bg-secondary p-6  text-white text-center">
                    Copyright Linkup 2024
                </div>
            </footer>
        </>
    );
};

export default AuthLayout;

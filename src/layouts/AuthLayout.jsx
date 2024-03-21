import React from "react";
import Logo from "../components/ui/Logo";
import { Outlet } from "react-router-dom";
const AuthLayout = () => {
    return (
        <>
            <header className="py-3">
                <div className="container mx-auto bg-white  text-gray-700">
                    <Logo height={24} width={24} />
                </div>
            </header>
            <main className="h-[calc(100vh-130px)]">
                <Outlet />
            </main>
            <footer className="">
                <div className="container mx-auto  bg-secondary p-6 rounded-xl text-white text-center">
                    Copyright Linkup 2024
                </div>
            </footer>
        </>
    );
};

export default AuthLayout;

import React from "react";
import Logo from "../components/ui/Logo";
import { Outlet } from "react-router-dom";
const AuthLayout = () => {
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

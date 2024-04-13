import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { Navbar } from "../components/freelancer/Navbar";
import { useAuth } from "../hooks/AuthContext";
import { MessageProvider } from "../hooks/MessageContext";

const FreelancerLayout = () => {
    const { user } = useAuth();
    if (!user.freelancer) {
        return <Navigate to={"/login"} />;
    }
    return (
        <>
            <MessageProvider>
                <header className="z-50 shadow-md shadow-slate-100/10">
                    <Navbar />
                </header>
                <main className=" pt-[30px] min-h-[calc(100vh-66px)] bg-gray-50">
                    <Outlet />
                </main>
            </MessageProvider>
        </>
    );
};

export default FreelancerLayout;

import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/freelancer/Navbar";

const FreelancerLayout = () => {
    return (
        <>
            <header className="z-50 shadow-md shadow-slate-100/10">
                <Navbar />
            </header>
            <main className=" pt-[30px] min-h-screen bg-gray-50">
                <Outlet />
            </main>
        </>
    );
};

export default FreelancerLayout;

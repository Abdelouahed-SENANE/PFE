import React from "react";
import Navbar from "../components/profile/Navbar";
import Sidebar from "../components/profile/Sidebar";
import { Outlet } from "react-router-dom";
const ProfileLayout = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50">
                <div className="flex flex-wrap relative gap-5 w-[80%] mx-auto py-10">
                    <Sidebar />
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default ProfileLayout;

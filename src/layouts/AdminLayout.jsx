import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";
const AdminLayout = () => {
    return (
        <>
            <AdminSidebar />
            <main className="w-[1640px] main bg-slate-50 min-h-screen ">
                <Outlet />
            </main>
        </>
    );
};

export default AdminLayout;

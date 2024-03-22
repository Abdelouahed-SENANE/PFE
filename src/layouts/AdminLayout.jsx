import React from "react";
import Logo from "../components/ui/Logo";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
const AdminLayout = () => {
    return (
        <>
            <aside className="fixed top-0 left-0 h-screen bg-white border-e border-slate-200 rounded-lg w-[280px]">
                <header className="py-5 ">
                    
                </header>
            </aside>
            <main className="w-[1640px] ml-auto bg-slate-50 min-h-screen ">
                <Outlet />
            </main>
        </>
    );
};

export default AdminLayout;

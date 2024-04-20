import React from "react";
import { Outlet , Navigate } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";
import { useAuth } from "../hooks/AuthContext";
import { MessageProvider } from "../hooks/MessageContext";
const AdminLayout = () => {
    const { user } = useAuth()
    if (user.role !== 'admin') {
        return <Navigate to={'/login'}/>
    }
    return (
        <>
        <MessageProvider>
        <AdminSidebar />
            <main className="w-[1640px] overflow-x-hidden main bg-slate-50 min-h-screen ">
                <Outlet />
            </main>
        </MessageProvider>
            
        </>
    );
};

export default AdminLayout;

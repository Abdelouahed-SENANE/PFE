import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 shadow-md shadow-slate-100/10">
                <Navbar />
            </header>
            <main className="lg:mt-[140px] mt-[55px]">
                <Outlet />
            </main>
            <footer className="bg-secondary pt-[100px]">
                <Footer />
            </footer>
        </>
    );
};

export default Layout;

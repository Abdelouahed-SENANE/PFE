import React from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";
import DashboardHeader from "../../components/admin/DashboardHeader";
import Widget from "../../components/admin/Widget";
import AreaChart from "../../components/admin/AreaChart";

const Dashboard = () => {
    return (
        <>
            <AdminNavbar />
            <DashboardHeader />
            <div className="widgets flex items-center px-5 gap-5">
                <Widget />
                <Widget />
                <Widget />
            </div>
            <div className="p-5 grid grid-cols-3 gap-5">
                <div className="col-span-2">
                    <AreaChart />
                </div>
                <div className="col-span-1">
                    <div className=" border border-gray-200 rounded-lg bg-white p-5">
                        <header className="text-black  text-lg">
                            Top 5 Categories
                        </header>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;

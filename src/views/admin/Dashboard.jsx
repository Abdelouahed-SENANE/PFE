import React from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";
import DashboardHeader from "../../components/admin/DashboardHeader";
import Widget from "../../components/admin/Widget";
import AreaChart from "../../components/admin/AreaChart";
import DanoutChart from "../../components/admin/DanoutChart";
import ChartColumn from "../../components/admin/ChartColumn/ChartColumn";
import picture from "../../assets/uploads/vector.png";
import AdminProfileWithMessageOption from "../../components/admin/AdminProfileWithMessage";
import Transactions from "../../components/admin/Transactions";

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
                    <ChartColumn />
                    <Transactions />
                </div>
                <div className="col-span-1">
                    <div className=" border border-gray-200 rounded-lg mb-5 bg-white p-5">
                        <header className="text-black  text-lg">
                            Top 5 Categories
                        </header>
                        <div className="h-[350px] ">
                            <DanoutChart />
                        </div>
                    </div>
                    <div className=" border border-gray-200 rounded-lg bg-white p-5">
                        <header className="text-black  text-lg">
                            <h4>Admins</h4>
                        </header>
                        <div className="max-h-[400px]  overflow-y-auto my-5">
                            <AdminProfileWithMessageOption
                                name={"Abdelouahed senane"}
                                email={"test@email.com"}
                                picture={picture}
                            />
                            <AdminProfileWithMessageOption
                                name={"Joual mohammed"}
                                email={"test@email.com"}
                                picture={picture}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;

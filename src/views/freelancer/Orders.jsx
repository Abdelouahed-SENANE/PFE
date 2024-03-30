import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../components/freelancer/freelancer.css";
const Orders = () => {
    const [IsActiveTab, setIsActiveTab] = useState(1);
    const [tableData, setTableData] = useState([]);

    const tabs = [
        {
            id: 1,
            label: "Active",
            tableHead: ["Buyer", "Gig", "Due on", "Status"],
            rows: [
                {
                    buyer: "Company A",
                    gig: "Service X",
                    dueOn: "2024-04-01",
                    status: "Pending",
                },
                {
                    buyer: "Company B",
                    gig: "Service Y",
                    dueOn: "2024-04-02",
                    status: "Completed",
                },
            ],
        },
        {
            id: 2,
            label: "Late",
            tableHead: ["Buyer", "Gig", "Due on", "Status"],
            rows: [
                {
                    buyer: "Company A",
                    gig: "Service X",
                    dueOn: "2024-04-01",
                    status: "Pending",
                },
                {
                    buyer: "Company B",
                    gig: "Service Y",
                    dueOn: "2024-04-02",
                    status: "Completed",
                },
            ],
        },

        {
            id: 3,
            label: "Delivred",
            tableHead: ["Buyer", "Gig", "Due on", "Delivred at", "Status"],
            rows: [
                {
                    buyer: "Company A",
                    gig: "Service X",
                    dueOn: "2024-04-01",
                    delivredAt: "2024-04-02",
                    status: "Pending",
                },
                {
                    buyer: "Company B",
                    gig: "Service Y",
                    dueOn: "2024-04-02",
                    delivredAt: "2024-04-02",
                    status: "Completed",
                },
            ],
        },
        {
            id: 4,
            label: "Completed",
            tableHead: ["Buyer", "Gig", "Due on", "Status"],
            rows: [
                {
                    buyer: "Company A",
                    gig: "Service X",
                    dueOn: "2024-04-01",
                    status: "Pending",
                },
                {
                    buyer: "Company B",
                    gig: "Service Y",
                    dueOn: "2024-04-02",
                    status: "Completed",
                },
            ],
        },
        {
            id: 5,
            label: "Cancelled",
            tableHead: ["Buyer", "Gig", "Due on", "Status"],
            rows: [
                {
                    buyer: "Company A",
                    gig: "Service X",
                    dueOn: "2024-04-01",
                    status: "Pending",
                },
                {
                    buyer: "Company B",
                    gig: "Service Y",
                    dueOn: "2024-04-02",
                    status: "Completed",
                },
            ],
        },
        {
            id: 6,
            label: "Started",
            tableHead: ["Buyer", "Gig", "Due on", "Status"],
            rows: [
                {
                    buyer: "Company A",
                    gig: "Service X",
                    dueOn: "2024-04-01",
                    status: "Pending",
                },
                {
                    buyer: "Company B",
                    gig: "Service Y",
                    dueOn: "2024-04-02",
                    status: "Completed",
                },
            ],
        },
    ];

    const handleClick = (tab) => {
        setIsActiveTab(tab);
    };
    return (
        <>
            <div className="container mx-auto ">
                <h2 className="text-4xl my-[20px] text-gray-700 font-light">
                    Manage Orders
                </h2>
                <div className="relative">
                    <ul className="uppercase text-gray-600 text-sm font-light border-b flex  border-gray-300">
                        {tabs.map((tab) => {
                            return (
                                <li className="mr-2 " key={tab.id}>
                                    <Link
                                        className={`py-4 px-2 flex items-center gap-1 selected ${
                                            IsActiveTab === tab.id
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() => handleClick(tab.id)}
                                    >
                                        {tab.label}
                                        {tab.rows.length > 0 && (
                                            <span className="h-5 w-5 rounded-full bg-primary text-sm text-white flex items-center justify-center">
                                                {tab.rows.length}
                                            </span>
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                {tabs.map((tab) => {
                    return (
                        <div
                            className={`content_tab mt-5 bg-white w-full p-4 ${
                                tab.id === IsActiveTab ? "active" : ""
                            }`}
                        >
                            <div className="tab-content">
                                <h4 className="uppercase tracking-wide ">
                                    {tab.label} Orders
                                </h4>
                            </div>
                            <div>
                                <table className="w-full my-5">
                                    <thead className="border-t border-b border-gray-200 py-4  w-full">
                                        {tab.tableHead.map((head, index) => {
                                            return (
                                                <th
                                                    className="py-4 text-sm uppercase text-gray-500 font-normal"
                                                    key={index}
                                                >
                                                    {head}
                                                </th>
                                            );
                                        })}
                                    </thead>
                                    <tbody>
                                        {tab.rows.map((row, indexRow) => {
                                            return (
                                                <tr className="" key={indexRow}>
                                                    <td className="text-light py-3 text-center text-sm text-gray-500">
                                                        {row.buyer}
                                                    </td>
                                                    <td className="text-light py-3 text-center text-sm text-gray-500">
                                                        {row.gig}
                                                    </td>
                                                    <td className="text-light py-3 text-center text-sm text-gray-500">
                                                        {row.dueOn}
                                                    </td>

                                                    {row.delivredAt && (
                                                        <td className="text-light py-3 text-center text-sm text-gray-500">
                                                            {row.delivredAt}
                                                        </td>
                                                    )}
                                                    <td className="text-light py-3 text-center text-sm text-gray-500">
                                                        <span
                                                            className={`px-3 border py-1 rounded-full ${
                                                                row.status ==
                                                                "Pending"
                                                                    ? "bg-yellow-100  border-yellow-300 text-yellow-500"
                                                                    : row.status ==
                                                                      "Canceled"
                                                                    ? "bg-red-100  border-red-300 text-red-500"
                                                                    : row.status ===
                                                                      "Completed"
                                                                    ? "bg-green-100  border-green-300 text-green-500"
                                                                    : ""
                                                            }`}
                                                        >
                                                            {row.status}
                                                        </span>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Orders;

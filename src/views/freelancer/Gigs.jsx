import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "../../components/freelancer/freelancer.css";
const Gigs = () => {
    const [IsActiveTab, setIsActiveTab] = useState(1);
    const [tableData, setTableData] = useState([]);

    const tabs = [
        {
            id: 1,
            label: "Active",
            tableHead: ["Gig", "Orders", "Cancellations", "Status"],
            rows: [
                {
                    buyer: "Company A",
                    gig: "Service X",
                    dueOn: "2024-04-01",
                    status: "Active",
                },
                {
                    buyer: "Company B",
                    gig: "Service Y",
                    dueOn: "2024-04-02",
                    status: "Active",
                },
            ],
        },
        {
            id: 2,
            label: "pending approval",
            tableHead: ["Gig", "Orders", "Cancellations", "Status", "Actions"],
            rows: [
                {
                    buyer: "Company A",
                    gig: "Service X",
                    dueOn: "2024-04-01",
                    status: "Pending",
                    actions: "actions",
                },
                {
                    buyer: "Company B",
                    gig: "Service Y",
                    dueOn: "2024-04-02",
                    status: "Pending",
                    actions: "actions",
                },
            ],
        },

        {
            id: 3,
            label: "Denied",
            tableHead: ["Gig", "Orders", "Cancellations", "Status"],
            rows: [
                {
                    buyer: "Company A",
                    gig: "Service X",
                    dueOn: "2024-04-01",
                    delivredAt: "2024-04-02",
                    status: "Denied",
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
                    Manage Gigs
                </h2>
                <div className="relative">
                    <ul className="uppercase text-gray-600 text-sm font-light border-b flex  border-gray-300">
                        {tabs.map((tab) => {
                            return (
                                <li className="mr-2 " key={tab.id}>
                                    <Link
                                        className={`py-4 px-2 gap-1 selected flex items-center ${
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
                    <div>
                        <button className="uppercase text-xs bg-primary text-white absolute right-0 top-2 px-3 rounded-sm py-2 shadow-gray-400 transition-shadow duration-300 hover:shadow-lg ">
                            <Link to={"/gigs/create"}>Create a new gigs</Link>
                        </button>
                    </div>
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
                                    {tab.label} Gigs
                                </h4>
                            </div>
                            <div>
                                <table className="w-full my-5">
                                    <thead className="border-t border-b border-gray-200 py-4  w-full">
                                        {tab.tableHead.map((head, index) => {
                                            return (
                                                <th
                                                    className={`py-4 text-sm uppercase text-gray-500 font-normal ${
                                                        head === "Actions"
                                                            ? "sr-only"
                                                            : ""
                                                    }`}
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
                                                                      "Denied"
                                                                    ? "bg-red-100  border-red-300 text-red-500"
                                                                    : row.status ===
                                                                      "Active"
                                                                    ? "bg-green-100  border-green-300 text-green-500"
                                                                    : ""
                                                            }`}
                                                        >
                                                            {row.status}
                                                        </span>
                                                    </td>
                                                    {row.actions && (
                                                        <td className="text-light py-3 text-center text-sm text-gray-500">
                                                            <button>Del</button>
                                                            <button>
                                                                Edit
                                                            </button>
                                                        </td>
                                                    )}
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

export default Gigs;

import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../components/freelancer/freelancer.css";
import { getMyOrders } from "../../data/order/OrderData";
import { FaCaretDown } from "react-icons/fa";
import { updateStatusOrder } from "../../data/order/OrderService";
import { outsideClickAlert } from "../../helpers/HandleClickOutside";

const Orders = () => {
    const [IsActiveTab, setIsActiveTab] = useState(1);
    const [tableData, setTableData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isStatus, setIsStatus] = useState(null);
    const dropRef = useRef();
    const sizePage = 8;
    const fetchMyOrders = async () => {
        try {
            const result = await getMyOrders();
            setTableData(result.myOrders);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchMyOrders();
    }, []);

    const indexOflastPage = currentPage * sizePage;
    const indexOfFirstPage = indexOflastPage - sizePage;
    const currentData = tableData
        .find((tab) => tab.id === IsActiveTab)
        ?.rows.slice(indexOfFirstPage, indexOflastPage);

    const handlePaginate = (numberPage) => {
        setCurrentPage(numberPage);
    };

    const handleClick = (tab) => {
        setIsActiveTab(tab);
        setCurrentPage(1);
    };
    const handleActions = (index) => {
        setIsStatus(index);
    };
    const handleStatus = async (status, id) => {
        console.log("Updating status:", status, "for order ID:", id);
        try {
            const response = await updateStatusOrder(id, status);
            console.log(response);
            if (response.status === 200) {
                fetchMyOrders();
            }
        } catch (error) {
            console.log(error);
        }
        setIsStatus(null);
    };
    outsideClickAlert(dropRef, () => {setIsStatus(null)});
    return (
        <>
            <div className="container mx-auto ">
                <h2 className="text-4xl my-[20px] text-gray-700 font-light">
                    Manage Orders
                </h2>
                <div className="relative">
                    <ul className="uppercase text-gray-600 text-sm font-light border-b flex  border-gray-300">
                        {tableData.map((tab) => (
                            <li className="mr-2 " key={tab.id}>
                                <Link
                                    className={`py-4 px-2 flex items-center gap-1 selected ${
                                        IsActiveTab === tab.id ? "active" : ""
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
                        ))}
                    </ul>
                </div>
                {tableData.map((tab) => {
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
                                        {currentData &&
                                            currentData.map((row, indexRow) => {
                                                return (
                                                    <tr
                                                        className=""
                                                        key={indexRow}
                                                    >
                                                        <td className="text-light py-3 text-center text-sm text-gray-500">
                                                            {row.buyer}
                                                        </td>
                                                        <td className="text-light py-3 text-center text-sm text-gray-500">
                                                            {row.gig}
                                                        </td>
                                                        <td className="text-light py-3 text-center text-sm text-gray-500">
                                                            {row.dueOn}
                                                        </td>

                                                        <td className="text-light py-3 text-center text-sm text-gray-500">
                                                            <span
                                                                className={`px-3 border py-1 rounded-full ${
                                                                    row.status ==
                                                                    "PENDING"
                                                                        ? "bg-yellow-100  border-yellow-300 text-yellow-500"
                                                                        : row.status ==
                                                                          "CANCELLED"
                                                                        ? "bg-red-100  border-red-300 text-red-500"
                                                                        : row.status ===
                                                                          "COMPLETED"
                                                                        ? "bg-green-100  border-green-300 text-green-500"
                                                                        : row.status ===
                                                                          "IN_PROGRESS"
                                                                        ? "bg-blue-100  border-blue-300 text-blue-500"
                                                                        : ""
                                                                }`}
                                                            >
                                                                {row.status}
                                                            </span>
                                                        </td>
                                                        <td className="text-light py-3 text-center text-sm text-gray-500">
                                                            <div className="relative">
                                                                <button
                                                                    onClick={() =>
                                                                        handleActions(
                                                                            indexRow
                                                                        )
                                                                    }
                                                                    className="border text-gray-400 border-gray-200 p-1 rounded-md transition-all duration-300 hover:bg-gray-300/20"
                                                                >
                                                                    <FaCaretDown
                                                                        size={
                                                                            20
                                                                        }
                                                                    />
                                                                </button>
                                                                <div
                                                                    
                                                                    className={`absolute top-[110%] text-left ${
                                                                        isStatus ===
                                                                        indexRow
                                                                            ? "opacity-100 visible translate-y-0"
                                                                            : "opacity-0 invisible -translate-y-4"
                                                                    } transition-all duration-400 rounded-md z-50 left-[-63px] border bg-white border-gray-200`}
                                                                >
                                                                    <ul className="p-2 min-w-[140px]" key={
                                                                        dropRef
                                                                    }>
                                                                        {row.status !==
                                                                            "IN_PROGRESS" && (
                                                                            <li
                                                                                onClick={() =>
                                                                                    handleStatus(
                                                                                        "IN_PROGRESS",
                                                                                        row.order_id
                                                                                    )
                                                                                }
                                                                                className="my-1 px-2 py-1 hover:bg-slate-100 cursor-pointer"
                                                                            >
                                                                                In
                                                                                Progress
                                                                            </li>
                                                                        )}
                                                                        {row.status !==
                                                                            "PENDING" && (
                                                                            <li
                                                                                onClick={() =>
                                                                                    handleStatus(
                                                                                        "PENDING",
                                                                                        row.order_id
                                                                                    )
                                                                                }
                                                                                className="my-1 px-2 py-1 hover:bg-slate-100 cursor-pointer"
                                                                            >
                                                                                Pending
                                                                            </li>
                                                                        )}
                                                                        {row.status !==
                                                                            "COMPLETED" && (
                                                                            <li
                                                                                onClick={() =>
                                                                                    handleStatus(
                                                                                        "COMPLETED",
                                                                                        row.order_id
                                                                                    )
                                                                                }
                                                                                className="my-1 px-2 py-1 hover:bg-slate-100 cursor-pointer"
                                                                            >
                                                                                Completed
                                                                            </li>
                                                                        )}
                                                                        {row.status !==
                                                                            "CANCELLED" && (
                                                                            <li
                                                                                onClick={() =>
                                                                                    handleStatus(
                                                                                        "CANCELLED",
                                                                                        row.order_id
                                                                                    )
                                                                                }
                                                                                className="my-1 px-2 py-1 hover:bg-slate-100 cursor-pointer"
                                                                            >
                                                                                Cancelled
                                                                            </li>
                                                                        )}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                    </tbody>
                                </table>
                            </div>
                            {/* Pagination */}

                            <div>
                                <Pagination
                                    currentPage={currentPage}
                                    setCurrentPage={handlePaginate}
                                    pageSize={sizePage}
                                    totalItems={
                                        tableData.find(
                                            (tab) => tab.id === IsActiveTab
                                        )?.rows.length
                                    }
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Orders;

const Pagination = ({ currentPage, setCurrentPage, totalItems, pageSize }) => {
    const totalPages = Math.ceil(totalItems / pageSize);

    const handlePaginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <ul className="flex items-center gap-2">
                <li>
                    <button
                        onClick={() => handlePaginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="bg-primary px-3 py-1 text-white text:white rounded-full text-sm disabled:bg-gray-500 disabled:cursor-not-allowed "
                    >
                        Previous
                    </button>
                </li>
                <li>
                    <button
                        className="bg-primary px-3 py-1 text-white text:white rounded-full text-sm disabled:bg-gray-500 disabled:cursor-not-allowed "
                        onClick={() => handlePaginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </div>
    );
};

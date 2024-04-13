import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "../../components/freelancer/freelancer.css";
import { useMessage } from "../../hooks/MessageContext";
import { useEffect } from "react";
import Spinner from "@ui/Spinner";
import { getMyGigs } from "../../data/gigs/GigData";
import Modal from "../../components/ui/Modal";

const Gigs = () => {
    const [IsActiveTab, setIsActiveTab] = useState(1);
    const { message } = useMessage();
    const [tabs , setTabs]= useState([]);
    const [isLoading , setIsloading]= useState(true);
    const [isModal , setIsModal] = useState(false)
    const [selectedId , setSelectedId] = useState(false)
    const [deleteGigMessage , setDeleteGigMsg] = useState('')
    const handleDeleteGig = (gigId) => {
        setIsModal(!isModal);
        setSelectedId(gigId)
    }
    const getAllMyGigs =  () => {
        const get = async () => {
            try {
                const getGigs = await getMyGigs();
                setTabs(getGigs.myGigs);
            } catch (error) {
                console.log(error);
            }finally {
                setTimeout(() => {
                    setIsloading(false)
                }, 1000);
            }
        }
        get()
    }
    useEffect(() => {
        getAllMyGigs();
    },[])
    const handleClick = (tab) => {
        setIsActiveTab(tab);
    };

    if (isLoading) {
        return (
            <>
                <div className="w-full h-[80vh] flex items-center justify-center">
                    <Spinner />
                </div>
            </>
        );
    }
    return (
        <>
            <div className="container mx-auto ">
            {message && (
                <div
                    className="bg-green-50 border-l-4 mb-2 border-green-500 text-green-700 p-2 "
                    role="alert"
                >
                    <p class="font-bold">Success</p>
                    <p>{message}</p>
                </div>
            )}
            {deleteGigMessage && (
                <div
                    className="bg-rose-50 border-l-4 mb-2 border-rose-500 text-rose-700 p-2 "
                    role="alert"
                >
                    <p class="font-bold">Success</p>
                    <p>{deleteGigMessage}</p>
                </div>
            )}
                <h2 className="text-4xl my-[20px] text-gray-700 font-light">
                    Manage Gigs
                </h2>
                <div className="relative">
                    <ul className="uppercase text-gray-600 text-sm font-light border-b flex  border-gray-300">
                        { tabs.map((tab) => {
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
                        <button className="uppercase text-xs  text-white absolute right-0 top-2 rounded-sm shadow-gray-400 transition-shadow duration-300 hover:shadow-lg ">
                            <Link to={"/gigs/create"} className="bg-primary px-3 py-2">Create a new gigs</Link>
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
                                                        {row.id}
                                                    </td>
                                                    <td className="text-light py-3 text-center text-sm text-gray-500">
                                                        {row.title}
                                                    </td>
                                                    <td className="text-light py-3 max-w-[130px] overflow-hidden text-clip text-center text-sm text-gray-500">
                                                        {row.excerpt}
                                                    </td>
                                                    <td className="text-light py-3 text-center text-sm text-gray-500">
                                                        {row.delivery_date}
                                                    </td>

                                                    <td className="text-light py-3 text-center text-sm text-gray-500">
                                                        <span
                                                            className={`px-3 border py-1 rounded-full ${
                                                                row.status ==
                                                                "pending"
                                                                    ? "bg-yellow-100  border-yellow-300 text-yellow-500"
                                                                    : row.status ==
                                                                      "declined"
                                                                    ? "bg-red-100  border-red-300 text-red-500"
                                                                    : row.status ===
                                                                      "approved"
                                                                    ? "bg-green-100  border-green-300 text-green-500"
                                                                    : ""
                                                            }`}
                                                        >
                                                            {row.status}
                                                        </span>
                                                    </td>
                                                    {row.actions && (
                                                        <td className="text-light py-3 text-center text-sm text-gray-500">
                                                            <button onClick={() => {handleDeleteGig(row.id)}} className="text-white bg-rose-500 px-2 py-1 rounded-full text-sm">Delete</button>
                                                            <button className="text-white bg-green-500 ml-2 rounded-full text-sm">
                                                                <Link to={`/gigs/update/${row.id}`} className="px-4 py-1 block">Edit</Link>
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
                <Modal setDeletionMessage={setDeleteGigMsg} getAllMyGigs={getAllMyGigs} id={selectedId} isModal={isModal} setIsModal={() => setIsModal(!isModal)}/>
            </div>
        </>
    );
};

export default Gigs;

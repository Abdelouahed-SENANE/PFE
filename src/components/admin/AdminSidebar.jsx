import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import {
    FaBars,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";

import { MdCategory } from "react-icons/md";

const AdminSidebar = () => {

    const [hideBar, setHideBar] = useState(false);
    return (
        <>
            <aside className={`sidebar ${hideBar ? "hide_bar" : ""}`}>
                <header className="h-[77px] w-full flex ">
                    <div className="flex items-center w-full  py-1 px-1 text-primary border-b border-gray-200 ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width={40}
                            height={40}
                            viewBox="0,0,256,256"
                            className="min-w-[66px] text-center"
                        >
                            <g
                                fill="currentColor"
                                fillRule="nonzero"
                                stroke="none"
                                strokeWidth={1}
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                strokeMiterlimit={10}
                                strokeDasharray=""
                                strokeDashoffset={0}
                                fontFamily="none"
                                fontWeight="none"
                                fontSize="none"
                                textAnchor="none"
                            >
                                <g transform="scale(5.33333,5.33333)">
                                    <rect
                                        x="6"
                                        y="8"
                                        width="34"
                                        height="34"
                                    ></rect>
                                    <path d="M44,19v-15h-15z"></path>
                                    <rect
                                        x="-1.25993"
                                        y="30.95701"
                                        transform="rotate(-45.001)"
                                        width="22.648"
                                        height="5.969"
                                    ></rect>
                                    <rect
                                        x="17.67594"
                                        y="30.95788"
                                        transform="rotate(-45.001)"
                                        width="3.712"
                                        height="5.969"
                                    ></rect>
                                </g>
                            </g>
                        </svg>
                        <h2
                            className={`font-['Overlock SC'] text-3xl font-bold title text-primary px-1`}
                        >
                            Linkup.
                        </h2>
                    </div>
                </header>
                <div className="w-full  flex justify-between flex-col h-[calc(100vh-77px)] py-5">
                    <div>
                        <h4 className="text-gray-600 tracking-[2px] px-4">
                            Main
                        </h4>
                        <ul className="flex justify-center flex-col p-2">
                            <li className="my-1">
                                <NavLink
                                    to={"admin/dashboard"}
                                    className="link_bar"
                                >
                                    <MdDashboard className="icon" />
                                    <span className="title">Dashboard</span>
                                </NavLink>
                            </li>

                            <li className="my-1">
                                <NavLink
                                    to={"admin/categories"}
                                    className="link_bar"
                                >
                                    <MdCategory className="icon" />
                                    <span className="title">Categories</span>
                                </NavLink>
                            </li>
                            <li className="my-1">
                                <NavLink
                                    to={"admin/users"}
                                    className="link_bar"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="icon"
                                    >
                                        <path d="M7 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM14.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM1.615 16.428a1.224 1.224 0 0 1-.569-1.175 6.002 6.002 0 0 1 11.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 0 1 7 18a9.953 9.953 0 0 1-5.385-1.572ZM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 0 0-1.588-3.755 4.502 4.502 0 0 1 5.874 2.636.818.818 0 0 1-.36.98A7.465 7.465 0 0 1 14.5 16Z" />
                                    </svg>

                                    <span className="title">Users</span>
                                </NavLink>
                                
                            </li>
                            <li className="my-1">
                                <NavLink
                                    to={"/admin/authorization"}
                                    className="link_bar"
                                >
                                    <MdVerified size={24} className="icon"/>

                                    <span className="title">Gig Authorization</span>
                                </NavLink>
                                
                            </li>
                        </ul>
                    </div>
                    <div className=""></div>
                </div>
                {/* ==== Toggle btn Sidebar */}
                <div
                    onClick={() => setHideBar(!hideBar)}
                    className="absolute  top-[25px] right-[-30px] cursor-pointer hover:text-primary"
                >
                    <FaBars className="text-2xl " />
                </div>
            </aside>
        </>
    );
};

export default AdminSidebar;

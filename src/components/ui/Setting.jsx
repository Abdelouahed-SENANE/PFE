import React, { useState } from "react";
import { IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom";

const Setting = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <div className="relative">
                <div
                    onClick={() => setIsActive(!isActive)}
                    className={`w-8 h-8 bg-white  text-gray-600 group relative rounded-full flex items-center justify-center  text-lg cursor-pointer group transition-all hover:bg-primary  duration-500`}
                >
                    <IoSettings className="group-hover:text-white duration-300 transition-all" />
                </div>
                <div
                    className={`setting_wrapper ${
                        isActive ? "active" : "inactive"
                    }`}
                >
                    <h4 className="border-slate-300 border-b px-2 py-3 text-sm text-gray-600">
                        Settings
                    </h4>
                    <ul className="p-2">
                        <li>
                            <Link
                                to={"/profile"}
                                className="block px-2 py-2.5 hover:bg-gray-100 duration-500 transition-all"
                            >
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/profile"}
                                className="block px-2 py-2.5 hover:bg-gray-100 duration-500 transition-all"
                            >
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Setting;

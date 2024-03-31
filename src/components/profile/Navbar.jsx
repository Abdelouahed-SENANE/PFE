import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Navbar = () => {

    return (
        <nav className="border-b border-gray-200 py-4">
            <div className="mx-auto w-[90%]">
                <div className="flex items-center gap-2">
                    <Link to={"/"} className="flex items-center gap-2">
                        <FaArrowLeftLong className="text-xl text-gray-500" />
                    </Link>
                    <h3 className="text-xl text-gray-700">Profile</h3>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

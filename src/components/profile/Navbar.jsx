import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="border-b border-gray-200 py-4">
            <div className="mx-auto w-[90%]">
                <div className="flex items-center gap-2">
                    <button to="#" onClick={() => navigate(-1)} className="flex items-center gap-2">
                        <FaArrowLeft className="text-xl text-gray-500" />
                    </button>
                    <h3 className="text-xl text-gray-700">Profile</h3>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

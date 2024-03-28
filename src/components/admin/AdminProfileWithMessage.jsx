import React from "react";
import { FaRegMessage } from "react-icons/fa6";

const AdminProfileWithMessageOption = ({ picture, name, email }) => {
    return (
        <div className="flex items-center justify-between my-4">
            <div className="flex gap-2 items-center">
                <div>
                    <img
                        src={picture}
                        alt=""
                        className="w-12 h-12 rounded-lg"
                    />
                </div>
                <div>
                    <h6 className="text-sm">{name}</h6>
                    <span className="text-gray-500 text-xs">{email}</span>
                </div>
            </div>
            <div className="border-2 rounded-lg p-2.5 cursor-pointer flex items-center justify-center border-gray-300">
                <FaRegMessage className="text-sm" />
            </div>
        </div>
    );
};

export default AdminProfileWithMessageOption;

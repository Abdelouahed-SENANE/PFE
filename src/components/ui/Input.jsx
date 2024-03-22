import React, { useState } from "react";
import { FaCheckCircle, FaExclamationTriangle, FaUser } from "react-icons/fa";

const Input = ({
    type,
    placeholder,
    value,
    onChange,
    icon: IconComponent,
    onKeyUp,
    error,
    success,
}) => {
    return (
        <>
            <div className="relative flex  items-center gap-2 w-full text-gray-500 mt-2 text-sm">
                {IconComponent && (
                    <IconComponent className="absolute top-[50%] left-3 translate-y-[-50%]" />
                )}
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onKeyUp={onKeyUp}
                    onChange={onChange}
                    className={`text-gray-800 py-2 outline-none border-2 w-full px-8  transition-all duration-500   rounded-md
                     ${
                         error
                             ? "border-rose-500 focus:border-rose-500"
                             : success
                             ? "border-green-600 focus:border-green-600"
                             : "border-gray-300 focus:border-slate-400"
                     }`}
                />
                {success && (
                    <FaCheckCircle className="absolute top-[50%] right-3 text-green-600 translate-y-[-50%] transition-all duration-500" />
                )}
            </div>
            {error && (
                <div className="w-full text-left flex items-center px-2 gap-1 text-rose-500  text-sm font-medium py-1 mt-1">
                    <FaExclamationTriangle />
                    <span className=" ">{error}</span>
                </div>
            )}
        </>
    );
};

export default Input;

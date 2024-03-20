import React from "react";
import { Link } from "react-router-dom";

const Button = ({ bgColor, textColor, colorBorder, to, text, fill }) => {
    return (
        <button
            className={`bg-${bgColor} ${textColor} mx-2 ${
                fill ? "hover:text-primary" : "hover:text-white"
            } border-2  w-full lg:max-w-[200px] mx-auto px-[20px] relative transition-all duration-300 py-1.5 rounded-md btn-primary border-${colorBorder} ${
                fill ? "btn-fill" : "btn-unfill"
            }`}
        >
            <Link to={to}>
                <span className={`relative`}>{text}</span>
            </Link>
        </button>
    );
};

export default Button;

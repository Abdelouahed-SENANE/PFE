import React from "react";
import { Link } from "react-router-dom";

const Button = ({ bgColor, textColor, colorBorder, to, text, fill, width }) => {
    return (
        <Link to={to}>
            <button type="submit"
                className={`bg-${bgColor} ${textColor} mx-2 ${
                    fill ? "hover:text-primary" : "hover:text-white"
                } border-2   mx-auto ${width}  relative transition-all duration-300 py-1.5 px-4 rounded-md btn-primary ${colorBorder} ${
                    fill ? "btn-fill" : "btn-unfill"
                }`}
            >
                <span className={`relative`}>{text}</span>
            </button>
        </Link>
    );
};

export default Button;

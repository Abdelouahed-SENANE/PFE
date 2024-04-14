import React from "react";
import "./radio.css";
const RadioInput = ({ name, id, onChange, value, checked, label }) => {
    return (
        <div>
            <label
                htmlFor={id}
                className="inline-flex items-center cursor-pointer"
            >
                <input
                    type="radio"
                    id={id}
                    name={name}
                    value={value}
                    checked={checked}
                    onChange={onChange}
                    className="hidden"
                />
                <div className="custom__radio ">
                    <div className={`inner__dot ${checked ? 'visible opacity-1 ' : 'invisible opacity-0'} transition-all duration-300`}></div>
                </div>
                <span className="ml-2 text-sm text-gray-700">{label}</span>
            </label>
        </div>
    );
};

export default RadioInput;

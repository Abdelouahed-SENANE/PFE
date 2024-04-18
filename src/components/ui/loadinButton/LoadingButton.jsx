import React from "react";
import "./style.css";
const LoadingButton = ({text}) => {
    return (
        <div className="flex gap-2 w-full items-center justify-center">
            <span class="button_loader"></span>
            <p>{text}</p>
        </div>
    );
};

export default LoadingButton;

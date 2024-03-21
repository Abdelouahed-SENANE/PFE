import React, { useEffect } from "react";
import spinner from "../../assets/images/Spinner.svg";
const Spinner = () => {
    return (
        <div>
            <img src={spinner} alt="" className="w-[110px]" />
        </div>
    );
};

export default Spinner;

import React from "react";
import LoadingButton from "../ui/loadinButton/LoadingButton";

const Widget = ({title ,number , icon , bgColor}) => {
    return (
        <div className={`flex-1 border flex items-center justify-between border-gray-200 text-white ${bgColor} rounded-lg p-5 `}>
            <div>
            <div className="flex text-gray-400 mb-4 items-center justify-between">
                <h5 className="text-4xl text-white">Total</h5>
            </div>
            <div className="">
                <div className="flex gap-2">
                    <h6 className="text-4xl font-medium">
                        {
                            !number ? (<LoadingButton/>) : (number)
                        }
                    </h6>
                    <span className="self-end text-lg font-medium">{title}</span>
                </div>
            </div>
            </div>
            <div className="self-end text-6xl">
                {icon}
            </div>
        </div>
    );
};

export default Widget;

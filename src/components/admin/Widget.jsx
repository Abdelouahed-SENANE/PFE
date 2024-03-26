import React from "react";
import { IoMdMore } from "react-icons/io";
import { FaArrowTrendDown } from "react-icons/fa6";

const Widget = () => {
    return (
        <div className="flex-1 border border-gray-200 bg-white rounded-lg p-5">
            <div className="flex text-gray-400 mb-4 items-center justify-between">
                <h5 className="">Total Service Sold Per Day</h5>
                <button>
                    <IoMdMore className="text-[24px] cursor-pointer" />
                </button>
            </div>
            <div className="flex items-center justify-between">
                <div className="left flex items-center gap-2">
                    <h6 className="text-4xl font-medium">24,456</h6>
                    <span className="text-gray-400 self-end">Service</span>
                </div>
                <div className="right">
                    <div className="border-2 rounded-full font-medium flex items-center gap-1 px-3 text-rose-500 border-rose-500 ">
                        <FaArrowTrendDown />
                        <h6 className="text-sm ">12.5 %</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Widget;

import React from "react";

const Paginate = ({ totalCategories , prevPage , nextPage , currentPage}) => {

    return (
        <div className="py-5 px-3 flex items-center justify-between bg-white border w-full rounded-es-lg rounded-ee-lg">
            <div className="flex items-center gap-2 justify-between w-full">
                <div>
                    <button onClick={() => prevPage()} className="text-gray-900 mr-2 text-[14px] hover:bg-gray-200/40 transition-all duration-300 border border-gray-200 rounded-md px-3 py-1 ">
                        Previous
                    </button>
                    <button onClick={() => nextPage()} className="text-gray-900 text-[14px] hover:bg-gray-200/40 transition-all duration-300 border border-gray-200 rounded-md px-3 py-1 ">
                        Next
                    </button>
                </div>
                <div className="text-gray-600 text-sm">
                    Page <span className="text-black">{currentPage}</span> of{" "}
                    <span className="text-black">{totalCategories}</span>
                </div>
            </div>
        </div>
    );
};

export default Paginate;

import React from "react";

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
    const countPages = pages.last_page;
    const handleChangePage = (e) => {
        setCurrentPage(e.target.dataset.id);
    };
    const handlePrevPage = () => {
        const prevPage = currentPage - 1;
        if (prevPage > 0) {
            setCurrentPage(prevPage);
        }
    };
    const handleNextPage = () => {
        const nextPage = currentPage + 1;
        if (currentPage < countPages) {
            setCurrentPage(nextPage);
        }
    };
    const activePage = "bg-gray-300/40";
    return (
        <>
            <div className=" w-fit mx-auto p-2 mt-8">
                    <button
                        onClick={handlePrevPage}
                        className={`text-gray-900 mr-2  text-[14px] hover:bg-gray-200/40 transition-all duration-300 border border-gray-200 rounded-md px-3 py-1
                                `}
                    >
                        Previous
                    </button>
                {[...Array(countPages)].map((_, i) => {
                    const pageNumber = i + 1;
                    return (
                        <button
                            onClick={handleChangePage}
                            data-id={pageNumber}
                            key={i}
                            className={`text-gray-900 mr-2  text-[14px] hover:bg-gray-200/40 transition-all duration-300 border border-gray-200 rounded-md px-3 py-1
                            ${
                                // links[i + 1].label.includes(currentPage)
                                    currentPage == pageNumber
                                    ? activePage
                                    : ""
                            }`}
                        >
                            {i + 1}
                        </button>
                    );
                })}
                { pages && (
                    <button
                        onClick={handleNextPage}
                        className={`text-gray-900 mr-2  text-[14px] hover:bg-gray-200/40 transition-all duration-300 border border-gray-200 rounded-md px-3 py-1
                            `}
                    >
                        Next
                    </button>
                )} 
            </div>
        </>
    );
};

export default Pagination;

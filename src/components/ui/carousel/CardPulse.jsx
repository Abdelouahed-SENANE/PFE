import React from "react";
import { Link } from "react-router-dom";

const CardPulse = () => {
    const data = 9;
    return (
        <div className="container mx-auto ">
            <div className="grid mt-10 grid-cols-3 gap-5 flex-1">
                {...Array.from({length : data}).map((_, i) => (
                    <div
                        key={i}
                        className="border flex flex-col overflow-hidden border-slate-200 rounded-lg shadow-md shadow-slate-200/20 duration-500 transition-all hover:border-primary animate-pulse"
                    >
                        <Link to="#">
                            <div className="bg-slate-300 h-[200px]"></div>
                            {/* <Carousel images={card.images} /> */}
                        </Link>
                        <div className="p-4 bg-white flex-grow">
                            {/* Placeholder title */}
                            <h6 className="text-gray-500 text-sm h-4 w-2/3 bg-gray-300 mb-2 rounded animate-pulse" />

                            {/* Placeholder excerpt */}
                            <p className="h-3 bg-gray-300 mb-3 rounded animate-pulse" />

                            {/* Placeholder tags */}
                            <div className="flex space-x-1 mb-2">
                                <span className="h-3 w-12 bg-gray-300 rounded animate-pulse" />
                                <span className="h-3 w-12 bg-gray-300 rounded animate-pulse" />
                                <span className="h-3 w-12 bg-gray-300 rounded animate-pulse" />
                            </div>

                            {/* Placeholder rating */}
                            <div className="flex items-center border-b py-3 border-slate-200">
                                <span className="h-3 w-8 bg-gray-300 rounded animate-pulse" />
                            </div>

                            {/* Placeholder freelancer info */}
                            <div className="flex justify-between items-center mt-2">
                                <div className="flex items-center space-x-2">
                                    <div className="h-7 w-7 bg-slate-400 rounded-full animate-pulse" />
                                    <span className="h-3 w-20 bg-gray-300 rounded animate-pulse" />
                                </div>
                                <span className="h-3 w-12 bg-gray-300 rounded animate-pulse" />
                            </div>
                            <div className="flex justify-between items-center mt-2">
                            <span className="h-3 w-24 bg-gray-300 rounded animate-pulse" />
                        </div>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardPulse;

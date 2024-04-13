import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import Carousel from "./carousel/Carousel";
const Cards = ({ data }) => {
    
    return (
        <>
            <div className="container mx-auto ">
                <div className="grid mt-10 grid-cols-3 gap-5">
                    {data?.map((card) => {
                        return (
                            <div
                                key={card.id}
                                className="border flex flex-col border-slate-200 overflow-hidden   rounded-lg shadow-md shadow-slate-200/20 duration-500 transition-all  hover:border-primary"
                            >
                                <Link to={"#"}>
                                    <Carousel id={card.id} images={card.images} />
                                </Link>
                                <div className="p-3 bg-white flex-grow">
                                    <h6 className="text-gray-500 text-sm">
                                        {card.title}
                                    </h6>
                                    <Link to={"/service"}>
                                        <p className="hover:underline pt-1 text-ellipsis overflow-hidden text-nowrap text-sm hover:text-primary cursor-pointer transition-colors duration-300">
                                            {card.excerpt}
                                        </p>
                                    </Link>
                                    <div className="pt-3">
                                        {
                                            card.search_tags.map((tag , i) => {
                                                return (
                                                    <span key={i} className="text-[13px] text-white bg-primary inline-flex py-1 mr-1 rounded mb-1 px-2">{tag}</span>
                                                )
                                            })

                                        }
                                    </div>
                                    <div className="flex items-center border-b py-2 border-slate-200">
                                        <FaStar className="text-yellow-400" />
                                        <div>
                                            <span className="px-2">
                                                {card.rating}
                                            </span>
                                            <span className="text-gray-400 text-sm">
                                                ( {card.numReviews} review )
                                            </span>
                                        </div>
                                    </div>
                                    <div className="pt-3">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-1">
                                                <img
                                                    src={`http://localhost:8000/storage/uploads/${card.freelancer.user.picture}`}
                                                    alt="Profile"
                                                    className="h-7 w-7 rounded-full bg-slate-400"
                                                />
                                                <h6 className="text-sm">
                                                    {card.freelancer.user.name}
                                                </h6>
                                            </div>
                                            <div>
                                                <span className="text-sm text-gray-500">
                                                    Price :
                                                </span>
                                                <span>${card.price}</span>
                                            </div>
                                        </div>
                                        <div className="text-sm pt-2 border-t mt-3 text-gray-500">
                                            <span>Delivered in</span>
                                            <span>
                                                {" "}
                                                {card.delivery > 1
                                                    ? card.delivery + " days"
                                                    : card.delivery + " day"}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Cards;

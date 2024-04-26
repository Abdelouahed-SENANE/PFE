import React from "react";
import test from "@assets/images/test.jpg";
import { FaStar } from "react-icons/fa";
import moment from "moment";
import { FaRegStar } from "react-icons/fa";
const RatingComment = ({ rating  }) => {
    return (
        <>
            <div key={rating.id} className="w-full">
                <div  className="my-3 bg-slate-100 p-4 rounded-md py-3 ">
                    <div className="flex">
                        <p className="flex text-md items-center gap-1   py-1 text-yellow-400 rounded-full">
                            {(() => {
                                const starItems = [];
                                for (let i = 1; i <= 5; i++) {

                                    if (i <= rating.value) {
                                        starItems.push(<FaStar size={18} />);
                                    }else{
                                        starItems.push(<FaRegStar size={18} />);
                                    }
                                }
                                return starItems;
                            })()}
                        </p>
                    </div>
                    <div className="my-2 w-full">
                        <p className="text-gray-600 text-pretty text-[16px] max-w-full overflow-y-hidden break-words  break-all ">
                            {rating.comment}
                        </p>
                    </div>
                    <div className="flex items-center my-2 justify-between">
                        <div className="flex gap-3 items-center">
                            <img
                                src={
                                    "http://localhost:8000/storage/avatars/" +
                                    rating.client.user.picture
                                }
                                alt=""
                                className="h-10 w-10 rounded-full"
                            />
                            <div>
                                <h4 className="text-lg">
                                    {rating.client.user.name}
                                </h4>
                            </div>
                        </div>
                        <div className="flex justify-between items-start">
                            <span className="text-sm text-gray-500">
                                {moment(rating.created_at).format(
                                    "D MMMM, YYYY"
                                )}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RatingComment;

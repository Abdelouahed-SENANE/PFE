import React from "react";
import test from "@assets/images/test.jpg";
import { FaStar } from "react-icons/fa";
const RatingComment = ({ ratings }) => {
    return (
        <>
            <div className="mt-5 mb-3">
                <h2 className="text-2xl">Customer reviews</h2>
            </div>
            <div className="my-5 flex items-start gap-5 border-t py-3 bg-gray-100 ">
                <div>
                    <img src={test} alt="" className="h-12 w-12 rounded-full" />
                </div>
                <div className="flex-1">
                    <div className="flex justify-between items-start">
                        <div className="flex">
                        <h4 className="text-lg">Name</h4>
                        <p className="flex mx-2 text-md items-center gap-1 bg-primary px-3 py-1 text-white rounded-full">
                            <FaStar className="mr-1" />
                            <span>4.9</span>
                        </p>
                        </div>

                        <span className="text-sm text-gray-500">
                            Date Rating
                        </span>
                    </div>

                    <div className="my-1">
                        <p>
                            Haroon was very approachable and easy to communicate
                            with. Work was done ahead of schedule and any
                            changes were actioned promptly and to the desired
                            specs. He was always happy to help and answer
                            questions. Will be coming back in future projects
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RatingComment;

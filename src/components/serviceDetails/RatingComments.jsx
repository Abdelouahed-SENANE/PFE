import React, { useEffect, useState } from "react";

import RatingComment from "./RatingComment";
import { getReviewsOfGig } from "../../data/gigs/GigData";
import { LuStarOff } from "react-icons/lu";
const RatingComments = ({ gigId, ratings, setRatings }) => {
    const fetchRatings = async () => {
        try {
            const result = await getReviewsOfGig(gigId);
            setRatings(result.ratings);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchRatings();
    }, []);

    return (
        <div>
            <div className="mt-5 mb-3">
                <h2 className="text-2xl">Customer reviews</h2>
            </div>
            {ratings && ratings.length > 1
                ? ratings?.map((rating, index) => (
                      <RatingComment key={index} rating={rating} />
                  ))
                : <div className="w-full text-gray-400 flex flex-col items-center justify-center h-[200px]">
                    <LuStarOff size={120}/>
                    <p className="text-xl font-light">No Reviews at the moment</p>
                    </div>}
        </div>
    );
};

export default RatingComments;

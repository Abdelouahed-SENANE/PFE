import React, { useEffect, useState } from "react";

import RatingComment from "./RatingComment";
import { getReviewsOfGig } from "../../data/gigs/GigData";
const RatingComments = ({ gigId }) => {
    const [ratings, setGigRating] = useState([]);
    const fetchRatings = async () => {
        try {
            const result = await getReviewsOfGig(gigId);
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchRatings();
    },[])
    
    return (
        <div>
            <RatingComment ratings={ratings}/>
        </div>
    );
};

export default RatingComments;

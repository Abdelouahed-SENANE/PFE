import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { getAverageRating } from "../../data/rating/RatingService";

const Header = ({ data }) => {
    const [average , setAverage] = useState(null);
    const [totalRating , setTotalRating] = useState(null);
    useEffect(() => {
        const fetchAverageRating = async () => {
            try {
                const result = await getAverageRating(data.freelancer.id)
                setAverage(result.average)
                setTotalRating(result.totalRating);
            } catch (error) {
                console.error(error);
            }
        }
        fetchAverageRating()
    },[])

    return (
        <div className="w-full">
            <h1 className="text-[28px] font-medium overflow-y-hidden break-words  break-all w-full"> {data.excerpt}</h1>
            <div className="flex items-center gap-4">
                <div className="w-[64px] h-[64px] my-3 ">
                    <img
                        src={`http://localhost:8000/storage/avatars/${data.freelancer.user.picture}`}
                        alt="profile"
                        className="w-full h-full rounded-full"
                    />
                </div>
                <div className="">
                    <h4 className="text-lg font-medium">{data.freelancer.user.name}</h4>
                    <div className="my-1 flex items-center gap-1">
                        <FaStar className="text-yellow-400" />
                        <p>
                            {average} <span className="text-gray-400">({totalRating} reviews)</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

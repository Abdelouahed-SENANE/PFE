import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import Carousel from "./carousel/Carousel";
import { getAverageRating } from "../../data/rating/RatingService";
import { truncate } from "../../utils/truncate";

const Card = ({ card }) => {
    const [average, setAverage] = useState(null);
    const [totalRating, setTotalRating] = useState(null);
    useEffect(() => {
        const fetchAverageRating = async () => {
            try {
                const result = await getAverageRating(card.freelancer.id);
                setAverage(result.average);
                setTotalRating(result.totalRating);
            } catch (error) {
                console.error(error);
            }
        };
        fetchAverageRating();
    }, []);

    return (
        <div
            key={card.id}
            className="border flex flex-col border-slate-200 overflow-hidden rounded-lg shadow-md shadow-slate-100 duration-500 transition-all hover:border-slate-300"
        >
            <Carousel id={card.id} images={card.images} />
            <div className="p-3 bg-white flex-grow">
                <h6 className="text-gray-500">
                    {card.title}{" "}
                    <span className="text-sm ml-2 bg-primary/10 px-2 py-1 text-green-600 rounded-md">
                        {card.subcategory.name}
                    </span>
                </h6>
                <Link to={"/service-details/" + card.id}>
                    <p className="hover:underline pt-1 text-pretty overflow-y-hidden break-words  break-all w-full hover:text-primary cursor-pointer transition-colors duration-300">
                        {truncate(card.excerpt , 70)}
                    </p>
                </Link>
                <div className="pt-3">
                    {card.search_tags.map((tag, i) => (
                        <span
                            key={i}
                            className="text-[13px] text-white bg-primary inline-flex py-1 mr-1 rounded mb-1 px-2"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex items-center border-b py-2 border-slate-200">
                    <FaStar className="text-yellow-400" />
                    <div>
                        <span className="px-2">{average}</span>
                        <span className="text-gray-400 text-sm">
                            ({totalRating} review)
                        </span>
                    </div>
                </div>
                <div className="pt-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <img
                                src={`http://localhost:8000/storage/avatars/${card.freelancer.user.picture}`}
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
                            {card.delivery > 1
                                ? ` ${card.delivery} days`
                                : ` ${card.delivery} day`}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;

import { React, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { getAverageRating } from "../../data/rating/RatingService";

const HeaderContent = ({ gig }) => {
    const [average, setAverage] = useState(null);
    const [totalRating, setTotalRating] = useState(null);
    useEffect(() => {
        const fetchAverageRating = async () => {
            try {
                const result = await getAverageRating(gig.freelancer.id);
                setAverage(result.average);
                setTotalRating(result.totalRating);
            } catch (error) {
                console.error(error);
            }
        };
        fetchAverageRating();
    }, []);
    return (
        <>
            <div>
                <h1 className="text-2xl ">Details Service</h1>
                <p className="my-4">
                    We are deeply committed to crafting professional {gig.title}{" "}
                    that align with your specific requirements.
                </p>
                <p className="text-gray-600">{gig.description}</p>
            </div>
            <div className="my-8">
                <h1 className="text-2xl">About This freelancer</h1>
                <div className="py-4 flex justify-between gap-2">
                    <div className="flex gap-3">
                        <div>
                            <img
                                src={
                                    "http://localhost:8000/storage/avatars/" +
                                    gig.freelancer.user.picture
                                }
                                alt="profile"
                                className="w-10 h-10 rounded-full"
                            />
                        </div>
                        <div>
                            <h4>{gig.freelancer.user.name}</h4>
                            <div className="my-1 flex gap-4 justify-between w-full">
                                <div className="flex items-center  gap-2">
                                    <FaStar className="text-yellow-400" />
                                    <p>
                                        {average}{" "}
                                        <span className="text-gray-400">
                                            ({totalRating} reviews)
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="border-2 self-end  border-primary px-3 rounded-md hover:bg-gray-100 text-primary py-1">
                            Message me
                        </button>
                    </div>
                </div>
                <div>
                  <h4 className="text-xl">Bio</h4>
                  <p className="text-gray-500 my-2">{gig.freelancer.bio}</p>
                  <div>
                    <h5 className="mb-2">Skills</h5>
                    {
                    gig.freelancer.skills.map((skill , index) => {
                      return (
                        <span key={index}  className="px-3 py-1 mr-1 my-2 rounded-md bg-primary text-white">{skill}</span>
                      )
                    })
                  }
                  </div>
                </div>
            </div>
        </>
    );
};

export default HeaderContent;

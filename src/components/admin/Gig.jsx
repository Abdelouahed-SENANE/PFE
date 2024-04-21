import React, { useRef, useState, useEffect } from "react";
import "../../assets/theme-overrides.css";
import { FaCheck } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { updateStatusGig } from "../../data/gigs/GigService";
import { getPendingGigs } from "../../data/gigs/GigData";
const Gig = ({ gigs = [], setGigs, setIsloading }) => {
    const handleApproved = async (id) => {
        try {
            const response = await updateStatusGig("approved", id);
            if (response.status === 200) {
                const gigs = await getPendingGigs();
                setIsloading(true);

                setTimeout(() => {
                    setIsloading(false);
                }, 2000);
                setGigs(gigs);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const handleDeclined = async (id) => {
        try {
            const response = await updateStatusGig("declined", id);
            if (response.status === 200) {
                const gigs = await getPendingGigs();
                setIsloading(true);

                setTimeout(() => {
                    setIsloading(false);
                }, 2000);
                setGigs(gigs);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            {gigs &&
                gigs?.map((gig, index) => {
                    console.log(gig);
                    return (
                        <tr key={index} className="text-center">
                            <td className="p-4  font-normal ">{gig.id}</td>
                            <td className="p-4  font-normal flex gap-1 justify-center items-center min-h-[120px]">
                                {gig.images.map((image, index) => {
                                    return (
                                        <img
                                            key={index}
                                            src={`http://localhost:8000/storage/uploads/${image}`}
                                            alt=""
                                            className="h-12 w-12 rounded-full "
                                        />
                                    );
                                })}
                            </td>
                            <td className="p-4   font-normal ">
                                <div className="flex items-center justify-center gap-5 ">
                                    <div>
                                        <img
                                            src={`http://localhost:8000/storage/avatars/${gig.freelancer.user.picture}`}
                                            alt=""
                                            className="h-12 w-12 rounded-full "
                                        />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-medium text-lg">
                                            {gig.freelancer.user.name}
                                        </h3>
                                        <h5 className="my-1">{gig.title}</h5>
                                        <p className="text-sm text-gray-700 max-w-[500px]">
                                            {gig.excerpt}
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="p-4  font-normal ">
                                <div className="flex items-center justify-center gap-2">
                                    <button
                                        onClick={() => handleApproved(gig.id)}
                                        className="px-3 bg-green-500 py-2 rounded-md"
                                    >
                                        <FaCheck size={16} color="#fff" />
                                    </button>
                                    <button
                                        onClick={() => handleDeclined(gig.id)}
                                        className="px-3 bg-red-500 py-2 rounded-md"
                                    >
                                        <FaXmark size={16} color="#fff" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    );
                })}
        </>
    );
};

export default Gig;

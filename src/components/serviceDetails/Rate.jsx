
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
const Rate = ({rate,setRate}) => {
    const handleClick = (rate) => {
        setRate(rate)
    }
    return (
        <>
        <h2 className="text-xl font-medium">Rate</h2>
        <div className="flex my-2">
            {[...Array(5)].map((_, index) => {
                const givenRating = index + 1;
                return (
                    <label key={index}>
                        <input
                            type="radio"
                            value={givenRating}
                            className="hidden"
                            onClick={() => {
                                handleClick(givenRating);
                            }}
                        />
                        <div className="cursor-pointer">
                            <FaStar
                                className={
                                    givenRating < rate || givenRating === rate
                                        ? "text-yellow-400 text-xl"
                                        : "text-gray-300 text-xl"
                                    }
                            />
                        </div>
                    </label>
                );
            })}
        </div>
        </>

    );
};
 
export default Rate;

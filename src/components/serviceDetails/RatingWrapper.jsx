import React, { useState } from "react";
import Rating from "./Rate";
import FormRating from "./FormRating";
import test from '@assets/images/test.jpg'
const RatingWrapper = () => {
    const [rate, setRate] = useState(0);
    const [feedback, setFeedback] = useState(null);
    const handleClick = () => {
        console.log(feedback);
    };
    return (
        <div className="border-t mt-4 py-4 gap-3 flex items-start">
            <div>
              <img src={test} alt="" className="h-12 w-12 rounded-full"/>
            </div>
            <div className="flex-1">
            <Rating rate={rate} setRate={setRate} />
            <FormRating setFeedback={setFeedback} />
            <button
                onClick={handleClick}
                className="px-14 rounded-md  my-4 text-lg text-white py-2 bg-primary"
            >
                Submit
            </button>
            </div>
        </div>
    );
};

export default RatingWrapper;

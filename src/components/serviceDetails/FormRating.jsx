import React from "react";

const FormRating = ({ setFeedback }) => {

    return (
        <div>
            <h1 className="text-xl my-2 font-medium">Additional feedback</h1>
            <textarea
            onChange={(e) => setFeedback(e.target.value)}
                placeholder="If you have additional feedback"
                className="resize-none py-2 px-4 w-full outline-none rounded-md border-2 h-[100px] focus:ring-4 focus:border-primary focus:ring-primary/50 transition-all duration-300 bg-white"
            ></textarea>
        </div>
    );
};

export default FormRating;

import React, { useEffect, useRef, useState } from "react";

function MultiSelect({ tags = [], setTags }) {
    const [inputValue, setInputValue] = useState("");
    const [isFocus, setIsFocus] = useState(false);

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevents form submission
            const newTag = inputValue.trim();
            if (newTag !== "" && tags.length < 5) {
                setTags([...tags, newTag]);
                setInputValue("");
            }
        } else if (tags.length >= 5) {
            event.preventDefault();
        }
    };

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleRemoveTag = (indexToRemove) => {
        setTags(tags.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className="flex flex-wrap w-full ">
            <span className="text-gray-400 text-xs">
                5 tags maximum. Use letters and numbers only.
            </span>
            <div
                className={`border-2 rounded-lg flex items-center flex-wrap transition-all duration-300  w-[100%] lg:w-full  ${
                    isFocus ? "border-slate-500" : ""
                }  `}
            >
                {tags.map((tag, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 px-2  m-1 text-sm rounded-md"
                    >
                        <span className="flex items-center">
                            {tag}
                            <span
                                onClick={() => handleRemoveTag(index)}
                                className="text-lg ml-1 hover:text-rose-500 cursor-pointer"
                            >
                                &times;
                            </span>
                        </span>
                    </div>
                ))}
                <input
                    type={"text"}
                    value={inputValue}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    onFocus={() => {
                        setIsFocus(true);
                    }}
                    onBlur={() => setIsFocus(false)}
                    className={`py-2 outline-none  bg-transparent rounded-md text-sm pl-2 transition-all duration-300 focus:border-slate-400`}
                />
            </div>
        </div>
    );
}

export default MultiSelect;

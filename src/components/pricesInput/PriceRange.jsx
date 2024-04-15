import React, { useState } from "react";

const PriceRangeInput = ({ setFilters }) => {
    const [minVal, setMinVal] = useState("");
    const [maxVal, setMaxVal] = useState("");
    const [error, setError] = useState("");
    const handleMinPriceChange = (e) => {
        const value = e.target.value;
        if (!isNaN(value)) {
            setMinVal(value);
        }
    };

    const handleMaxPriceChange = (e) => {
        const value = e.target.value;
        if (!isNaN(value)) {
            setMaxVal(value);
        }
    };
    const handleClickPrices = () => {
        if (isValidPriceRange(minVal , maxVal)) {
            setFilters((prevFilters) => ({
                ...prevFilters,
                minPrice: minVal,
                maxPrice: maxVal,
            }));

            setError("");

        } else {
            setError("Minimum value must be smaller than maximum value");
        }
        setMaxVal("");
        setMinVal("");
    };
    const isValidPriceRange = (min, max) => {
      const minNum = parseFloat(min);
      const maxNum = parseFloat(max);
      return !isNaN(minNum) && !isNaN(maxNum) && minNum < maxNum;
  };
    return (
        <>
            <div className="flex items-center gap-2 justify-center">
                <input
                    type="text"
                    value={minVal}
                    name="minPrice"
                    className="block p-2 max-w-[100px] border-2 outline-none rounded-md focus:border-primary transition-all focus:ring-4 focus:ring-primary/20"
                    placeholder="Min."
                    onChange={handleMinPriceChange}
                />
                <div className="mx-2 text-gray-500 text-sm">To</div>
                <input
                    type="text"
                    name="maxPrice"
                    value={maxVal}
                    className="block p-2 max-w-[100px] border-2 outline-none rounded-md focus:border-primary transition-all focus:ring-4 focus:ring-primary/20"
                    placeholder="Max."
                    onChange={handleMaxPriceChange}
                />
                <div className="w-full">
                    <button
                        className="bg-primary block w-full rounded-sm text-white py-2"
                        onClick={handleClickPrices}
                    >
                        Set
                    </button>
                </div>
            </div>
            {
              error && <div className="text-sm w-full bg-yellow-100 border border-yellow-400 p-2 mt-1 rounded text-amber-900 ">{error}</div>
            }
        </>
    );
};

export default PriceRangeInput;

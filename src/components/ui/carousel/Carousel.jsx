import React, { useState } from "react";
import test from "../../../assets/images/test.jpg";
import "./carousel.css"; // Import CSS file for carousel styles (e.g., transition effects)
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = () => {
    const [index, setIndex] = useState(0);
    const images = ["image1", "image2", "image3"];

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? 0 : newIndex);
    };

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= images.length ? images.length - 1 : newIndex);
    };
    const imageWrapperStyle = {
        transform: `translateX(-${index * 100}%)`,
    };
    const handleDotSelected = (index) => {
        setIndex(index);
    };
    return (
        <div className="carousel-container relative">
            <div className="carousel">
                {images.map((image, idx) => (
                    <>
                        <div
                            key={idx}
                            className={`image-wrapper relative`}
                            style={imageWrapperStyle}
                        >
                            <img src={test} alt="" className="image" />
                        </div>
                    </>
                ))}
            </div>
            <div className="pagination">
                {images.map((_, i) => {
                    return (
                        <button
                            className={`dot ${i === index ? "active" : ""}`}
                            onClick={() => handleDotSelected(i)}
                        ></button>
                    );
                })}
            </div>
            <button
                onClick={handleNext}
                className="button group bg-white hover:bg-primary hover:text-white transition-all duration-200 right-2"
            >
                <FaChevronRight className="text-xs " />
            </button>
            <button
                onClick={handlePrevious}
                className="button bg-white hover:bg-primary hover:text-white transition-all duration-200   left-2"
            >
                <FaChevronLeft className="text-xs " />
            </button>
        </div>
    );
};

export default Carousel;

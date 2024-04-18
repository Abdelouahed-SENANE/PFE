import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import test from "@assets/images/test.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";

export default function ImagesSlider({ images }) {
    return (
        <Swiper
            style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
            }}
            slidesPerView={1}
            spaceBetween={30}
            keyboard={{
                enabled: true,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Keyboard, Pagination, Navigation]}
            className="mySwiper"
        >
            {images &&
                images.length > 0 &&
                images?.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={`http://localhost:8000/storage/uploads/${image}`}
                            alt="image"
                            className="w-full h-full bg-gray-500 "
                        />
                    </SwiperSlide>
                ))}
        </Swiper>
    );
}

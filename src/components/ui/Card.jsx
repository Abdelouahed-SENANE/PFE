import React from "react";
import image from "../../assets/images/test.jpg";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import Carousel from "./carousel/Carousel";
const Card = () => {
    const cards = [
        {
            id: 1,
            category: "Design & Creative",
            title: "Developers drop the framework folder into a new parent",
            image: "path/to/image1.jpg",
            rating: 4.5,
            numReviews: 2,
            seller: {
                name: "Senane",
                profileImage: "path/to/seller1/profile/image.jpg",
            },
            price: 128,
        },
        {
            id: 2,
            category: "Development",
            title: "Building Responsive Websites",
            image: "path/to/image2.jpg",
            rating: 4.2,
            numReviews: 5,
            seller: {
                name: "John Doe",
                profileImage: "path/to/seller2/profile/image.jpg",
            },
            price: 150,
        },
        {
            id: 3,
            category: "Marketing",
            title: "Social Media Marketing Strategy",
            image: "path/to/image3.jpg",
            rating: 4.8,
            numReviews: 10,
            seller: {
                name: "Jane Smith",
                profileImage: "path/to/seller3/profile/image.jpg",
            },
            price: 200,
        },
        {
            id: 4,
            category: "Writing",
            title: "Content Writing Services",
            image: "path/to/image4.jpg",
            rating: 4.3,
            numReviews: 3,
            seller: {
                name: "Emily Johnson",
                profileImage: "path/to/seller4/profile/image.jpg",
            },
            price: 100,
        },
    ];

    return (
        <>
            <div className="container mx-auto w-[70%]">
                <div className="grid mt-10 grid-cols-4 gap-4">
                    {cards.map((card) => {
                        return (
                            <div
                                key={card.id}
                                className="border  border-slate-200 overflow-hidden  rounded-lg shadow-md shadow-slate-200/20 duration-500 transition-all  hover:border-primary"
                            >
                                <Link to={"#"}>
                                    <Carousel />
                                    {/* <div className="image_wrapper rounded-ss-lg rounded-se-lg overflow-hidden">
                                        <img
                                            src={image}
                                            alt=""
                                            className="h-[230px] object-fill"
                                        />
                                    </div> */}
                                </Link>
                                <div className="p-6 bg-white">
                                    <h6 className="text-gray-500 text-sm">
                                        {card.category}
                                    </h6>
                                    <Link to={"/service"}>
                                        <p className="hover:underline hover:text-primary cursor-pointer transition-colors duration-300">
                                            Developers drop the framework folder
                                            into a new parent
                                        </p>
                                    </Link>
                                    <div className="flex items-center border-b py-3 border-slate-200">
                                        <FaStar className="text-yellow-400" />
                                        <div>
                                            <span className="px-2">
                                                {card.rating}
                                            </span>
                                            <span className="text-gray-400 text-sm">
                                                ( {card.numReviews} review )
                                            </span>
                                        </div>
                                    </div>
                                    <div className="pt-3">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-1">
                                                <img
                                                    src=""
                                                    alt="Profile"
                                                    className="h-7 w-7 rounded-full bg-slate-400"
                                                />
                                                <h6 className="text-sm">
                                                    {card.seller.name}
                                                </h6>
                                            </div>
                                            <div>
                                                <span className="text-sm text-gray-500">
                                                    Starting at:
                                                </span>
                                                <span>${card.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Card;

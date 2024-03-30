import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
const Category = ({ category }) => {
    const subcategories = [
        "Programming & Coding",
        "Data Science & Analysis",
        "Databases",
        "Social Media App",
        "Software Testing",
        "Mobile App Development",
        "Email Template Development",
        "CMS Development",
        "eCommerce CMS Development",
        "ERP/CRM Development",
        "Website Development",
        "Game Development",
    ];
    return (
        <>
            <header className="h-[250px] bg-gradient-to-r from-slate-950 to-slate-800">
                <div className="container mx-auto">
                    <span className="text-gray-200 text-sm block py-5 felx items-center">
                        <FaHome className="inline-flex " />
                        {` / Categories / ${category}`}
                    </span>
                    <h2 className="text-5xl text-white mt-5 mb-2">
                        {category}
                    </h2>
                    <p className="text-gray-400">
                        Looking for {category} offers and services?
                        PeoplePerHour has you covered.
                    </p>
                </div>
            </header>
            <div className="container mx-auto p-[80px]">
                <div className="flex gap-5">
                    <div className="w-[390px] border border-gray-200 p-5 rounded-lg shadow-md shadow-gray-50">
                        <h2 className="text-2xl font-medium text-gray-800">
                            {category}
                        </h2>
                        <ul className="ml-6">
                            {subcategories.map((subcategory, index) => (
                                <Link to={"/offers/:category"}>
                                    <li
                                        key={index}
                                        className="text-gray-600 my-2 py-0.5 text-sm hover:text-gray-900"
                                    >
                                        {subcategory}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-1 border border-gray-200 p-5 rounded-lg shadow-md shadow-gray-50">
                        <h2 className="text-3xl">
                            Popular {category} Categories
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-5 my-5">
                            {subcategories.map((subcategory, index) => (
                                <CardCategory id={index} title={subcategory} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Category;

const CardCategory = (props) => {
    return (
        <Link to={`/offers/${props.id}`}>
            <div className="w-full  overflow-hidden py-5 px-2 border border-primary rounded-md transition-all duration-300 group hover:bg-primary hover:text-white">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium ">{props.title}</h3>
                </div>
                <div className="text-gray-700 group-hover:text-white my-4 transition-all duration-300">
                    5 / Average Rating
                </div>
            </div>
        </Link>
    );
};

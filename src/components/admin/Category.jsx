import React, { useRef, useState, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdModeEditOutline } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import "../../assets/theme-overrides.css";

const Category = ({ categories = [] }) => {
    const [showActions, setShowActions] = useState({});
    const actionRef = useRef(null);
    const btnRef = useRef(null);

    const toggleActions = (categoryId) => {
        setShowActions((prevState) => ({
            ...prevState,
            [categoryId]: !prevState[categoryId],
        }));
    };
    return (
        <>
            {categories.map((category, index) => {
                return (
                    <tr key={index}>
                        <td className="p-4  font-normal ">{category.id}</td>
                        <td className="p-4  font-normal ">{category.title}</td>
                        <td className="p-4  font-normal ">
                            {category.excerpt}
                        </td>
                        <td className="p-4  font-normal ">
                            {category.description}
                        </td>
                        <td className="p-4  relative font-normal ">
                            <div>
                                <button
                                    onClick={() => {
                                        toggleActions(index);
                                    }}
                                    ref={btnRef}
                                    className="text-gray-400 text-lg hover:bg-gray-200/40 hover:text-black transition-all duration-300 border border-gray-200 rounded-md  p-1.5 "
                                >
                                    <BsThreeDotsVertical />
                                </button>
                            </div>
                            <div
                                ref={actionRef}
                                className={` absolute actions ${
                                    showActions[index] ? "active" : "inactive"
                                } left-[-85px] top-[50%] flex flex-col gap-2 bg-white shadow-md z-40 shadow-gray-200/20 rounded-lg border border-gray-200 p-2 `}
                            >
                                <button className="text-gray-400 text-sm flex items-center gap-1 hover:bg-gray-200/40 w-fit hover:text-black transition-all duration-300 border border-gray-200 rounded-md  p-1.5 ">
                                    <MdModeEditOutline /> Update
                                </button>
                                <button className="text-gray-400 text-sm flex items-center gap-1 hover:bg-gray-200/40 w-fit hover:text-black transition-all duration-300 border border-gray-200 rounded-md  p-1.5 ">
                                    <FaTrash /> Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                );
            })}
        </>
    );
};

export default Category;

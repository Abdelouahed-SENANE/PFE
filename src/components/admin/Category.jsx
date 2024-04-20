import React, { useRef, useState, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdModeEditOutline } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import "../../assets/theme-overrides.css";
import { outsideClickAlert } from "@helpers/HandleClickOutside";
import ModalDeleteCategory from "./ModalDeleteCategory";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaCircleXmark } from "react-icons/fa6";
import { useMessage } from "../../hooks/MessageContext";
const Category = ({
    categories = [],
    setSubcategory,
    setIsOpen,
    setUpdateId,
}) => {
    const [showActions, setShowActions] = useState(null);
    const actionRef = useRef(null);
    const btnRef = useRef(null);
    const [isModal, setIsModal] = useState(false);
    const [deleteId, setDelete] = useState(null);
    const { message } = useMessage();
    const [deleteMessage, setDeleteMessage] = useState("");
    const toggleActions = (categoryId) => {
        setShowActions(categoryId);
    };
    const showModal = (id) => {
        setDelete(id);
        setIsModal(!isModal);
    };
    const showFormUpdate = (id) => {
        setUpdateId(id);
        setIsOpen(!isModal);
    };
    outsideClickAlert(actionRef, () => setShowActions(!showActions));
    return (
        <>
            {categories.map((category, index) => {
                return (
                    <tr key={index} className="text-center">
                        <td className="p-4  font-normal ">{category.id}</td>
                        <td className="p-4  font-normal ">{category.name}</td>

                        <td className="p-4  relative font-normal ">
                            <div className="relative">
                                <button
                                    onClick={() => {
                                        toggleActions(index);
                                    }}
                                    ref={btnRef}
                                    className="text-gray-400 text-lg hover:bg-gray-200/40 hover:text-black transition-all duration-300 border border-gray-200 rounded-md  p-1.5 "
                                >
                                    <BsThreeDotsVertical />
                                </button>
                                <div
                                    ref={actionRef}
                                    className={` absolute actions ${
                                        index === showActions
                                            ? "active"
                                            : "inactive"
                                    } left-[-50px] top-[-20%] flex  gap-2 bg-white  shadow-md z-40 shadow-gray-200/20 rounded-lg border border-gray-200 p-2 `}
                                >
                                    <button
                                        onClick={() =>
                                            showFormUpdate(category.id)
                                        }
                                        className="text-gray-400 text-sm flex items-center gap-1 hover:bg-blue-500 w-fit hover:text-white transition-all duration-300 border border-gray-200 rounded-md  p-1.5 "
                                    >
                                        <MdModeEditOutline /> Update
                                    </button>
                                    <button
                                        onClick={() => showModal(category.id)}
                                        className="text-gray-400 text-sm flex items-center gap-1 hover:bg-red-500 w-fit hover:text-white transition-all duration-300 border border-gray-200 rounded-md  p-1.5 "
                                    >
                                        <FaTrash /> Delete
                                    </button>
                                </div>
                            </div>
                        </td>
                    </tr>
                );
            })}
            <ModalDeleteCategory
                setSubcategory={setSubcategory}
                id={deleteId}
                isModal={isModal}
                setIsModal={setIsModal}
                setDeletionMessage={setDeleteMessage}
            />
            {deleteMessage && (
                <div
                    className={`absolute z-50 ${
                        deleteMessage ? "bottom-[5%]" : "bottom-[-100%]"
                    } right-[2%] transition-all duration-500  shadow-md shadow-black/10`}
                >
                    <div className="bg-red-500  rounded-md h-[60px] overflow-hidden  flex text-white  items-center gap-3 w-[350px]  ">
                        <div className="bg-white text-black h-full flex items-center justify-center w-[60px]">
                            <IoIosCheckmarkCircleOutline className="text-4xl text-red-500" />
                        </div>

                        <div className="flex-1">
                            <h4 className="font-medium ">Success</h4>
                            <p>Subcategory Delete Succefully</p>
                        </div>
                        <div className="mx-2">
                            <FaCircleXmark className="text-xl cursor-pointer hover:text-red-50" />
                        </div>
                    </div>
                </div>
            )}
            {message && (
                <div
                    className={`absolute z-50 ${
                        message ? "bottom-[5%]" : "bottom-[-100%]"
                    } right-[2%] transition-all duration-500  shadow-md shadow-black/10`}
                >
                    <div className="bg-green-500  rounded-md h-[60px] overflow-hidden  flex text-white  items-center gap-3 w-[350px]  ">
                        <div className="bg-white text-black h-full flex items-center justify-center w-[60px]">
                            <IoIosCheckmarkCircleOutline className="text-4xl text-green-500" />
                        </div>

                        <div className="flex-1">
                            <h4 className="font-medium ">Success</h4>
                            <p>{message}</p>
                        </div>
                        <div className="mx-2">
                            <FaCircleXmark className="text-xl cursor-pointer hover:text-green-50" />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Category;

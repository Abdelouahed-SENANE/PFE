import React, { useRef, useState, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import "../../assets/theme-overrides.css";
import { outsideClickAlert } from "../../helpers/HandleClickOutside";
import moment from "moment";
import ModalDeleteUser from "./ModalDeleteUser";
const User = ({ users = []  , setUsers}) => {
    const [showActions, setShowActions] = useState(null);
    const [isModal , setIsModal] = useState(false);
    const [userId, setUserId] = useState(null);
    const actionRef = useRef(null);
    const btnRef = useRef(null);

    const toggleActions = (userId) => {
        setShowActions(userId)
    };
    const handleDelete =  (id) => {
        setUserId(id)
        setIsModal(!isModal)
    }
    outsideClickAlert(actionRef , () => setShowActions(!showActions))
    return (
        <>
            {users &&
                users.map((user, index) => {
                    return (
                        <tr key={index} className="text-center">
                            <td className="p-4  font-normal ">{user.id}</td>
                            <td className="p-4  font-normal ">
                                <img
                                    src={`http://localhost:8000/storage/avatars/${user.picture}`}
                                    alt=""
                                    className="h-10 w-10 rounded-full mx-auto"
                                />
                            </td>
                            <td className="p-4  font-normal ">{user.name}</td>
                            <td className="p-4  font-normal ">
                                {user.username}
                            </td>
                            <td className="p-4 font-normal ">{user.email}</td>
                            <td className="p-4  font-normal ">
                                {user.address}
                            </td>
                            <td className="p-4  font-normal ">
                                {user.admin? (
                                    <span className="bg-blue-200 px-4 py-1 rounded-full text-blue-600 text-sm font-medium">
                                        Admin
                                    </span>
                                ) : user.freelancer ? (
                                    <span className="bg-orange-200 px-4 py-1 rounded-full text-orange-600 text-sm font-medium">
                                        Freelancer
                                    </span>
                                ) : (
                                    <span className="bg-green-200 px-4 py-1 rounded-full text-green-600 text-sm font-medium">
                                        Client
                                    </span>
                                )}
                            </td>
                            <td className="p-4  font-normal ">
                                {moment(user.created_at).format('D MMMM YYYY')}
                            </td>

                           {
                            !user.admin &&  <td className="p-4  relative font-normal ">
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
                                    index === showActions
                                        ? "active"
                                        : "inactive"
                                } right-[65px] top-[15%] flex flex-col gap-2 bg-white shadow-md z-40 shadow-gray-200/20 rounded-lg border border-gray-200 p-2 `}
                            >
                                <button onClick={() => handleDelete(user.id)} className="text-gray-400 text-sm flex items-center gap-1 hover:bg-red-500 w-fit hover:text-white transition-all duration-300 border border-gray-200 rounded-md  p-1.5 ">
                                    <FaTrash /> Delete
                                </button>
                            </div>
                        </td>
                           }
                        </tr>
                    );
                })}
            <ModalDeleteUser setUsers={setUsers} isModal={isModal} setIsModal={setIsModal} id={userId}/>
        </>
    );
};

export default User;

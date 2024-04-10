import React from "react";
import image from "../../assets/uploads/vector.png";
import "./profile.css";
import { IoCloudUpload } from "react-icons/io5";
import { FaCameraRetro } from "react-icons/fa6";
import { useAuth } from "../../hooks/AuthContext";
const Sidebar = () => {
    const {user} = useAuth()
    return (
        <aside className=" w-[450px] lg:w-[350px] lg:fixed  bg-white rounded-lg border border-gray-200 p-3">
            <div className="border-b border-gray-200">
                <form>
                    <div className="flex justify-center cursor-pointer">
                        <div className="w-fit image_wrapper relative">
                            <img
                                src={image}
                                alt=""
                                className="rounded-full w-[210px] h-[210px]"
                            />
                            <label htmlFor="picture" className="upload">
                                <input
                                    type="file"
                                    name="picture"
                                    id="picture"
                                    className="hidden"
                                />
                                <FaCameraRetro className="text-5xl text-gray-400 icon" />
                            </label>
                        </div>
                    </div>
                    <div className="flex justify-center my-4">
                        <button
                            type="submit"
                            className="bg-primary text-white flex items-center gap-2 px-4 rounded-full py-1"
                        >
                            <IoCloudUpload />
                            <span>Upload</span>
                        </button>
                    </div>
                </form>
            </div>
            <div className="p-3 ">
                <div className="text-center">
                    <h3 className="text-gray-900">{user.name}</h3>
                    <span className="text-gray-600">{user.email}</span>
                </div>
                <div className="mt-4 text-center">
                    <h6 className="text-xl font-medium mb-2">About</h6>
                    <p className="text-gray-600  text-balance tracking-widest">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Illo commodi exercitationem quod!
                    </p>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;

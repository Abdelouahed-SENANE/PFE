import React, { useState } from "react";
import image from "../../assets/uploads/vector.png";
import "./profile.css";
import { IoCloudUpload } from "react-icons/io5";
import { FaCameraRetro } from "react-icons/fa6";
import { useAuth } from "../../hooks/AuthContext";
import axios from "axios";
import instance from "../../config/ConfigAxios";
const Sidebar = () => {
    const { user, token, setUser } = useAuth();
    const [picture, setPicture] = useState("");
    const [picErr, setPicErr] = useState([]);
    const [picSuccess, setPicSuccess] = useState("");
    const handleApi = async () => {
        if (!picture) {
            setPicErr(["Image is Required!"]);
            return;
        }
        try {
            const res = await instance.post(
                "/update-picture",
                { picture },
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                    withCredentials: false,
                }
            );
            if (res.status === 200) {
                if (!res.data.status) {
                    setPicErr(res.data.errors.picture);

                } else {
                    setPicture("");
                    setPicErr([]);
                    setPicSuccess(res.data.message);
                    setUser(res.data.user);
                    setTimeout(() => {
                        setPicSuccess('');
                    }, 2000);
                }
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <aside className=" w-[450px] lg:w-[350px] lg:fixed  bg-white rounded-lg border border-gray-200 p-3">
            {picSuccess && (
                <div
                    className="bg-green-50 text-sm border-l-4 mb-2 border-green-500 text-green-700 p-2 "
                    role="alert"
                >
                    <p>{picSuccess}</p>
                </div>
            )}

            {picErr.length > 0 && (
                <div
                    className="bg-rose-50 border-l-4 mb-2 text-sm border-rose-500 text-rose-700 p-2 "
                    role="alert"
                >
                    {picErr.map((err, index) => {
                        return <p key={index}>{err}</p>;
                    })}
                </div>
            )}
            <div className="border-b border-gray-200">
                <div>
                    <div className="flex justify-center cursor-pointer">
                        <div className="w-fit image_wrapper relative">
                            <img
                                src={`http://localhost:8000/storage/avatars/${user.picture}`}
                                alt=""
                                className="rounded-full w-[160px] h-[160px]"
                            />
                            <label htmlFor="picture" className="upload">
                                <input
                                    type="file"
                                    name="picture"
                                    id="picture"
                                    onChange={(e) =>
                                        setPicture(e.target.files[0])
                                    }
                                    className="hidden"
                                />
                                <FaCameraRetro className="text-5xl text-gray-400 icon" />
                            </label>
                        </div>
                    </div>
                    <div className="flex justify-center my-4">
                        <button
                            onClick={handleApi}
                            className="bg-primary text-white flex items-center gap-2 px-4 rounded-full py-1"
                        >
                            <IoCloudUpload />
                            <span>Upload</span>
                        </button>
                    </div>
                </div>
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

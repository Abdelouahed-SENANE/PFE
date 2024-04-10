import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { useAuth } from "../../hooks/AuthContext";
import instance from "../../config/ConfigAxios";

const UpdateInformation = () => {
    const { user, setUser } = useAuth();
    const [userName, setUserName] = useState(user.username);
    const [errUserName, setErrUserName] = useState("");
    const [name, setName] = useState(user.name);
    const [errName, setErrName] = useState("");
    const [email, setEmail] = useState(user.email);
    const [errEmail, setErrEmail] = useState("");
    const [address, setAddress] = useState(user.address);
    const [errAddress, setErrAddress] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errMessage, setErrMessage] = useState("");

    const emailRegex = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
    const validationInformations = () => {
        let result = true;
        if (userName.trim() === "" || userName.length === null) {
            setErrUserName("Required!");
            result = false;
        } else {
            setErrUserName("");
            result = true;
        }
        if (name.trim() === "" || name.length === null) {
            setErrName("Required!");
            result = false;
        } else {
            setErrName("");
            result = true;
        }
        // Validation Email
        if (email.trim() === "" || email.length === null) {
            setErrEmail("Required!");
            result = false;
        } else {
            if (!emailRegex()) {
                setErrEmail("Incorrect email!");
                result = false;
            } else {
                setErrEmail("");
                result = true;
            }
        }
        if (address.trim() === "" || address.length === null) {
            setErrAddress("Required!");
            result = false;
        } else {
            setErrAddress("");
            result = true;
        }

        return result;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validationInformations()) {
            return;
        }
        let formData = {
            name: name,
            username: userName,
            email: email,
            address: address,
        };
        try {
            const response = await instance.patch(`/update-info`, formData);
            if (response.status === 200) {
                if (!response.data.status) {
                    setErrMessage(response.data.message);
                    setTimeout(() => {
                        setErrMessage("");
                    }, 5000);
                }else{
                    setSuccessMessage(response.data.message);
                    setUser(response.data.user)
                setTimeout(() => {
                    setSuccessMessage("");
                }, 5000);
                }
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="mb-5 border rounded-lg bg-white border-gray-200 p-4 lg:mr-[200px]">
            {successMessage && (
                <div
                    class="bg-green-50 border-l-4 mb-2 border-green-500 text-green-700 p-2 "
                    role="alert"
                >
                    <p class="font-bold">Success</p>
                    <p>{successMessage}</p>
                </div>
            )}
            {errMessage && (
                <div
                    class="bg-rose-50 border-l-4 mb-2 border-rose-500 text-rose-700 p-2 "
                    role="alert"
                >
                    <p class="font-bold">Error</p>
                    <p>{errMessage}</p>
                </div>
            )}
            <header>
                <h1 className="text-3xl">Profile Information</h1>
                <p className="text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>
            <div className="my-5">
                <form action="" onSubmit={handleSubmit} noValidate>
                    <div className="flex items-center gap-5 lg:gap-3  flex-wrap  my-6 w-full">
                        <div className="flex-1 min-w-[200px] relative ">
                            <div className="relative  gap-2 w-full text-gray-500 text-sm">
                                <FaUser className="absolute top-[50%] left-3 translate-y-[-50%]" />
                                <input
                                    type={"text"}
                                    placeholder={"Name"}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className={`text-gray-800 py-2 outline-none border-2 w-full px-8 focus:border-slate-500 transition-all duration-300  rounded-md
                                    ${
                                        errName
                                            ? "border-red-500 focus:border-red-500"
                                            : ""
                                    }
                                    `}
                                />
                            </div>
                            {errName && (
                                <span className="text-rose-500 absolute text-sm font-medium">
                                    {errName}
                                </span>
                            )}
                        </div>
                        <div className="flex-1 relative">
                            <div className="relative min-w-[200px]  gap-2 w-full text-gray-500 text-sm">
                                <FaUser className="absolute top-[50%] left-3 translate-y-[-50%]" />
                                <input
                                    type={"text"}
                                    placeholder={"Username"}
                                    value={userName}
                                    onChange={(e) =>
                                        setUserName(e.target.value)
                                    }
                                    className={`text-gray-800 py-2 outline-none border-2 w-full px-8 focus:border-slate-500 transition-all duration-300  rounded-md
                                    ${
                                        errUserName
                                            ? "border-red-500 focus:border-red-500"
                                            : ""
                                    }`}
                                />
                            </div>
                            {errUserName && (
                                <span className="text-rose-500 absolute text-sm font-medium">
                                    {errUserName}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center gap-5 lg:gap-3 flex-wrap  my-6 w-full">
                        <div className="flex-1 min-w-[200px] ">
                            <div className="relative  gap-2 w-full text-gray-500 text-sm">
                                <MdOutlineAlternateEmail className="absolute top-[50%] left-3 translate-y-[-50%]" />
                                <input
                                    type={"email"}
                                    placeholder={"email"}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={`text-gray-800 py-2 outline-none border-2 w-full px-8 focus:border-slate-500 transition-all duration-300  rounded-md
                                    ${
                                        errEmail
                                            ? "border-red-500 focus:border-red-500"
                                            : ""
                                    }`}
                                />
                            </div>
                            {errEmail && (
                                <span className="text-rose-500 absolute text-sm font-medium">
                                    {errEmail}
                                </span>
                            )}
                        </div>
                        <div className="flex-1 min-w-[200px]">
                            <div className="relative  gap-2 w-full text-gray-500 text-sm">
                                <FaAddressCard className="absolute top-[50%] left-3 translate-y-[-50%]" />
                                <input
                                    type={"text"}
                                    placeholder={"Address"}
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className={`text-gray-800 py-2 outline-none border-2 w-full px-8 focus:border-slate-500 transition-all duration-300 rounded-md
                                    ${
                                        errEmail
                                            ? "border-red-500 focus:border-red-500"
                                            : ""
                                    }`}
                                />
                            </div>
                            {errAddress && (
                                <span className="text-rose-500 absolute text-sm font-medium">
                                    {errAddress}
                                </span>
                            )}
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-primary/90 text-white px-8 py-2 rounded-full hover:bg-primary transition-all duration-300"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateInformation;

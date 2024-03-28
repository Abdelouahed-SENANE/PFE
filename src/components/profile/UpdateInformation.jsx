import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
const UpdateInformation = () => {
    const [userName, setUserName] = useState("");
    const [errUserName, setErrUserName] = useState("");
    const [name, setName] = useState("");
    const [errName, setErrName] = useState("");
    const [email, setEmail] = useState("");
    const [errEmail, setErrEmail] = useState("");
    const [address, setAddress] = useState("");
    const [errAddress, setErrAddress] = useState("");

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
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validationInformations()) {
            console.log("hello");
        }
    };
    return (
        <div className="mb-5 border rounded-lg bg-white border-gray-200 p-4 mr-[200px]">
            <header>
                <h1 className="text-3xl">Profile Information</h1>
                <p className="text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>
            <div className="my-5">
                <form action="" onSubmit={handleSubmit} noValidate>
                    <div className="flex items-center gap-3  my-6 w-full">
                        <div className="flex-1 relative ">
                            <div className="relative  gap-2 w-full text-gray-500 text-sm">
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
                                    }
                                    `}
                                />
                            </div>
                            {errUserName && (
                                <span className="text-rose-500 absolute text-sm font-medium">
                                    {errUserName}
                                </span>
                            )}
                        </div>
                        <div className="flex-1 relative">
                            <div className="relative  gap-2 w-full text-gray-500 text-sm">
                                <FaUser className="absolute top-[50%] left-3 translate-y-[-50%]" />
                                <input
                                    type={"text"}
                                    placeholder={"Fullname"}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className={`text-gray-800 py-2 outline-none border-2 w-full px-8 focus:border-slate-500 transition-all duration-300  rounded-md
                                    ${
                                        errName
                                            ? "border-red-500 focus:border-red-500"
                                            : ""
                                    }`}
                                />
                            </div>
                            {errName && (
                                <span className="text-rose-500 absolute text-sm font-medium">
                                    {errName}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center gap-3  my-6 w-full">
                        <div className="flex-1 ">
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
                        <div className="flex-1 ">
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

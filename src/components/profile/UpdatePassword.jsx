import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { FaEyeSlash, FaEye } from "react-icons/fa";
const UpdatePassword = () => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errCurrentPassword, setErrCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [errNewPassword, setErrNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let result = true;
        if (currentPassword.trim() === "" || currentPassword.length === null) {
            setErrCurrentPassword("Required!");
            result = false;
        } else if (currentPassword.length < 8) {
            setErrCurrentPassword(
                "password must be at least 8 characters long"
            );
            result = false;
        } else {
            setErrCurrentPassword("");
            result = true;
        }
        if (newPassword.trim() === "" || newPassword.length === null) {
            setErrNewPassword("Required!");
            result = false;
        } else if (newPassword.length < 8) {
            setErrNewPassword("Password must be at least 8 characters long");
            result = false;
        } else {
            if (confirmPassword !== newPassword) {
                setErrNewPassword("Passwords do not match");
                result = false;
            }else{
                setErrNewPassword("");
                result = true;
            }

        }

    };
    return (
        <div className="mb-5 border rounded-lg bg-white border-gray-200 p-4 mr-[200px]">
            <header>
                <h1 className="text-3xl">Update Password</h1>
                <p className="text-sm text-gray-600">
                    Ensure your account is using a long, random password to stay
                    secure.
                </p>
            </header>
            <div className="my-5">
                <form action="" onSubmit={handleSubmit} noValidate>
                    <div className="flex items-center gap-3  my-6 w-full">
                        <div className="flex-1 relative ">
                            <div className="relative  gap-2 w-full text-gray-500 text-sm">
                                <FaLock className="absolute top-[50%] left-3 translate-y-[-50%]" />
                                <input
                                    type={`${
                                        showPassword ? "text" : "password"
                                    }`}
                                    placeholder={"Current password"}
                                    value={currentPassword}
                                    onChange={(e) =>
                                        setCurrentPassword(e.target.value)
                                    }
                                    className={`text-gray-800 py-2 outline-none border-2 w-full px-8 focus:border-slate-500 transition-all duration-300  rounded-md
                                    ${
                                        errCurrentPassword
                                            ? "border-red-500 focus:border-red-500"
                                            : ""
                                    }
                                    `}
                                />
                                <div>
                                    {showPassword ? (
                                        <FaEyeSlash
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                            className="absolute right-2 text-lg top-[50%] translate-y-[-50%] cursor-pointer hover:text-gray-950 transition-all"
                                        />
                                    ) : (
                                        <FaEye
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                            className="absolute right-2 text-lg top-[50%] translate-y-[-50%] cursor-pointer hover:text-gray-950 transition-all"
                                        />
                                    )}
                                </div>
                            </div>
                            {errCurrentPassword && (
                                <span className="text-rose-500 absolute text-sm font-medium">
                                    {errCurrentPassword}
                                </span>
                            )}
                        </div>
                        <div className="flex-1 relative ">
                            <div className="relative  gap-2 w-full text-gray-500 text-sm">
                                <FaLock className="absolute top-[50%] left-3 translate-y-[-50%]" />
                                <input
                                    type={`${
                                        showPassword ? "text" : "password"
                                    }`}
                                    placeholder={"New password"}
                                    value={newPassword}
                                    onChange={(e) =>
                                        setNewPassword(e.target.value)
                                    }
                                    className={`text-gray-800 py-2 outline-none border-2 w-full px-8 focus:border-slate-500 transition-all duration-300  rounded-md
                                    ${
                                        errNewPassword
                                            ? "border-red-500 focus:border-red-500"
                                            : ""
                                    }
                                    `}
                                />
                            </div>
                            {errNewPassword && (
                                <span className="text-rose-500 absolute text-sm font-medium">
                                    {errNewPassword}
                                </span>
                            )}
                        </div>
                        <div className="flex-1 relative ">
                            <div className="relative  gap-2 w-full text-gray-500 text-sm">
                                <FaLock className="absolute top-[50%] left-3 translate-y-[-50%]" />
                                <input
                                    type={`${
                                        showPassword ? "text" : "password"
                                    }`}
                                    placeholder={"Confirm password"}
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                    className={`text-gray-800 py-2 outline-none border-2 w-full px-8 focus:border-slate-500 transition-all duration-300  rounded-md
                                    
                                    `}
                                />
                            </div>
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

export default UpdatePassword;

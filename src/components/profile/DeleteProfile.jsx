import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import "./profile.css";

const DeleteProfile = () => {
    const [isActive, setIsActive] = useState(false);
    const handleShowModal = () => {
        setIsActive(true);
    };
    // Hide Modal
    const handleHideModal = () => {
        setIsActive(false);
    };
    return (
        <div className="mb-5 border rounded-lg bg-white border-gray-200 p-4 lg:mr-[200px]">
            <header>
                <h1 className="text-3xl">Delete Account</h1>
                <p className="text-sm my-5 text-gray-600 max-w-[80%]">
                    Once your account is deleted, all of its resources and data
                    will be permanently deleted. Before deleting your account,
                    please download any data or information that you wish to
                    retain.
                </p>
            </header>
            <div>
                <button
                    onClick={handleShowModal}
                    className="bg-red-500/90 text-white px-8 py-2 rounded-full hover:bg-red-500 transition-all duration-300"
                >
                    Delete Account
                </button>
            </div>
            <Modal active={isActive} onClose={handleHideModal} />
        </div>
    );
};

const Modal = ({ active = false, onClose }) => {
    const [password, setPassword] = useState("");
    const [errPassword, setErrPassword] = useState("");
    const validatePassword = () => {
        let result;
        if (password.trim() === "" || password.length === null) {
            setErrPassword("Required!");
            result = false;
        } else if (password.length < 8) {
            setErrPassword("password must be at least 8 characters long");
            result = false;
        } else {
            setErrPassword("");
            result = true;
        }
        return result;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validatePassword()) {
            console.log("true");
        }
    };
    if (!active) return;
    return (
        <div className={`modal ${active ? "active" : "inactive"}`}>
            <form className="formDelete" onSubmit={handleSubmit}>
                <h2 className="text-xl">
                    Are you sure you want to delete your account?
                </h2>
                <p className="text-sm mb-5 mt-2 text-gray-600 max-w-[80%]">
                    Once your account is deleted, all of its resources and data
                    will be permanently deleted. Please enter your password to
                    confirm you would like to permanently delete your account.
                </p>
                <div className="relative  gap-2 w-full text-gray-500 text-sm">
                    <FaLock className="absolute top-[50%] left-3 translate-y-[-50%]" />
                    <input
                        type={"password"}
                        placeholder={"Enter password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`text-gray-800 py-2 outline-none border-2 w-[400px] px-8 focus:border-slate-500 transition-all duration-300  rounded-md
                        ${
                            errPassword
                                ? "border-red-500 focus:border-red-500"
                                : ""
                        }`}
                    />
                </div>
                {errPassword && (
                    <span className="text-rose-500  absolute text-sm font-medium">
                        {errPassword}
                    </span>
                )}
                <div className="flex items-center mt-1 gap-3">
                    <button
                        type="submit"
                        className="bg-red-500/90 text-white mt-5 px-8 py-2 rounded-full hover:bg-red-500 transition-all duration-300"
                    >
                        Confirm
                    </button>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            onClose();
                            setPassword("");
                        }}
                        className="bg-gray-200/90 text-gray-900 mt-5 px-8 py-2 rounded-full hover:bg-gray-200 transition-all duration-300"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default DeleteProfile;

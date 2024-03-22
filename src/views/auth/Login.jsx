import React, { useState } from "react";
import Input from "../../components/ui/Input";

import { FaGithub, FaLock, FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { Link } from "react-router-dom";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ErrEmail, setEmailErr] = useState("");
    const [ErrPassword, setPasswordErr] = useState("");
    const [emailSuccess, setEmailSuccess] = useState(false);
    const [passSuccess, setPassSuccess] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    // ========= Validate Email ============
    const emailRegex = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
    const validateEmail = () => {
        let result = true;
        if (email.trim() === "") {
            setEmailErr("Email is required!");
            setEmailSuccess(false);
            result = false;
        } else if (!emailRegex()) {
            setEmailErr(`${email} is invalid email`);
            setEmailSuccess(false);

            result = false;
        } else {
            setEmailErr("");
            setEmailSuccess(true);
        }
        return result;
    };
    // =========== Validate Password ==========
    const passRegex = () => {
        return password.length < 8;
    };
    const validatePassword = () => {
        let result = true;
        if (password.trim() === "") {
            setPasswordErr("Password is required!");
            setPassSuccess(false);

            result = false;
        } else if (passRegex()) {
            setPasswordErr(`Password must be at least 8 characters long.`);
            setPassSuccess(false);
            result = false;
        } else {
            setPasswordErr("");
            setPassSuccess(true);
        }
        return result;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validatePassword() || validateEmail()) {
            
        }
    };
    return (
        <>
            <div className="min-h-[calc(100vh-128px)] flex-1 flex items-center justify-center">
                <div className="px-5  py-3 border bg-white border-slate-200 rounded-xl overflow-hidden min-w-[400px]">
                    <h1 className="text-4xl font-medium text-center my-6">
                        Login In Linkup
                    </h1>
                    <form
                        id="login"
                        className="flex flex-col items-start px-4 w-full "
                        onSubmit={handleSubmit}
                    >
                        <Input
                            icon={FaUser}
                            type={"text"}
                            value={email}
                            onKeyUp={validateEmail}
                            placeholder={"Username or Email"}
                            error={ErrEmail}
                            success={emailSuccess}
                            onChange={handleEmailChange}
                        />
                        <Input
                            icon={FaLock}
                            type={"password"}
                            value={password}
                            onKeyUp={validatePassword}
                            error={ErrPassword}
                            success={passSuccess}
                            placeholder={"Password"}
                            onChange={handlePasswordChange}
                        />
                        <input
                            type="submit"
                            className="text-white bg-primary mt-4 w-full rounded-2xl py-2 cursor-pointer"
                            value={"Login"}
                        />
                        <p className="h-[1px] w-full bg-gray-300 my-8 relative">
                            <span className="absolute bg-white left-[50%] top-[50%]  text-gray-400 translate-x-[-50%] translate-y-[-50%] h-8 w-8 text-sm  flex items-center justify-center">
                                or
                            </span>
                        </p>
                        <div className="w-full">
                            <Link className="block w-full">
                                <button className="w-full px-1 bg-blue-500 hover:bg-blue-600 transition-all duration-300 py-0.5 flex items-center text-white rounded-full">
                                    <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                                        <FcGoogle className="text-xl" />
                                    </div>
                                    <span className="flex-1">
                                        Continue With Google
                                    </span>
                                </button>
                            </Link>
                            <Link className="block w-full my-2">
                                <button className="w-full px-1 bg-white border border-gray-700 hover:bg-gray-100 transition-all duration-300 py-0.5 flex items-center text-black rounded-full">
                                    <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                                        <FaGithub className=" text-xl" />
                                    </div>
                                    <span className="flex-1 ">
                                        Continue With Github
                                    </span>
                                </button>
                            </Link>
                        </div>
                        <p className="h-[1px] w-full bg-gray-300 my-8 relative">
                            <span className="absolute bg-white left-[50%] top-[50%] text-center  text-gray-400 translate-x-[-50%] translate-y-[-50%] text-sm w-[65%]  flex items-center justify-center">
                                Don't have an Upwork account?
                            </span>
                        </p>
                        <Link className="w-full" to={"/signup"}>
                            <button className="text-primary hover:bg-gray-600/10 hover:text-gray-700  border-2 border-primary block  w-[200px] mx-auto rounded-2xl py-2 cursor-pointer">
                                Sign up
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;

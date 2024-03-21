import React, { useEffect, useState } from "react";
import { FaGithub, FaLock, FaUser, FaUserTie } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import Spinner from "../../components/ui/Spinner";
import Input from "../../components/ui/Input";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Signup = () => {
    const [accountType, setAccountType] = useState("");
    const [isLoading, setIsloading] = useState(false);
    const [renderRegister, setRenderRegister] = useState(false);

    const handleClient = () => {
        setAccountType("client");
        setIsloading(true);
        setTimeout(() => {
            setRenderRegister(true);
            setIsloading(false);
        }, 3000);
    };
    const handleFreelancer = () => {
        setAccountType("freelancer");
        setIsloading(true);
        setTimeout(() => {
            setRenderRegister(true);
            setIsloading(false);
        }, 3000);
    };
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
    };
    if (!renderRegister && !isLoading) {
        return (
            <div className="min-h-[calc(100vh-128px)] flex items-center flex-col bg-slate-50">
                <div>
                    <h1 className="lg:my-8  my-4 text-lg lg:text-3xl max-w-lg mx-auto text-center text-gray-500 font-light">
                        Let's get started! First, tell us what you're looking
                        for.
                    </h1>
                    <div className="flex flex-col lg:flex-row  items-center justify-center">
                        <div className="py-6 lg:px-10 mx-8 flex flex-col  items-center text-gray-300">
                            <FaUserTie className="text-6xl " />
                            <div className="text-gray-500 text-center">
                                <h4 className="text-xl lg:text-2xl my-6">
                                    I want to hire a freelancer
                                </h4>
                                <span className="text-xs lg:text-sm max-w-[170px] mx-auto mb-5 block">
                                    Find, collaborate with, and pay an expert.
                                </span>
                            </div>
                            <div className="mb-6">
                                <button
                                    className="px-8 py-2 bg-primary text-white rounded-md "
                                    onClick={handleClient}
                                >
                                    Hire
                                </button>
                            </div>
                        </div>
                        <div className="lg:h-[350px] w-[300px] h-[2px]  relative lg:w-[2px] bg-gray-300 ">
                            <span className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] bg-slate-50 p-4">
                                OR
                            </span>
                        </div>
                        <div className="py-8 lg:px-10 flex flex-col mx-8  items-center text-gray-300">
                            <BsPersonWorkspace className="text-6xl " />
                            <div className="text-gray-500 text-center">
                                <h4 className="text-xl lg:text-2xl my-6">
                                    I'm looking for online work
                                </h4>
                                <span className="text-xs lg:text-sm max-w-[170px] mx-auto mb-5 block">
                                    Find freelance projects and grow your
                                    business.
                                </span>
                            </div>
                            <div className="mb-6">
                                <button
                                    className="px-8 py-2 bg-primary text-white rounded-md "
                                    onClick={handleFreelancer}
                                >
                                    Work
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return isLoading ? (
        <div className="min-h-[calc(100vh-128px)] flex items-center justify-center flex-col ">
            <Spinner />
        </div>
    ) : (
        <div className="min-h-[calc(100vh-128px)] flex items-center flex-col bg-slate-50">
            <h1 className="text-4xl font-medium text-center my-6">
                {accountType === "client"
                    ? "Sign up to hire talent"
                    : "Sign up to find work you love"}
            </h1>
            <div className="px-5  py-3 border bg-white border-slate-200 rounded-xl overflow-hidden min-w-[660px]">
                <form
                    id="Register"
                    className="flex flex-col items-start px-4 w-full "
                    onSubmit={handleSubmit}
                >
                    <div className="w-[80%] mx-auto flex items-center gap-4">
                        <Link className="block w-full">
                            <button className="w-full px-1 bg-blue-500 hover:bg-blue-600 border border-blue-500 transition-all duration-300 py-0.5 flex items-center text-white rounded-full">
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
                    <p className="h-[1px] w-full bg-gray-300 my-6 relative">
                        <span className="absolute bg-white left-[50%] top-[50%]  text-gray-400 translate-x-[-50%] translate-y-[-50%] h-8 w-8 text-xl  flex items-center justify-center">
                            or
                        </span>
                    </p>
                    <div className="flex items-center  gap-2 w-full">
                        <div className="w-full">
                            <Input
                                icon={FaUser}
                                type={"text"}
                                value={email}
                                onKeyUp={validateEmail}
                                placeholder={"Firstname"}
                                success={emailSuccess}
                                onChange={handleEmailChange}
                            />
                        </div>
                        <div className="w-full">
                            <Input
                                icon={FaUser}
                                type={"text"}
                                value={email}
                                onKeyUp={validateEmail}
                                placeholder={"Last name"}
                                success={emailSuccess}
                                onChange={handleEmailChange}
                            />
                        </div>
                    </div>
                    <Input
                        icon={MdOutlineAlternateEmail}
                        type={"email"}
                        value={password}
                        onKeyUp={validatePassword}
                        error={ErrPassword}
                        success={passSuccess}
                        placeholder={"Email"}
                        onChange={handlePasswordChange}
                    />
                    <Input
                        icon={FaLock}
                        type={"password"}
                        value={password}
                        onKeyUp={validatePassword}
                        error={ErrPassword}
                        success={passSuccess}
                        placeholder={"Password (8 or more charachters)"}
                        onChange={handlePasswordChange}
                    />
                    <div className="w-fit mx-auto">
                        <input
                            type="submit"
                            className="text-white bg-primary mt-4 px-10 mx-auto block rounded-lg py-2 cursor-pointer"
                            value={"Create my Account"}
                        />

                        <p className="mt-3">
                            Already have an account?
                            <Link
                                to={"/login"}
                                className="text-primary underline px-1"
                            >
                                Log In
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;

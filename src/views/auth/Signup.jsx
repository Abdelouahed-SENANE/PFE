import React, { useEffect, useState } from "react";
import {
    FaExclamationTriangle,
    FaGithub,
    FaLock,
    FaUser,
    FaUserTie,
} from "react-icons/fa";
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
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [firstNameErr, setFirstNameErr] = useState("");
    const [lastNameErr, setLastNameErr] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");

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

    const emailRegex = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handlePassChange = (e) => {
        setPassword(e.target.value);
    };
    // Validation Register =====
    const validationForm = () => {
        let result = true;
        if (firstName === "") {
            setFirstNameErr("Required!");
            result = false;
        } else {
            setFirstNameErr("");
        }
        if (lastName === "") {
            setLastNameErr("Required!");
            result = false;
        } else {
            setLastNameErr("");
        }
        if (email === "") {
            setEmailErr("Required!");
            result = false;
        } else if (!emailRegex()) {
            setEmailErr("Email incorrect");
            result = false;
        } else {
            setEmailErr("");
        }
        if (password === "") {
            setPasswordErr("Required!");
            result = false;
        } else if (password.length < 8) {
            setPasswordErr("password must be at least 8 characters long");
            result = false;
        } else {
            setPasswordErr("");
        }
        return result;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validationForm()) {
            console.log({
                email , password, firstName , accountType , lastName
            });
        }
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
        <div className="min-h-[calc(100vh-128px)] flex items-center justify-center flex-col bg-slate-50">
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
                    noValidate
                    autoComplete="off"
                    className="flex flex-col items-start px-4 w-full myForm"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="hidden"
                        readOnly
                        value={accountType}
                        name="role"
                    />
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
                        <div className="relative  gap-2 w-full text-gray-500 text-sm">
                            <div className="relative  gap-2 w-full text-gray-500 mt-6 text-sm">
                                <FaUser className="absolute top-[50%] left-3 translate-y-[-50%]" />
                                <input
                                    type={"text"}
                                    placeholder={"Firstname"}
                                    value={firstName}
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                    className={`text-gray-800 py-2 outline-none border-2 w-full px-8  transition-all duration-300  rounded-md
                                  ${
                                      firstNameErr
                                          ? "border-rose-500 focus:border-rose-500"
                                          : ""
                                  }`}
                                />
                            </div>
                            {firstNameErr && (
                                <div className="w-fit text-left flex items-center px-2 gap-1 text-rose-500 absolute right-0 top-[0px] transition-all duration-300  text-sm font-medium   ">
                                    <FaExclamationTriangle />
                                    <span className=" ">{firstNameErr}</span>
                                </div>
                            )}
                        </div>
                        <div className="relative  gap-2 w-full text-gray-500 text-sm">
                            <div className="relative  gap-2 w-full text-gray-500 mt-6 text-sm">
                                <FaUser className="absolute top-[50%] left-3 translate-y-[-50%]" />
                                <input
                                    type={"text"}
                                    placeholder={"Firstname"}
                                    value={lastName}
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                    className={`text-gray-800 py-2 outline-none border-2 w-full px-8  transition-all duration-300  rounded-md
                                  ${
                                      lastNameErr
                                          ? "border-rose-500 focus:border-rose-500"
                                          : ""
                                  }`}
                                />
                            </div>
                            {lastNameErr && (
                                <div className="w-fit text-left flex items-center px-2 gap-1 text-rose-500 absolute right-0 top-[0px] transition-all duration-300  text-sm font-medium   ">
                                    <FaExclamationTriangle />
                                    <span className=" ">{lastNameErr}</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="relative  gap-2 w-full text-gray-500 text-sm">
                        <div className="relative  gap-2 w-full text-gray-500 mt-8 text-sm">
                            <MdOutlineAlternateEmail className="absolute top-[50%] left-3 translate-y-[-50%]" />
                            <input
                                type={"email"}
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                placeholder={"Email"}
                                className={`text-gray-800 py-2 outline-none border-2 w-full px-8  transition-all duration-300  rounded-md
                                  ${
                                      emailErr
                                          ? "border-rose-500 focus:border-rose-500"
                                          : ""
                                  }`}
                            />
                        </div>
                        {emailErr && (
                            <div className="w-fit text-left flex items-center px-2 gap-1 text-rose-500 absolute left-0 top-[8px] transition-all duration-300  text-sm font-medium   ">
                                <FaExclamationTriangle />
                                <span className=" ">{emailErr}</span>
                            </div>
                        )}
                    </div>
                    <div className="relative  gap-2 w-full text-gray-500 text-sm">
                        <div className="relative  gap-2 w-full text-gray-500 mt-8 text-sm">
                            <FaLock className="absolute top-[50%] left-3 translate-y-[-50%]" />
                            <input
                                type={"password"}
                                onChange={handlePassChange}
                                value={password}
                                placeholder={"Password (8 or more charachters)"}
                                className={`text-gray-800 py-2 outline-none border-2 w-full px-8  transition-all duration-300  rounded-md
                                  ${
                                      passwordErr
                                          ? "border-rose-500 focus:border-rose-500"
                                          : ""
                                  }`}
                            />
                        </div>
                        {passwordErr && (
                            <div className="w-fit text-left flex items-center px-2 gap-1 text-rose-500 absolute left-0 top-[8px] transition-all duration-300  text-sm font-medium   ">
                                <FaExclamationTriangle />
                                <span className=" ">{passwordErr}</span>
                            </div>
                        )}
                    </div>

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

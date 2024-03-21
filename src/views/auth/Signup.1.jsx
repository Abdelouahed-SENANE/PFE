import React, { useState } from "react";
import { FaUserTie } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import Spinner from "../../components/ui/Spinner";

export const Signup = () => {
    const [accountType, setAccountType] = useState("");
    const [isLoading, setIsloading] = useState(false);
    const [renderRegister, setRenderRegister] = useState(false);

    const handleClient = () => {
        setAccountType("client");
        setIsloading(true);
        setTimeout(() => {
            setRenderRegister(true);
            setIsloading(false);
        }, 5000);
    };
    const handleFreelancer = () => {
        setAccountType("freelancer");
        setIsloading(true);
        setTimeout(() => {
            setRenderRegister(true);
            setIsloading(false);
        }, 5000);
    };
    const handleSubmit = (e) => {};
    if (!renderRegister && !isLoading) {
        return (
            <div className="min-h-[calc(100vh-128px)] flex items-center flex-col ">
                <div>
                    <h1 className="lg:my-8  my-4 text-lg lg:text-3xl max-w-lg text-center text-gray-500 font-light">
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
                            <span className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] bg-white p-4">
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
        <div className="min-h-[calc(100vh-128px)] flex items-center flex-col ">
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
    );
};

import React from "react";
import Logo from "./ui/Logo";
import { FaFacebookF, FaLinkedin, FaPhone } from "react-icons/fa";
import { FaGoogle, FaLocationDot, FaMessage, FaTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <div className="container mx-auto px-10 text-white">
                <div className="grid md:grid-cols-2 lg:grid-cols-4">
                    {/* div 1 */}
                    <div className="w-full ">
                        <Logo width={35} fill={"#fff"} text={"text-3xl"} />
                        <p className="my-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sapiente provident cumque aliquam.
                        </p>
                        {/* Social Link */}
                        <ul className="py-4 flex gap-2">
                            <li className="p-1 rounded-sm w-fit text-secondary bg-primary">
                                <a href="#">
                                    <FaGoogle />
                                </a>
                            </li>
                            <li className="p-1 rounded-sm w-fit text-secondary bg-primary">
                                <a href="#">
                                    <FaTwitter />
                                </a>
                            </li>
                            <li className="p-1 rounded-sm w-fit text-secondary bg-primary">
                                <a href="#">
                                    <FaLinkedin />
                                </a>
                            </li>
                            <li className="p-1 rounded-sm w-fit text-secondary bg-primary">
                                <a href="#">
                                    <FaFacebookF />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-wrap my-5 lg:my-0 col-span-2 lg:mx-8">
                        <div className="text-white flex-1">
                            <h3 class="uppercase text-2xl">Company</h3>
                            <a href="#" class="block py-4    hover:underline">
                                Services
                            </a>
                            <a href="#" class="block py-4   hover:underline">
                                Team
                            </a>
                            <a href="#" class="block py-4   hover:underline">
                                Contact us
                            </a>
                            <a href="#" class="block py-4   hover:underline">
                                About
                            </a>
                        </div>
                        <div className="text-white flex-1">
                            <h3 class="uppercase text-2xl">Service</h3>
                            <a href="#" class="block py-4  hover:underline">
                                Home
                            </a>
                            <a href="#" class="block py-4    hover:underline">
                                community
                            </a>
                            <a href="#" class="block py-4   hover:underline">
                                Careers
                            </a>
                        </div>
                    </div>
                    <div className="text-white">
                        <h3 class="uppercase text-2xl">Get Intoch</h3>
                        <a
                            href="#"
                            class=" py-4 flex gap-2 items-center hover:underline"
                        >
                            <FaPhone className="text-primary text-xl " /> +212
                            77 8899 0098
                        </a>
                        <a
                            href="#"
                            class=" py-4 flex gap-2 items-center hover:underline"
                        >
                            <FaMessage className="text-primary text-xl " />{" "}
                            linkup@company.com
                        </a>
                        <a
                            href="#"
                            class=" py-4 flex gap-2 items-center hover:underline"
                        >
                            <FaLocationDot className="text-primary text-xl" />{" "}
                            SAFI, Morocco
                        </a>
                    </div>
                </div>
                <div className="py-10">
                    <hr className="border-t border-slate-400" />
                    <div className="flex items-center  pt-[30px] justify-between">
                        <span>
                            Copyright © 2024 MakeWebBetter All Rights Reserved.
                        </span>
                        <div className="flex items-center">
                            <a
                                href="#"
                                className="border-r px-2 block border-white"
                            >
                                Privacy Policy
                            </a>
                            <a href="#" className="px-2 block">
                                Terms & Condition
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;

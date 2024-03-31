import { Link, NavLink } from "react-router-dom";
import "../../assets/theme-overrides.css";
import Logo from "../ui/Logo";
import { FaAngleDown, FaBars, FaXmark } from "react-icons/fa6";
import { useRef, useState } from "react";
import Notification from "@components/ui/Notification";
import test from "@assets/uploads/vector.png";
import Message from "../ui/Message";
import { outsideClickAlert } from "../../helpers/HandleClickOutside";
const links = [
    {
        link: "/orders",
        name: "Orders",
    },
    {
        link: "/gigs",
        name: "Gigs",
    },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const settingRef = useRef(null);

    outsideClickAlert(settingRef, () => setIsActive(false));
    return (
        <>
            <nav className=" py-2 relative  bg-white lg:py-0 border border-slate-500/20">
                <div className="container border-1 border-slate-100  lg:mx-auto flex items-center justify-between lg:justify-start">
                    <div className="mx-5">
                        <Logo color={"#ffffff"} width={24} height={24} />
                    </div>
                    {/* nav bar Desktop */}
                    <div className={`bg-white hidden lg:block left-0 `}>
                        <ul className=" flex py-4  lg:py-0">
                            {links.map((link, index) => {
                                return (
                                    <li key={index} className="w-fit">
                                        <NavLink
                                            to={link.link}
                                            className={`text-gray-700 lg:py-5 block mx-2 px-3 link`}
                                        >
                                            {link.name}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    {/* ====== Profile ====== */}
                    <div className="flex-1   ">
                        <div className="flex justify-end gap-3">
                            <Notification />
                            <Message />
                            <div
                                className="relative cursor-pointer"
                                onClick={() => setIsActive(!isActive)}
                            >
                                <img
                                    src={test}
                                    alt=""
                                    className="h-8 w-8 rounded-full"
                                />
                                <div
                                    ref={settingRef}
                                    className={`setting_wrapper ${
                                        isActive ? "active" : "inactive"
                                    }`}
                                >
                                    <h4 className="border-slate-300 border-b px-2 py-3 text-sm text-gray-600">
                                        Settings
                                    </h4>
                                    <ul className="p-2">
                                        <li>
                                            <Link
                                                to={"/admin/profile"}
                                                className="block px-2 py-2.5 hover:bg-gray-100 duration-500 transition-all"
                                            >
                                                Profile
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to={"/logout"}
                                                className="block px-2 py-2.5 hover:bg-gray-100 duration-500 transition-all"
                                            >
                                                Logout
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* nav bar Mobile */}
                    <div
                        className={` lg:hidden w-full z-50 bg-white shadow-lg transition-all duration-300 shadow-slate-200/50 absolute ${
                            isOpen ? "left-0" : "left-[-150%]"
                        } top-full `}
                    >
                        <ul className=" lg:flex py-4  lg:py-0">
                            {links.map((link, index) => {
                                return (
                                    <li
                                        key={index}
                                        className="flex items-center justify-center   mx-6 "
                                    >
                                        <NavLink
                                            to={link.link}
                                            className={`text-gray-700 py-2 px-3 text-center my-2 block   lg:py-4   link`}
                                        >
                                            {link.name}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    {/*  */}
                    <div
                        className="mx-3 cursor-pointer lg:hidden hover:text-primary hover:bg-gray-300/20 rounded-full px-2 py-2 transition-all duration-300"
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                    >
                        {isOpen ? (
                            <FaXmark className="text-xl" />
                        ) : (
                            <FaBars className="text-xl" />
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
};

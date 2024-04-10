import { Link, NavLink } from "react-router-dom";
import "../assets/theme-overrides.css";
import Logo from "./ui/Logo";
import { FaAngleDown, FaArrowDown, FaBars, FaXmark } from "react-icons/fa6";
import { useRef, useState } from "react";
import Button from "./ui/Button";
import { useAuth } from "../hooks/AuthContext";
import Setting from "./ui/Setting";
import { outsideClickAlert } from "../helpers/HandleClickOutside";
import instance from "../config/ConfigAxios";
import { handleLogout } from "../utils/logout";

const links = [
    {
        link: "/",
        name: "Home",
    },
    {
        link: "/about",
        name: "About",
    },
    {
        link: "/contact",
        name: "Contact",
    },
    {
        link: "/services",
        name: "Services",
    },
    {
        link: "/blog",
        name: "Blog",
    },
];
const catagories = [
    {
        link: "/categories/technology-programming",
        name: "Technology & Programming",
    },
    {
        link: "/categories/data",
        name: "Data Science & Analytics",
    },
    {
        link: "/categories/design-creative",
        name: "Design & Creative",
    },
    {
        link: "/categories/sales-and-marketing",
        name: "Sales & Marketing",
    },
    {
        link: "/categories/writing-translations",
        name: "Writing & Translations",
    },
    {
        link: "/categories/audio",
        name: "Audiovesiuelle",
    },
];
export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useAuth();
    const [isActive, setIsActive] = useState(false);
    const settingRef = useRef(null);
    outsideClickAlert(settingRef, () => setIsActive(false));
    const logout = async () => {
        await handleLogout();
    }
    return (
        <>
            <nav className=" py-2 relative  bg-white lg:py-0 border border-slate-500/20">
                <div className="container border-1 border-slate-100  lg:mx-auto flex items-center  justify-between">
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
                    {/* nav bar Mobile */}
                    <div
                        className={` lg:hidden w-full z-0 bg-white shadow-lg transition-all duration-300 shadow-slate-200/50 absolute ${
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
                        <div className=" flex  justify-center pb-5 gap-4 mx-10 items-center lg:hidden">
                            <Button
                                bgColor={"primary"}
                                textColor={"text-white"}
                                colorBorder={"primary"}
                                to={"/login"}
                                text={"Login"}
                                fill={true}
                            />
                            <Button
                                bgColor={""}
                                textColor={"text-primary"}
                                colorBorder={"primary"}
                                to={"/register"}
                                text={"Sign up"}
                                fill={false}
                            />
                        </div>
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
                    {/* Authentication buttons */}
                    {!user ? (
                        <div className="hidden lg:flex gap-4 ">
                            <Button
                                bgColor={"primary"}
                                textColor={"text-white"}
                                colorBorder={"border-primary"}
                                to={"/login"}
                                text={"Login"}
                                fill={true}
                            />
                            <Button
                                bgColor={"white"}
                                textColor={"text-primary"}
                                colorBorder={"border-primary"}
                                to={"/signup"}
                                text={"Sign up"}
                                fill={false}
                            />
                        </div>
                    ) : (
                        <div
                            className="relative cursor-pointer"
                            onClick={() => setIsActive(!isActive)}
                        >
                            <img
                                src={`http://localhost:8000/storage/uploads/${user.picture}`}
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
                                            to={"/profile"}
                                            className="block px-2 py-2.5 hover:bg-gray-100 duration-500 transition-all"
                                        >
                                            Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            onClick={logout}
                                            className="block px-2 py-2.5 w-full text-left hover:bg-gray-100 duration-500 transition-all"
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
            <SubNav />
        </>
    );
};

const SubNav = () => {
    return (
        <>
            {/* Sub navigation */}
            <nav className=" py-4 bg-white hidden border-b lg:block">
                <div className="container mx-auto">
                    <ul className="mx-5 flex items-center gap-1">
                        {catagories.map((category, index) => {
                            if (index < 4) {
                                return (
                                    <li key={index}>
                                        <NavLink
                                            to={category.link}
                                            className={
                                                "hover:text-primary transition-all duration-300 sublink rounded-sm px-3 p-2"
                                            }
                                        >
                                            {category.name}
                                        </NavLink>
                                    </li>
                                );
                            }
                        })}
                        <li className="relative">
                            <span className="flex show_more cursor-pointer items-center gap-1 hover:text-primary transition-all duration-300">
                                More <FaAngleDown />
                            </span>
                            <div className="absolute mt-2 dropdown shadow-[0_0_10px_2px_rgba(0,30,0,0.15)] top-full left-0 w-[250px] bg-white rounded-sm ">
                                <ul className="py-1  arrow_up ">
                                    {catagories.map((category, index) => {
                                        if (index >= 4) {
                                            return (
                                                <li
                                                    key={index}
                                                    className="px-4 py-2 hover:bg-primary/10"
                                                >
                                                    <NavLink
                                                        to={category.link}
                                                        className={
                                                            "hover:text-primary transition-all duration-300"
                                                        }
                                                    >
                                                        {category.name}
                                                    </NavLink>
                                                </li>
                                            );
                                        }
                                    })}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

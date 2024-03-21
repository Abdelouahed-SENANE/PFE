import React from "react";
import { Link } from "react-router-dom";
import { FcLink } from "react-icons/fc";

const Logo = ({ width, height, text }) => {
    return (
        <Link to={"/"}>
            <div className="flex items-center w-fit bg-primary py-1 px-1 text-white ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width={width}
                    height={height}
                    viewBox="0,0,256,256"
                >
                    <g
                        fill="currentColor"
                        fillRule="nonzero"
                        stroke="none"
                        strokeWidth={1} 
                        strokeLinecap="butt" 
                        strokeLinejoin="miter"
                        strokeMiterlimit={10} 
                        strokeDasharray=""
                        strokeDashoffset={0} 
                        fontFamily="none" 
                        fontWeight="none" 
                        fontSize="none" 
                        textAnchor="none"
                    >
                        <g transform="scale(5.33333,5.33333)">
                            <rect x="6" y="8" width="34" height="34"></rect>
                            <path d="M44,19v-15h-15z"></path>
                            <rect
                                x="-1.25993"
                                y="30.95701"
                                transform="rotate(-45.001)"
                                width="22.648"
                                height="5.969"
                            ></rect>
                            <rect
                                x="17.67594"
                                y="30.95788"
                                transform="rotate(-45.001)"
                                width="3.712"
                                height="5.969"
                            ></rect>
                        </g>
                    </g>
                </svg>
                <h2 className={` ${text} bg-primary font-['Overlock SC'] font-bold text-white px-1`}>
                    Linkup.
                </h2>
            </div>
        </Link>
    );
};

export default Logo;

import React from "react";
import { FaStar } from "react-icons/fa";

const Header = ({ data }) => {
    return (
        <div>
            <h1 className="text-[28px] font-medium"> {data.excerpt}</h1>
            <div className="flex items-center gap-4">
                <div className="w-[64px] h-[64px] my-3 ">
                    <img
                        src={`http://localhost:8000/storage/avatars/${data.freelancer.user.picture}`}
                        alt="profile"
                        className="w-full h-full rounded-full"
                    />
                </div>
                <div className="">
                    <h4 className="text-lg font-medium">{data.freelancer.user.name}</h4>
                    <div className="my-1 flex items-center gap-1">
                        <FaStar className="text-yellow-400" />
                        <p>
                            4.9 <span className="text-gray-400">(200)</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

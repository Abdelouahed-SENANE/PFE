import React from "react";
import { IoSearchOutline, IoSettings } from "react-icons/io5";
import Notification from "../ui/Notification";
import vector from "../../assets/uploads/vector.png";
import Setting from "../ui/Setting";
import moment from "moment";
import { useAuth } from "../../hooks/AuthContext";

const AdminNavbar = () => {
    const {user} = useAuth();
    const now = new Date();

    return (
        <>
            <nav className="border-b py-4 px-5 bg-white border-slate-200 flex justify-between items-center">
                <h1 className=" text-xl text-primary"></h1>
                <div className="flex items-center gap-5">
                    <div className="relative ">
                        <IoSearchOutline className="absolute top-[50%] left-2 translate-y-[-50%] text-xl text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search anythings..."
                            className="outline-none border-2 py-1 w-[350px] bg-gray-50 focus:ring-4 focus:ring-primary/30 rounded-md transition-all duration-300 focus:border-primary  ps-8"
                        />
                    </div>
                    <Notification />
                    <div className="px-1.5 py-1.5 bg-gray-100 rounded-full flex items-center gap-3 text-sm">
                        <div className="h-8  w-8  rounded-full overflow-hidden">
                            {" "}
                            <img src={`http://localhost:8000/storage/avatars/${user.picture}`} alt="pic" className="w-full" />
                        </div>
                        <div>
                            <h6 className="text-primary">
                                Hello,{" "}
                                <span className="text-gray-700">
                                    {user.name}
                                </span>
                            </h6>
                        </div>
                        <div className="rounded-full bg-white px-2 py-1">
                            <span>{moment(now).format('D, MMMM')}</span>
                        </div>
                        <Setting />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default AdminNavbar;

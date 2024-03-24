import React, { useEffect, useRef, useState } from "react";
import { IoNotifications } from "react-icons/io5";
import { outsideClickAlert } from "../../helpers/HandleClickOutside";

const Notification = () => {
    const notificationRef = useRef(null);
    const [isActive, setIsActive] = useState(false);

    outsideClickAlert(notificationRef, () => setIsActive(false));
    return (
        <>
            <div className="relative">
                <div
                    ref={notificationRef}
                    onClick={() => setIsActive(!isActive)}
                    className={`${
                        isActive
                            ? "bg-primary text-white"
                            : "bg-gray-100 text-gray-600"
                    } w-8 h-8 relative rounded-full flex items-center justify-center  text-lg cursor-pointer group transition-all hover:bg-primary  duration-500`}
                >
                    <IoNotifications className=" group-hover:text-white" />
                    <span className="absolute right-1 top-0 bg-gray-600 h-2 w-2 border border-white rounded-full block z-40 transition-all duration-500 group-hover:bg-primary group-hover:text-white"></span>
                </div>

                <div
                    ref={notificationRef}
                    className={`notification_container ${
                        isActive ? "active" : "inactive"
                    }`}
                >
                    <h4 className="border-slate-300 border-b px-2 py-3 text-sm text-gray-600">
                        Notification (0)
                    </h4>
                    <ul></ul>
                </div>
            </div>
        </>
    );
};

export default Notification;

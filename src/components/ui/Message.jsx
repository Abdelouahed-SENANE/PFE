import React, { useEffect, useRef, useState } from "react";
import { FaMessage } from "react-icons/fa6";import { outsideClickAlert } from "../../helpers/HandleClickOutside";

const Message = () => {
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
                    <FaMessage className="text-sm group-hover:text-white" />
                </div>

                <div
                    ref={notificationRef}
                    className={`notification_container ${
                        isActive ? "active" : "inactive"
                    }`}
                >
                    <h4 className="border-slate-300 border-b  px-2 py-3 text-sm text-gray-600">
                        Messages (0)
                    </h4>
                    <ul></ul>
                </div>
            </div>
        </>
    );
};

export default Message;

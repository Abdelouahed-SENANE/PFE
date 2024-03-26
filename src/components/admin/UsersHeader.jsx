import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import "../../assets/theme-overrides.css";

const UsersHeader = () => {
    return (
        <>
            <div className="p-5">
                <div className="my-5">
                    <header className="flex items-start justify-between">
                        <div>
                            <h2 className="text-slate-800 text-3xl uppercase tracking-widest">
                                Users
                            </h2>
                        </div>
                    </header>
                </div>
            </div>
           
        </>
    );
};

export default UsersHeader;

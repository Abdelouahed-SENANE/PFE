import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import "../../assets/theme-overrides.css";

const CreateCategory = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="p-5">
                <div className="my-5">
                    <header className="flex items-start justify-between">
                        <div>
                            <h2 className="text-slate-800 text-3xl uppercase tracking-widest">
                                Categories
                            </h2>
                        </div>
                        <div>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="bg-primary text-sm text-white border-2 rounded-md border-primary shadow-inner shadow-white/49 py-1.5 px-2"
                            >
                                Create Category
                            </button>
                        </div>
                    </header>
                </div>
            </div>
            <div className={`add_category ${isOpen ? "active" : ""}`}>
                <div
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                    className="bg-slate-300/45 w-full h-full absolute inset-0"
                ></div>
                <div className="wrapper_form ">
                    <header className="py-5 px-3 border-b border-gray-200 flex justify-between items-center">
                        <h4>Create new Category</h4>
                        <button
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                            className="text-2xl font-light text-gray-600 hover:text-primary transition-all duration-300"
                        >
                            <FaXmark />
                        </button>
                    </header>
                    <div className="p-4 h-[calc(100vh-65px)] flex items-center justify-center">
                        Form Category
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateCategory;

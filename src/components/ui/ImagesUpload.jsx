import React, { useState } from "react";
import { IoCloudUploadSharp } from "react-icons/io5";
import { FaRegCircleXmark } from "react-icons/fa6";

const ImagesUpload = ({ files, setFiles }) => {
    const handleImageUpload = (e) => {
        const fileList = Array.from(e.target.files);
        setFiles((prevFiles) => [...prevFiles, ...fileList]);
    };

    const handleDeleteImage = (index) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    return (
        <>
            <div className="w-full border-dashed border-2 p-5 border-gray-200 h-[85px] flex flex-col justify-center items-center">
                <label htmlFor="images">
                    <input
                        id="images"
                        type="file"
                        multiple
                        className="hidden"
                        onChange={handleImageUpload}
                    />
                    <div className="flex items-center gap-2 text-2xl bg-primary text-white rounded-lg cursor-pointer px-5 py-2">
                        <IoCloudUploadSharp />
                        <span className="text-sm">Choose a photo</span>
                    </div>
                </label>
                {files.length > 0 ? (
                    <p className="mt-1">{files.length} Files Selected</p>
                ) : (
                    <p className="mt-1"> No Files Selected</p>
                )}
            </div>
            <div className="images flex flex-wrap gap-2">
                {files.map((file, index) => (
                    <div
                        key={index}
                        className="relative pt-1  mt-6 w-[140px] h-[110px]"
                    >
                        {file && (
                            <img
                                src={URL.createObjectURL(file)}
                                alt={`Image ${index}`}
                                className=" object-cover rounded-md  w-full h-full"
                            />
                        )}
                        <span
                            className="text-white absolute text-md cursor-pointer top-[-16px] hover:text-primary z-50 right-[-4px]"
                            onClick={() => handleDeleteImage(index)}
                        >
                            <FaRegCircleXmark className="text-lg text-primary" />
                        </span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ImagesUpload;

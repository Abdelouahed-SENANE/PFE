import React, { useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import MultiSelect from "@components/ui/MultiSelect";
import "react-datetime/css/react-datetime.css";
import DatePicker from "react-datepicker";
import "@assets/theme-overrides.css";
import ImagesUpload from "../../components/ui/ImagesUpload";
import Select from "../../components/ui/Select";

// Exemple ==============
const data = {
    categories: [
        {
            id: 1,
            name: "Category A",
        },
        {
            id: 2,
            name: "Category B",
        },
    ],
    subcategories: [
        {
            id: 1,
            name: "Subcategory 1",
            category_id: 1,
        },
        {
            id: 2,
            name: "Subcategory 2",
            category_id: 1,
        },
        {
            id: 3,
            name: "Subcategory 3",
            category_id: 1,
        },
        {
            id: 4,
            name: "Subcategory 4",
            category_id: 2,
        },
        {
            id: 5,
            name: "Subcategory 5",
            category_id: 2,
        },
        {
            id: 6,
            name: "Subcategory 6",
            category_id: 2,
        },
    ],
};

const NewGigs = () => {
    const [title, setTitle] = useState("");
    const [tags, setTags] = useState([]);
    const [images, setImages] = useState([]);
    const [errImages, setErrImages] = useState("");
    const [errTags, setErrTags] = useState("");
    const [delivery, setDelivery] = useState("");
    const [errDelivery, setErrDelivery] = useState("");
    const [errTitle, setErrTitle] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [errExcerpt, setErrExcerpt] = useState("");
    const [description, setDescription] = useState("");
    const [errDesc, setErrDesc] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [errSelectedCategory, setErrSelectedCategory] = useState("");
    const [selectSubCategory, setSelectedSubCategory] = useState("");

    // ======= categories ====

    const validateGig = () => {
        const deliveryRegex = /^\d+\sdays$/;
        let check = true;
        if (title.trim() === "" || title.length === null) {
            setErrTitle("Required!");
            check = false;
        } else {
            setErrTitle("");
            check = true;
        }
        if (excerpt.trim() === "" || excerpt.length === null) {
            setErrExcerpt("Required!");
            check = false;
        } else if (excerpt.length < 40) {
            setErrExcerpt("Excerpt must be greatest  than 40 characters");
            check = false;
        } else {
            setErrExcerpt("");
            check = true;
        }
        if (description.trim() === "" || description.length === null) {
            setErrDesc("Required!");
            check = false;
        } else if (description.length < 140) {
            setErrDesc("Excerpt must greatest 140 characters");
            check = false;
        } else {
            setErrDesc("");
            check = true;
        }
        if (delivery.trim() === "") {
            setErrDelivery("Required!");
            check = false;
        } else if (!deliveryRegex.test(delivery)) {
            setErrDelivery('Delivery date must be in the format e.g "2 days"');
        } else {
            setErrDelivery("");
            check = true;
        }
        if (!tags || tags.length === 0) {
            setErrTags("Required!");
            check = false;
        } else {
            setErrTags("");
            check = true;
        }
        if (selectedCategory.trim() === "" || selectedCategory.length === 0) {
            setErrSelectedCategory("Category is Required!");
            check = false;
        } else if (
            selectSubCategory.trim() === "" ||
            selectSubCategory.length === 0
        ) {
            setErrSelectedCategory("Subcategory is Required!");
            check = false;
        } else {
            setErrSelectedCategory("");
            check = true;
        }
        if (images.length === 0) {
            setErrImages("Required!");
        } if (images.length === 0) {
            setErrImages("Image is required!");
        } else {
            const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
            let isValid = true;
        
            for (let i = 0; i < images.length; i++) {
                const imageType = images[i].type.toLowerCase();
        
                if (!allowedTypes.includes(imageType)) {
                    setErrImages("Invalid image type!");
                    isValid = false;
                    break; // Exit the loop early since one invalid image type is enough to determine the overall validation result
                }
            }
        
            if (isValid) {
                setErrImages(""); // Clear the error message if all image types are valid
            }
        }

        return check;
    };
    console.log(images);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateGig()) {
            console.log("Form data:", {
                title,
                excerpt,
                description,
                delivery,
                tags,
                images,
            });
        }
    };
    return (
        <>
            <div className=" min-h-screen  w-full flex items-start justify-center">
                <div className="bg-white min-w-[600px] p-5 border-gray-200 border rounded-lg">
                    <form
                        action=""
                        onSubmit={handleSubmit}
                        encType="multipart/form-data"
                    >
                        <div className="flex-1 min-w-[700px] max-w-[700px] relative ">
                            <div className="relative  gap-4 flex items-start w-full text-gray-500 text-sm">
                                <label
                                    htmlFor=""
                                    className="w-[150px] text-gray-600 text-base"
                                >
                                    Title Service
                                </label>
                                <div className="w-full">
                                    <input
                                        type={"text"}
                                        placeholder={"Title Service"}
                                        value={title}
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                        className={`text-gray-800 py-2 outline-none border-2 w-full px-2  transition-all duration-300  rounded-md
                                    ${
                                        errTitle
                                            ? "border-red-500 focus:border-red-500"
                                            : "focus:border-slate-500"
                                    }
                                    `}
                                    />
                                    {errTitle && (
                                        <>
                                            <span className="text-rose-500  text-sm font-medium flex items-center gap-1">
                                                <FaExclamationTriangle className="text-red-500  text-lg  " />

                                                {errTitle}
                                            </span>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="relative  gap-4 flex items-start mt-4 w-full text-gray-500 text-sm">
                                <label
                                    htmlFor=""
                                    className="w-[150px] text-gray-600 text-base"
                                >
                                    Category
                                </label>
                                <div className="w-full flex  flex-col ">
                                    <div className="flex flex-1 gap-5">
                                        <Select
                                            handleChangeCategory={(e) =>
                                                setSelectedCategory(
                                                    e.target.value
                                                )
                                            }
                                            selectedCategory={selectedCategory}
                                            handleChangeSubCategory={(e) =>
                                                setSelectedSubCategory(
                                                    e.target.value
                                                )
                                            }
                                            data={data}
                                        />
                                    </div>
                                    {errSelectedCategory && (
                                        <>
                                            <span className="text-rose-500 text-sm font-medium flex items-center gap-1">
                                                <FaExclamationTriangle className="text-red-500  text-lg  " />
                                                {errSelectedCategory}
                                            </span>
                                        </>
                                    )}
                                </div>
                            </div>

                            <div className="relative  my-4 gap-4 flex items-start w-full text-gray-500 text-sm">
                                <label
                                    htmlFor=""
                                    className="w-[150px] text-gray-600 text-base"
                                >
                                    Excerpt Service
                                </label>
                                <div className="w-full">
                                    <input
                                        type={"text"}
                                        placeholder={"Excerpt Service"}
                                        value={excerpt}
                                        onChange={(e) =>
                                            setExcerpt(e.target.value)
                                        }
                                        className={`text-gray-800 py-2 outline-none border-2 w-full px-2  transition-all duration-300  rounded-md
                                    ${
                                        errExcerpt
                                            ? "border-red-500 focus:border-red-500"
                                            : "focus:border-slate-500"
                                    }
                                    `}
                                    />
                                    {errExcerpt && (
                                        <>
                                            <span className="text-rose-500  text-sm font-medium flex items-center gap-1">
                                                <FaExclamationTriangle className="text-red-500  text-lg  " />

                                                {errExcerpt}
                                            </span>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="relative  my-4 gap-4 flex items-start w-full text-gray-500 text-sm">
                                <label
                                    htmlFor=""
                                    className="w-[150px] text-gray-600 text-base"
                                >
                                    Description Service
                                </label>
                                <div className="w-full">
                                    <textarea
                                        rows={5}
                                        value={description}
                                        placeholder={"Excerpt Service"}
                                        onChange={(e) =>
                                            setDescription(e.target.value)
                                        }
                                        className={`text-gray-800 ps-2 pe-8  py-2 outline-none border-2 w-full   transition-all duration-300  resize-none rounded-md ${
                                            errDesc
                                                ? "border-red-500 focus:border-red-500"
                                                : "focus:border-slate-500"
                                        }`}
                                    ></textarea>
                                    {errDesc && (
                                        <>
                                            <span className="text-rose-500  text-sm font-medium flex items-center gap-1">
                                                <FaExclamationTriangle className="text-red-500  text-lg  " />

                                                {errDesc}
                                            </span>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="relative   my-4 gap-4 flex items-start w-full text-gray-500 text-sm">
                                <label
                                    htmlFor=""
                                    className="w-[120px] text-gray-600 text-base"
                                >
                                    Delivery Date
                                </label>
                                <div className="flex-1">
                                    <input
                                        type={"text"}
                                        placeholder={"Excerpt Service"}
                                        value={delivery}
                                        onChange={(e) =>
                                            setDelivery(e.target.value)
                                        }
                                        className={`text-gray-800 py-2 outline-none border-2 w-full px-2  transition-all duration-300  rounded-md
                                    ${
                                        errDelivery
                                            ? "border-red-500 focus:border-red-500"
                                            : "focus:border-slate-500"
                                    }
                                    `}
                                    />
                                    {errDelivery && (
                                        <>
                                            <span className="text-rose-500  text-sm font-medium flex items-center gap-1">
                                                <FaExclamationTriangle className="text-red-500  text-lg  " />
                                                {errDelivery}
                                            </span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="relative  my-4 gap-4 flex text-gray-500 text-sm">
                            <label
                                htmlFor=""
                                className="w-[120px] text-gray-600 text-base"
                            >
                                Search Tags
                            </label>
                            <div className="">
                                <MultiSelect
                                    tags={tags}
                                    setTags={setTags}
                                    error={errTags}
                                />
                                {errTags && (
                                    <>
                                        <span className="text-rose-500  text-sm font-medium flex items-center gap-1">
                                            <FaExclamationTriangle className="text-red-500  text-lg  " />
                                            {errTags}
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="relative w-full my-4 gap-4 flex text-gray-500 text-sm">
                            <label
                                htmlFor=""
                                className="w-[120px] text-gray-600 text-base"
                            >
                                Gig Gallery
                            </label>
                            <div className="flex-1 w-full">
                                <ImagesUpload
                                    files={images}
                                    setFiles={setImages}
                                />
                                {errImages && (
                                    <>
                                        <span className="text-rose-500  text-sm font-medium flex items-center gap-1">
                                            <FaExclamationTriangle className="text-red-500  text-lg  " />
                                            {errImages}
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="ml-auto w-[20%] my-4">
                            <button
                                type="submit"
                                className="w-full text-center py-2 px-4 bg-black text-white rounded-lg"
                            >
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default NewGigs;

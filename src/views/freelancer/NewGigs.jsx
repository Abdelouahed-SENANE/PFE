import React, { useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import MultiSelect from "@components/ui/MultiSelect";
import "react-datetime/css/react-datetime.css";
import DatePicker from "react-datepicker";
import "@assets/theme-overrides.css";
import ImagesUpload from "../../components/ui/ImagesUpload";
const NewGigs = () => {
    const [title, setTitle] = useState("");
    const [tags, setTags] = useState([]);
    const [images, setImages] = useState([]);
    const [errTags, setErrTags] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);
    const [errSelectdate, setErrSelectDate] = useState("");
    const [errTitle, setErrTitle] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [errExcerpt, setErrExcerpt] = useState("");
    const [description, setDescription] = useState("");
    const [errDesc, setErrDesc] = useState("");

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const validateGig = () => {
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
        if (!selectedDate) {
            setErrSelectDate("Required!");
            check = false;
        } else {
            setErrSelectDate("");
            check = true;
        }
        if (!tags || tags.length === 0) {
            setErrTags("Required!");
            check = false;
        } else {
            setErrTags("");
            check = true;
        }
        return check;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateGig()) {
            console.log("Form data:", {
                title,
                excerpt,
                description,
                selectedDate,
                tags,
                images
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
                            <div className="relative  my-4 gap-4 flex items-start w-full text-gray-500 text-sm">
                                <label
                                    htmlFor=""
                                    className="w-[120px] text-gray-600 text-base"
                                >
                                    Date Delivery
                                </label>
                                <div className="custom-datepicker-container w-fit">
                                    <DatePicker
                                        minDate={new Date()}
                                        maxDate={
                                            new Date(
                                                new Date().getFullYear() + 1,
                                                11,
                                                31
                                            )
                                        }
                                        className={`customDatePicker ${
                                            errSelectdate
                                                ? "border-red-500 focus:border-red-500"
                                                : "focus:border-slate-500"
                                        }`}
                                        selected={selectedDate}
                                        onChange={handleDateChange}
                                        dateFormat="yyyy-MM-dd"
                                    />
                                    {errSelectdate && (
                                        <>
                                            <span className="text-rose-500 block text-sm font-medium flex items-center gap-1">
                                                <FaExclamationTriangle className="text-red-500  text-lg  " />

                                                {errSelectdate}
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
                                        <span className="text-rose-500 block text-sm font-medium flex items-center gap-1">
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

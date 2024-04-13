import React, { useEffect, useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import MultiSelect from "@components/ui/MultiSelect";
import "react-datetime/css/react-datetime.css";
import DatePicker from "react-datepicker";
import "@assets/theme-overrides.css";
import ImagesUpload from "../../components/ui/ImagesUpload";
import Select from "../../components/ui/Select";
import { getAllCategories } from "../../data/category/CategoryData";
import { getAllSubCategories } from "../../data/subcategory/SubcategoryData";
import Spinner from "@ui/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import { createGig, updateGig } from "../../data/gigs/GigService";
import { useMessage } from "../../hooks/MessageContext";
import { getGig } from "../../data/gigs/GigData";
// Exemple ==============

const UpdateGig = () => {
    const [title, setTitle] = useState("");
    const [tags, setTags] = useState([]);
    const [images, setImages] = useState([]);
    const [errImages, setErrImages] = useState("");
    const [errTags, setErrTags] = useState("");
    const [delivery, setDelivery] = useState("");
    const [errDelivery, setErrDelivery] = useState("");
    const [errTitle, setErrTitle] = useState("");
    const [errPrice, setErrPrice] = useState("");
    const [price, setPrice] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [errExcerpt, setErrExcerpt] = useState("");
    const [description, setDescription] = useState("");
    const [errDesc, setErrDesc] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [errSelectedCategory, setErrSelectedCategory] = useState("");
    const [selectSubCategory, setSelectedSubCategory] = useState("");
    const [categories, setCategories] = useState([]);
    const [subCaregories, setSubcategories] = useState([]);
    const [isLoading, setIsLoanding] = useState(true);
    const [ErrMsg, setErrMsg] = useState("");
    const { setMessage } = useMessage();
    const navigate = useNavigate();
    const {id} = useParams()
    // ======= categories ====
    const validateGig = () => {
        const integerRegex = /^[+-]?\d+$/;
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
        if (delivery === "") {
            setErrDelivery("Required!");
            check = false;
        } else if (!integerRegex.test(delivery)) {
            setErrDelivery("Delivery date must be a number");
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
        if (price.trim() === "" || price.length === 0) {
            setErrPrice("Price is Required!");
            check = false;
        } else {
            const regex = /^(\d{1,3}(,\d{3})*(\.\d{1,2})?|\d+(\.\d{1,2})?)$/;
            if (!regex.test(price)) {
                setErrPrice("In not a valid price");
                check = false;
            } else {
                setErrPrice("");
                check = true;
            }
        }
        if (images.length === 0) {
            setErrImages("Image is required!");
        } else {
            const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];

            for (let i = 0; i < images.length; i++) {
                const imageType = images[i].type.toLowerCase();

                if (!allowedTypes.includes(imageType)) {
                    setErrImages("Invalid image type!");
                    check = false;
                    break;
                }
            }

            if (check) {
                setErrImages("");
            }
        }

        return check;
    };
    // ============= Get Category Array
    const getCategories = () => {
        const fetch = async () => {
            try {
                const categories = await getAllCategories();
                setCategories(categories);
                const subcategories = await getAllSubCategories();
                setSubcategories(subcategories);
            } catch (error) {
                console.log(error);
            } finally {
                setTimeout(() => {
                    setIsLoanding(false);
                }, 800);
            }
        };
        fetch();
    };
    const fetchGig = () => {
        const fetch = async () => {
            try {
                const result = await getGig(id);
                setTitle(result.gig.title)
                setDescription(result.gig.description)
                setExcerpt(result.gig.excerpt)
                setPrice(result.gig.price)
                setTags(result.gig.search_tags)
                setDelivery(result.gig.delivery)
            } catch (error) {
                console.log(error);
            } finally {
                setTimeout(() => {
                    setIsLoanding(false);
                }, 800);
            }
        };
        fetch();
    };

    useEffect(() => {
        getCategories();
        fetchGig()

    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateGig()) {
            try {
                const payload = {
                    title: title,
                    description: description,
                    excerpt: excerpt,
                    price: price,
                    images: images,
                    search_tags: tags,
                    delivery: delivery,
                    subcategory_id: selectSubCategory,
                };
                
                const result = await updateGig(payload ,id);
                    if (result.status === 201) {
                        setMessage("The Gig updated  succefully");
                        return navigate(-1);
                    }
            } catch (error) {
                if (error && error.response) {
                    if (error.response.status === 422) {
                        setErrMsg("Somthing Wrong! , Please Try Again");
                    }
                }

            }
        }
    };

    if (isLoading) {
        return (
            <>
                <div className="w-full h-[80vh] flex items-center justify-center">
                    <Spinner />
                </div>
            </>
        );
    }
    return (
        <>
            {ErrMsg && (
                <div
                    className="bg-rose-50 w-[744px] mx-auto border-l-4 mb-2 border-rose-500 text-rose-700 p-2 "
                    role="alert"
                >
                    <p className="font-bold">Error</p>
                    <p>{ErrMsg}</p>
                </div>
            )}
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
                                            categories={categories.categories}
                                            subcategories={subCaregories}
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
                                        placeholder={"Description Service"}
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
                                    Price
                                </label>
                                <div className="flex-1">
                                    <input
                                        type={"text"}
                                        placeholder={"Price service"}
                                        value={price}
                                        onChange={(e) =>
                                            setPrice(e.target.value)
                                        }
                                        className={`text-gray-800 py-2 outline-none border-2 w-full px-2  transition-all duration-300  rounded-md
                                    ${
                                        errPrice
                                            ? "border-red-500 focus:border-red-500"
                                            : "focus:border-slate-500"
                                    }
                                    `}
                                    />
                                    {errPrice && (
                                        <>
                                            <span className="text-rose-500  text-sm font-medium flex items-center gap-1">
                                                <FaExclamationTriangle className="text-red-500  text-lg  " />
                                                {errPrice}
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
                                        placeholder={"Delivery"}
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
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default UpdateGig;

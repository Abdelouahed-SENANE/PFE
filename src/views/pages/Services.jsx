import React, { useEffect, useState } from "react";
import fiterImage from "@assets/images/bg-filter.jpg";
import { HiMiniXMark } from "react-icons/hi2";
import Cards from "../../components/ui/Cards";
import { getActiveGigs } from "../../data/gigs/GigData";
import CardPulse from "../../components/ui/carousel/CardPulse";
import Pagination from "../../components/ui/Pagination";
import { getAllSubCategories } from "../../data/subcategory/SubcategoryData";
import DropdownSelect from "../../components/select/DropdownSearch";
import RadioInput from "../../components/radioInput/RadioInput";
import PriceRange from "../../components/pricesInput/PriceRange";
import { HiSearch } from "react-icons/hi";

const Services = () => {
    const [gigsData, setGigData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [pages, setPages] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [filters, setFilters] = useState({
        subcategory: "",
        delivery: "",
        maxPrice: "",
        minPrice: "",
    });
    const [search, setSearch] = useState("");
    const [inputValue, setInputValue] = useState("");
    const handleSearch = (e) => {
        setSearch(inputValue)
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }
    // Filter By Subcategory
    const handleSelect = (option) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            subcategory: option.name,
        }));
        setCurrentPage(1);
    };

    const clearFilters = () => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            subcategory: "",
            delivery: "",
            maxPrice: "",
            minPrice: "",
        }));
    };
    // Delete Filteer Function
    const handleRemoveFilter = (filterKey) => {
        const updatedFilters = { ...filters };
        updatedFilters[filterKey] = "";
        setFilters(updatedFilters);
        setCurrentPage(1);

    };
    const handleFieldsChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
        setCurrentPage(1);
    };
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const res = await getActiveGigs(currentPage, filters, search);
            setGigData(res.activeGigs);
            setPages(res.paginations);
        } catch (error) {
            console.log(error);
        } finally {
            setTimeout(() => {
                setIsLoading(false);
            }, 1500);
        }
        const getSubcategories = async () => {
            try {
                const res = await getAllSubCategories();
                setCategories(res);
            } catch (error) {
                console.log(error);
            }
        };
        getSubcategories();
    };
    useEffect(() => {
            fetchData();
            window.scrollTo({ top: 250, behavior: "smooth" });
    }, [currentPage, filters , search]);
    // Check Filter
    const shouldRenderButton = Object.values(filters).some((value) =>
        Boolean(value)
    );
    // Count
    const filtersCount = Object.keys(filters).filter(
        (key) => !!filters[key]
    ).length;

    return (
        <>
            <div className=" mx-auto lg:w-[78%]  pt-[30px] lg:pt-[50px]">
                <div
                    className="w-[95%] relative   mx-auto min-h-[250px] rounded-xl "
                    style={{ backgroundImage: `url(${fiterImage})` }}
                >
                    <div className="py-[70px] px-20">
                        <h1 className="lg:text-5xl text-3xl">Get your service</h1>
                        <p className="my-1 text-sm lg:text-base">
                            Give your visitor a smooth online experience with a
                            solid SubCategory
                        </p>
                        <div className="mt-8 flex items-center relative w-fit gap-2 ">
                            <div className="relative">
                                <input
                                    type="text"
                                    className="py-2.5 pl-8 block min-w-[300px] max-w-[550px]  lg:w-[500px] outline-none rounded-md border-2 focus:ring-4 focus:border-primary focus:ring-primary/50 transition-all duration-300 bg-white"
                                    placeholder="Search..."
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                />
                                <HiSearch className="absolute top-[50%] text-gray-400 left-2 text-xl translate-y-[-50%] " />
                            </div>
                            <div >
                                <button className="bg-primary hidden lg:block text-white text-sm py-3 px-6 rounded-md" onClick={handleSearch}>
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" lg:w-[78%] w-[90%]  mx-auto py-[50px]">
                <div className="flex flex-wrap gap-5 items-start flex-1">
                    <div className="border border-gray-200 rounded-lg p-5 min-w-[400px] max-w-[400px]">
                        <div className="filter">
                            <h4 className="font-medium  mb-2 text-lg">
                                Filter
                                <span className="text-sm ml-1">
                                    {filtersCount > 0
                                        ? `(${filtersCount})`
                                        : ""}
                                </span>
                            </h4>
                            {shouldRenderButton && (
                                <div className="flex items-start justify-between text-sm">
                                    <ul className="flex items-center flex-wrap flex-1 gap-1">
                                        {Object.entries(filters).map(
                                            ([key, value]) =>
                                                value && (
                                                    <li
                                                        key={key}
                                                        className="bg-green-200/60 text-green-700 px-2 flex items-center rounded text-sm py-1"
                                                    >
                                                        <span>{value}</span>

                                                        <HiMiniXMark
                                                            className="text-green-700 ml-1 cursor-pointer"
                                                            onClick={() =>
                                                                handleRemoveFilter(
                                                                    key
                                                                )
                                                            }
                                                        />
                                                    </li>
                                                )
                                        )}
                                    </ul>
                                    <button
                                        className="text-green-600"
                                        onClick={clearFilters}
                                    >
                                        Clear all
                                    </button>
                                </div>
                            )}
                        </div>
                        <div className="categories w-full border-b mb-1 border-gray-200 py-4">
                            <h4 className="font-medium  mb-2 text-lg">
                                Categories
                            </h4>
                            <div>
                                {categories && (
                                    <DropdownSelect
                                        options={categories}
                                        onSelect={handleSelect}
                                        initialValue={filters.subcategory}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="categories w-full border-b border-gray-200 py-4">
                            <h4 className="font-medium  mb-2 text-lg">
                                Delivery time
                            </h4>
                            <div className="delivery__filters">
                                <RadioInput
                                    id={"option1"}
                                    label={"Within 1 day"}
                                    checked={filters.delivery === "1"}
                                    onChange={handleFieldsChange}
                                    name={"delivery"}
                                    value={"1"}
                                />
                                <RadioInput
                                    id={"option2"}
                                    label={"Within 2 days"}
                                    checked={filters.delivery === "2"}
                                    onChange={handleFieldsChange}
                                    name={"delivery"}
                                    value={"2"}
                                />
                                <RadioInput
                                    id={"option3"}
                                    label={"Within 3 days"}
                                    checked={filters.delivery === "3"}
                                    onChange={handleFieldsChange}
                                    name={"delivery"}
                                    value={"3"}
                                />
                                <RadioInput
                                    id={"option4"}
                                    label={"Within 4 days"}
                                    checked={filters.delivery === "4"}
                                    onChange={handleFieldsChange}
                                    name={"delivery"}
                                    value={"4"}
                                />
                            </div>
                        </div>
                        <div className="categories w-full border-b border-gray-200 py-4">
                            <h4 className="font-medium  mb-2 text-lg">Price</h4>
                            <div className="prices_filters">
                                <PriceRange
                                    filters={filters}
                                    setFilters={setFilters}
                                />
                            </div>
                        </div>

                    </div>
                    <div className="w-full flex-1">
                        <div className="w-full">
                            <div className="border border-gray-200 rounded-lg p-5  w-full flex-1">
                                <div className="flex items-center justify-between">
                                    <span>Showing 1-8 of 10 Results</span>
                                </div>
                                <div className="w-full">
                                    {isLoading ? (
                                        <CardPulse data={gigsData} />
                                    ) : (
                                        <>
                                            <Cards data={gigsData} />
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        {pages && (
                            <div>
                                <Pagination
                                    setCurrentPage={setCurrentPage}
                                    currentPage={currentPage}
                                    pages={pages}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;

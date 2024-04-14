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
    const [searchByTitle , setSeachByTitle] = useState
    // Filter By Subcategory
    const handleSelect = (option) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            subcategory: option.name,
        }));
    };

    const clearFilters = () => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            subcategory: "",
            delivery: "",
            maxPrice: "",
            minPrice: "",
            title: "",
        }));
    };
    // Delete Filteer Function
    const handleRemoveFilter = (filterKey) => {
        const updatedFilters = { ...filters };
        updatedFilters[filterKey] = "";
        setFilters(updatedFilters);
    };
    const handleFieldsChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const res = await getActiveGigs(currentPage, filters);
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
        if (currentPage) {
            fetchData();
            window.scrollTo({ top: 250, behavior: "smooth" });
        }
    }, [currentPage, filters]);
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
            <div className=" mx-auto w-[78%] pt-[50px]">
                <div
                    className="w-full relative   min-h-[250px] rounded-xl "
                    style={{ backgroundImage: `url(${fiterImage})` }}
                >
                    <div className="py-[70px] px-20">
                        <h1 className="text-5xl">Subcategory</h1>
                        <p className="my-1">
                            Give your visitor a smooth online experience with a
                            solid SubCategory
                        </p>
                    </div>
                </div>
            </div>
            <div className=" w-[78%]  mx-auto py-[50px]">
                <div className="flex items-start flex-1">
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
                                    name={'delivery'}
                                    value={'1'}
                                />
                                <RadioInput
                                    id={"option2"}
                                    label={"Within 2 days"}
                                    checked={filters.delivery === "2"}
                                    onChange={handleFieldsChange}
                                    name={'delivery'}
                                    value={'2'}
                                />
                                <RadioInput
                                    id={"option3"}
                                    label={"Within 3 days"}
                                    checked={filters.delivery === "3"}
                                    onChange={handleFieldsChange}
                                    name={'delivery'}
                                    value={'3'}
                                />
                                <RadioInput
                                    id={"option4"}
                                    label={"Within 4 days"}
                                    checked={filters.delivery === "4"}
                                    onChange={handleFieldsChange}
                                    name={'delivery'}
                                    value={'4'}
                                />
                            </div>
                        </div>
                        <div className="categories w-full border-b border-gray-200 py-4">
                            <h4 className="font-medium  mb-2 text-lg">
                                Price
                            </h4>
                            <div className="prices_filters">
                                <PriceRange filters={filters} setFilters={setFilters}/>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="w-full">
                            <div className="border border-gray-200 rounded-lg ml-5 p-5  w-full flex-1">
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

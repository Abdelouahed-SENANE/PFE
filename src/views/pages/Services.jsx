import React, { useEffect, useState } from "react";
import fiterImage from "@assets/images/bg-filter.jpg";
import Dropdown from "@components/select/Dropdown";
import { ListItem } from "@components/select/Dropdown";
import { HiMiniXMark } from "react-icons/hi2";
import DropdownSearch from "../../components/select/DropdownSearch";
import Cards from "../../components/ui/Cards";
import { getActiveGigs } from "../../data/gigs/GigData";
import { Link } from "react-router-dom";
import CardPulse from "../../components/ui/carousel/CardPulse";
import Pagination from "../../components/ui/Pagination";

const Services = () => {
    const [selected, setSelected] = useState("Sort by (default)");
    const [isOpen, setIsOpen] = useState(false);
    const [gigsData, setGigData] = useState([]);
    const [pages, setPages] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [filters, setFilter] = useState(["ddd", "ddd", "ddd"]);
    const data = [
        {
            id: 1,
            name: "Developpement",
        },
        {
            id: 2,
            name: "AI Services",
        },
        {
            id: 3,
            name: "Design",
        },
        {
            id: 4,
            name: "Writing",
        },
    ];
    // Delete Filteer Function
    const handleRemoveFilter = (index) => {
        const updateFilter = filters.filter((_, i) => i !== index);
        setFilter(updateFilter);
    };
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const res = await getActiveGigs(currentPage);
            setGigData(res.activeGigs);
            setPages(res.paginations);

        } catch (error) {
            console.log(error);
        } finally {
            setTimeout(() => {
                setIsLoading(false);
            }, 1500);
        }
    };
    useEffect(() => {
        fetchData();
    }, [currentPage]);
    console.log(pages);

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
                        {filters.length > 0 && (
                            <div className="filter">
                                <h4 className="font-medium  mb-2 text-lg">
                                    Filter ({filters.length})
                                </h4>
                                <div className="flex items-start justify-between text-sm">
                                    <ul className="flex items-center flex-wrap flex-1 gap-1">
                                        {filters.map((filter, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-rose-200/70 px-2 flex items-center rounded  text-sm py-1"
                                                >
                                                    <span>{filter}</span>
                                                    <HiMiniXMark
                                                        className="text-rose-600 ml-1 cursor-pointer"
                                                        onClick={() =>
                                                            handleRemoveFilter(
                                                                index
                                                            )
                                                        }
                                                    />
                                                </li>
                                            );
                                        })}
                                    </ul>
                                    <button
                                        className="text-rose-600"
                                        onClick={() => setFilter([])}
                                    >
                                        Clear all
                                    </button>
                                </div>
                            </div>
                        )}
                        <div className="categories w-full border-b border-gray-200 pb-8">
                            <h4 className="font-medium  mb-2 text-lg">
                                Categories
                            </h4>
                            <div>
                                <DropdownSearch data={data} />
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="w-full">
                            <div className="border border-gray-200 rounded-lg ml-5 p-5  w-full flex-1">
                                <div className="flex items-center justify-between">
                                    <span>Showing 1-8 of 10 Results</span>
                                    <Dropdown
                                        active={isOpen}
                                        selected={selected}
                                    >
                                        <ListItem value={""}>
                                            Sort by (default)
                                        </ListItem>
                                        <ListItem
                                            onChange={(e) =>
                                                setSelected("Recommanded")
                                            }
                                            value={"Recommanded"}
                                        >
                                            Recommanded
                                        </ListItem>
                                        <ListItem
                                            onClick={() =>
                                                setSelected("Oldest")
                                            }
                                            value={"Oldest"}
                                        >
                                            Oldest
                                        </ListItem>
                                        <ListItem
                                            onClick={() =>
                                                setSelected("Newest")
                                            }
                                            value={"Newest"}
                                        >
                                            Newest
                                        </ListItem>
                                    </Dropdown>
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

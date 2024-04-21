import React, { useEffect, useState } from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";
import GigHeader from "../../components/admin/GigHeader";
import TableGigs from "../../components/admin/TableGigs";
import Spinner from "../../components/ui/Spinner";
import Paginate from "../../components/ui/Paginate";
import { BsDatabaseX } from "react-icons/bs";
import { getPendingGigs } from "../../data/gigs/GigData";

const UserManagement = () => {
    const [gigs, setGigs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 9;
    useEffect(() => {
        setIsLoading(true);

        const getGigs = async () => {
            const response = await getPendingGigs();
            console.log(response);
            setGigs(response);
        };
        getGigs();

        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    },[]);
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentGigs = gigs.slice(indexOfFirstItem, indexOfLastItem);
    const numberOfPages = Math.ceil(gigs.length / itemPerPage);

    const prevPage = (currentPage) => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    const nextPage = (currentPage) => {
        if (currentPage < numberOfPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    if (isLoading) {
        return (
            <>
                <AdminNavbar currentPage={"Dashboard"} />
                <div className="mx-10 ">
                    <GigHeader />
                    <div className="w-full  h-[600px] flex items-center justify-center">
                        <Spinner />
                    </div>
                </div>
            </>
        );
    }
    return (
        <>
            <AdminNavbar currentPage={"Dashboard"} />
            <div className="mx-10 ">
                <GigHeader />
                {gigs.length > 0 ? (
                    <div className="bg-white border  border-gray-200 rounded-ss-lg rounded-se-lg overflow-hidden min-h-[671px]">
                        <TableGigs setIsloading={setIsLoading} gigs={currentGigs} setGigs={setGigs} />
                    </div>
                ) : (
                    <div className=" flex flex-col items-center text-gray-400 justify-center min-h-[671px]">
                        <BsDatabaseX size={160} />
                        <p className="text-xl font-light my-5 text-gray-700">We couldn't find any pending gigs at this time</p>
                    </div>
                )}

                {gigs && gigs.length > 0 && (
                    <Paginate
                        totalPage={numberOfPages}
                        currentPage={currentPage}
                        prevPage={() => prevPage(currentPage)}
                        nextPage={() => nextPage(currentPage)}
                    />
                )}
            </div>
        </>
    );
};

export default UserManagement;

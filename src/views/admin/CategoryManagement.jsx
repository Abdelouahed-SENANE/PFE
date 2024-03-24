import React, { useEffect, useState } from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";
import CreateCategory from "../../components/admin/CreateCategory";
import TableCategory from "../../components/admin/TableCategory";
import Paginate from "../../components/ui/Paginate";
import axios from "axios";
import Spinner from "../../components/ui/Spinner";
const CategoryManagement = () => {
    const [categoriesData, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage , setCurrentPage] = useState(1);
    const categoryPerPage = 10

    useEffect(() => {
        setIsLoading(true);

        const getCategories = async () => {
            const response = await axios.get(
                "https://65f89a33df151452460fc708.mockapi.io/Categories"
            );
            setCategories(response.data);
        };
        getCategories();

        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    },[]);
    const indexOfLastCategory = currentPage * categoryPerPage
    const indexOfFirstCategory = indexOfLastCategory - categoryPerPage
    const currentCategories = categoriesData.slice(indexOfFirstCategory , indexOfLastCategory)
    const numberOfPages = Math.ceil(categoriesData.length / categoryPerPage)

    const prevPage = (currentPage) => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1 )
        }
    }
    const nextPage = (currentPage) => {
        if (currentPage < numberOfPages ) {
            setCurrentPage(currentPage + 1 )

        }
    }
    return (
        <>
            <AdminNavbar />
            <div className="mx-10 ">
                <CreateCategory />
                <div className="bg-white border  border-gray-200 rounded-ss-lg rounded-se-lg overflow-hidden min-h-[671px]">
                    {isLoading ? (
                        <div className="w-full  h-[600px] flex items-center justify-center">
                            <Spinner />
                        </div>
                    ) : (
                        <TableCategory
                            categories={currentCategories}
                        />
                    )}
                </div>
                <Paginate categoryPerPage={categoryPerPage}  currentPage={currentPage} totalCategories={categoriesData.length} prevPage={() => prevPage(currentPage)} nextPage={() => nextPage(currentPage)}/>
            </div>
        </>
    );
};

export default CategoryManagement;

import React, { useEffect, useState } from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";
import CreateCategory from "../../components/admin/CreateCategory";
import TableCategory from "../../components/admin/TableCategory";
import Paginate from "../../components/ui/Paginate";
import Spinner from "../../components/ui/Spinner";
import { getAllSubCategories } from "../../data/subcategory/SubcategoryData";

const CategoryManagement = () => {
    const [subcategories, setSubcategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [formIsOpen, setFormIsOpen] = useState(false);
    const [updateId, setUpdateId] = useState(null);

    const categoryPerPage = 10;

    const fetchData = () => {
        setIsLoading(true);

        const getData = async () => {
            try {
                const subcategories = await getAllSubCategories();
                setSubcategories(subcategories);
            } catch (error) {
                console.log(error);
            } finally {
                setTimeout(() => {
                    setIsLoading(false);
                }, 1500);
            }
        };
        getData();
    };

    useEffect(() => {
        fetchData();
    }, []);

    const indexOfLastCategory = currentPage * categoryPerPage;
    const indexOfFirstCategory = indexOfLastCategory - categoryPerPage;
    const currentCategories = subcategories.slice(
        indexOfFirstCategory,
        indexOfLastCategory
    );
    const numberOfPages = Math.ceil(subcategories.length / categoryPerPage);

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
                <AdminNavbar />
                <div className="mx-10 ">
                    <CreateCategory />
                    <div className="w-full  h-[600px] flex items-center justify-center">
                        <Spinner />
                    </div>
                </div>
            </>
        );
    }
    return (
        <>
                <AdminNavbar />
                <div className="mx-10 ">
                    <CreateCategory
                        setSubcategories={setSubcategories}
                        setUpdateId={setUpdateId}
                        updateId={updateId}
                        setIsOpen={setFormIsOpen}
                        isOpen={formIsOpen}
                    />
                    <div className="bg-white border  border-gray-200 rounded-ss-lg rounded-se-lg overflow-hidden min-h-[671px]">
                        <TableCategory
                            setIsOpen={setFormIsOpen}
                            setupdateId={setUpdateId}
                            subcategories={currentCategories}
                            setSubcategory={setSubcategories}
                        />
                    </div>
                    <Paginate
                        categoryPerPage={categoryPerPage}
                        currentPage={currentPage}
                        totalPage={numberOfPages}
                        prevPage={() => prevPage(currentPage)}
                        nextPage={() => nextPage(currentPage)}
                    />
                </div>
        </>
    );
};

export default CategoryManagement;

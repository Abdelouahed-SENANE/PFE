import React, { useEffect, useState } from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";
import UsersHeader from "../../components/admin/UsersHeader";
import TableUsers from "../../components/admin/TableUsers";
import Spinner from "../../components/ui/Spinner";
import Paginate from "../../components/ui/Paginate";
import axios from "axios";

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 9;
    useEffect(() => {
        setIsLoading(true);

        const getUsers = async () => {
            const response = await axios.get(
                "https://65f89a33df151452460fc708.mockapi.io/users"
            );
            setUsers(response.data);
        };
        getUsers();

        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, []);
    const indexOfLastItem= currentPage * itemPerPage;
    const indexOfFirstItem= indexOfLastItem - itemPerPage;
    const currentUsers = users.slice(
        indexOfFirstItem,
        indexOfLastItem
    );
    const numberOfPages = Math.ceil(users.length / itemPerPage);

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
                    <UsersHeader />
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
                <UsersHeader />
                <div className="bg-white border  border-gray-200 rounded-ss-lg rounded-se-lg overflow-hidden min-h-[671px]">
                    <TableUsers users={currentUsers} />
                </div>
                <Paginate
                    totalPage={numberOfPages}
                    currentPage={currentPage}
                    prevPage={() => prevPage(currentPage)}
                    nextPage={() => nextPage(currentPage)}
                />
            </div>
        </>
    );
};

export default UserManagement;

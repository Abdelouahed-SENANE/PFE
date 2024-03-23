import React, { useEffect, useState } from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";
import CreateCategory from "../../components/admin/CreateCategory";

const CategoryManagement = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <AdminNavbar />
            <CreateCategory/>

        </>
    );
};

export default CategoryManagement;

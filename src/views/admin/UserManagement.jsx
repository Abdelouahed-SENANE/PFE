import React from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";

const UserManagement = () => {
    return (
        <>
            <AdminNavbar currentPage={"Dashboard"} />
            <div className="p-5">Users</div>
        </>
    );
};

export default UserManagement;

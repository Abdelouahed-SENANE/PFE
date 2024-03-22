import React from "react";
import AdminNavbar from "../../components/AdminNavbar";

const Dashboard = () => {
    return (
        <>
            <AdminNavbar currentPage={'Dashboard'} />
            <div className="p-5">Dashboard</div>
        </>
    );
};

export default Dashboard;

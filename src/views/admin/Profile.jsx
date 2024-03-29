import React from "react";
import "../../components/profile/profile.css";
import Sidebar from "../../components/profile/Sidebar";
import AdminNavbar from "../../components/admin/AdminNavbar";

import UpdateInformation from "../../components/profile/UpdateInformation";
import UpdatePassword from "../../components/profile/UpdatePassword";
import DeleteProfile from "../../components/profile/DeleteProfile";
const Profile = () => {
    return (
        <>
            <AdminNavbar />
            <div className="mx-[100px] overflow-x-hidden py-[50px]">
                <Sidebar />
                <div className="lg:ml-[370px] lg:w-[75%] mt-5 lg:mt-0 w-[450px]">
                    <UpdateInformation />
                    <UpdatePassword />
                    <DeleteProfile />
                </div>
            </div>
        </>
    );
};

export default Profile;

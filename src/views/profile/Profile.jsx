import React from "react";

import UpdateInformation from "../../components/profile/UpdateInformation";
import UpdatePassword from "../../components/profile/UpdatePassword";
import DeleteProfile from "../../components/profile/DeleteProfile";

const Profile = () => {
    return (
        <main className="lg:ml-[370px] w-[300px] flex-1">
            <UpdateInformation />
            <UpdatePassword />
            <DeleteProfile />
        </main>
    );
};

export default Profile;

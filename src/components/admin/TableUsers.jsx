import React from "react";
import User from "./User";

const TableCategory = ({users = []}) => {
    return (
        <>
            <table className="text-gray-700 w-full text-sm   border-gray-200">
                <thead className="bg-gray-50">
                    <tr className="p-3">
                        <th className="p-3 text-center">ID</th>
                        <th className="p-3 text-center">Picture</th>
                        <th className="p-3 text-center">Firstname</th>
                        <th className="p-3 text-center">Lastname</th>
                        <th className="p-3 text-center">Email</th>
                        <th className="p-3 text-center">Address</th>
                        <th className="p-3 text-center">Join at</th>
                        <th className="p-3  text-center sr-only">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-black  ">
                    <User users={users}/>
                </tbody>
            </table>
        </>
    );
};

export default TableCategory;

import React from "react";
import User from "./User";
import Gig from "./Gig";

const TableGigs = ({gigs = [] , setGigs , setIsloading}) => {
    return (
        <>
            <table className="text-gray-700 w-full text-sm   border-gray-200">
                <thead className="bg-gray-50">
                    <tr className="p-3">
                        <th className="p-3 text-center">ID</th>
                        <th className="p-3 text-center">Images</th>
                        <th className="p-3 text-center">Request</th>
                        <th className="p-3  text-center sr-only">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-black  ">
                    <Gig setIsloading={setIsloading} gigs={gigs} setGigs={setGigs}/>
                </tbody>
            </table>
        </>
    );
};

export default TableGigs;

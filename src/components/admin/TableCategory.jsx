import React from "react";
import Category from "./Category";

const TableCategory = ({subcategories = [] , setSubcategory ,setIsOpen , setupdateId}) => {

    return (
        <>
            <table className="text-gray-700 w-full text-sm   border-gray-200">
                <thead className="bg-gray-50">
                    <tr className="p-3">
                        <th className="p-3 text-center">ID</th>
                        <th className="p-3 text-center">Title</th>
                        <th className="p-3  text-center sr-only">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-black  ">
                    <Category setUpdateId={setupdateId} categories={subcategories} setSubcategory={setSubcategory} setIsOpen={setIsOpen}/>
                </tbody>
            </table>
        </>
    );
};

export default TableCategory;

import React from "react";
import Category from "./Category";

const TableCategory = ({categories = []}) => {
    return (
        <>
            <table className="text-gray-700 w-full text-sm  border-b border-gray-200">
                <thead className="bg-gray-50">
                    <tr className="p-3">
                        <th className="p-3 text-center">ID</th>
                        <th className="p-3 text-center">Title</th>
                        <th className="p-3 text-center">Excerpt</th>
                        <th className="p-3 text-center">Description</th>
                        <th className="p-3  text-center sr-only">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-black  ">
                    <Category categories={categories}/>
                </tbody>
            </table>
        </>
    );
};

export default TableCategory;

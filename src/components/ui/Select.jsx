import React, { useState } from "react";

const Select = (props) => {
    return (
        <>
            <select
                id=""
                value={props.selectedCategory}
                onChange={props.handleChangeCategory}
                className={`py-2 text-gray-400 flex-1 uppercase outline-none block border-2 w-full px-2 bg-white  transition-all duration-300  rounded-md
                ${
                    ""
                        ? "border-red-500 focus:border-red-500"
                        : "focus:border-slate-500"
                }
                `}
            >
                <option value="" className="py-2 block" selected>
                    Select Category
                </option>
                {props.data.categories.map((category) => {
                    return (
                        <option
                            key={category.id}
                            value={category.id}
                            className="py-2 block"
                        >
                            {category.name}
                        </option>
                    );
                })}
            </select>
            {/* ======= Subcategory ===== */}
            <select
                id=""
                onChange={props.handleChangeSubCategory}
                className={`py-2 text-gray-400 uppercase flex-1 outline-none block border-2 w-full px-2 bg-white  transition-all duration-300  rounded-md
                ${
                    ""
                        ? "border-red-500 focus:border-red-500"
                        : "focus:border-slate-500"
                }
                `}
            >
                <option value="" className="py-2 block" selected>
                    Select Subcategory
                </option>
                {props.data.subcategories
                    .filter(
                        (subcategorie) =>
                            subcategorie.category_id == props.selectedCategory
                    )
                    .map((subcategorie) => {
                        return (
                            <option
                                value={subcategorie.id}
                                className="py-2 block"
                            >
                                {subcategorie.name}
                            </option>
                        );
                    })}
            </select>
        </>
    );
};

export default Select;

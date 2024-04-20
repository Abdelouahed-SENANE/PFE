import React, { useEffect, useState } from "react";
import Input from "../ui/Input";
import { TbCategoryFilled } from "react-icons/tb";
import { getAllCategories } from "../../data/category/CategoryData";
import { getAllSubCategories, getSubcategory } from "../../data/subcategory/SubcategoryData";
import { createSubcategory, updateSubcategories } from "../../data/subcategory/SubcategoryService";
import { useMessage } from "../../hooks/MessageContext";

const FromCategory = ({updateId , setIsOpen , setSubcategories}) => {
    const [categories, setCategories] = useState([]);
    const {setMessage} = useMessage();
    const [formData , setFormData] = useState({
        category_id : '',
        name : '',
    })
    const [errors , setErros] = useState({
        category_id : '',
        name : '',
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoriesData = await getAllCategories();
                setCategories(categoriesData);
                setFormData({
                    category_id: '',
                    name: ''
                })
                if (updateId) {
                    const subcategoryData = await getSubcategory(updateId);
                    setFormData({
                        category_id: subcategoryData.category_id,
                        name: subcategoryData.name
                    });
                }

            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };
        fetchData();

    }, [updateId]);
    
    const handleChange = (e) => {
        const {name , value} = e.target
        setFormData((prevState) => ({
            ...prevState,
            [name] : value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (updateId) {
        try {
            const result = await updateSubcategories(updateId,formData);
            if (result.status === 200) {
                setFormData({
                    category_id: '',
                    name: ''
                })
                const subcategories = await getAllSubCategories();
                setSubcategories(subcategories);
                console.log(subcategories);
                setIsOpen(false);
                setMessage(result.data.message);
            }
        } catch (error) {
            if (error.response.status === 422) {
                if (error.response.data.errors.name[0]) {
                    setErros((prevState) => ({
                        ...prevState,
                        name : error.response.data.errors.name[0]
                    }))
                }
                if (error.response.data.errors.category_id[0]) {
                    setErros((prevState) => ({
                        ...prevState,
                        category_id : error.response.data.errors.category_id[0]
                    }))
                }
            }
        }
        }else{
                setErros((prevState) => ({
                    ...prevState,
                    category_id : '',
                    name : ''
                }))
            try {
                const result = await createSubcategory(formData);
                console.log(result);
                if (result.status === 201) {
                    setFormData({
                        category_id: '',
                        name: ''
                    })
                    const subcategories = await getAllSubCategories();
                    setSubcategories(subcategories);
                    setIsOpen(false);
                    setMessage(result.data.message);
                }
            } catch (error) {
                if (error.response.status === 422) {
                    if (error.response.data.errors.name[0]) {
                        setErros((prevState) => ({
                            ...prevState,
                            name : error.response.data.errors.name[0]
                        }))
                    }
                    if (error.response.data.errors.category_id[0]) {
                        setErros((prevState) => ({
                            ...prevState,
                            category_id : error.response.data.errors.category_id[0]
                        }))
                    }
                }
            }
        }
        
    };
    return (
        <form onSubmit={handleSubmit} className="w-full px-5">
            <div>
                <label htmlFor="" className="block mb-1 text-sm text-gray-700">
                    Category
                </label>
                <select
                    id=""
                    name="category_id"
                    value={formData.category_id}
                    onChange={handleChange}
                    className={`py-2 text-gray-700 block  cursor-pointer text-sm outline-none focus:ring-4 focus:ring-slate-300  border-2 w-full px-2 bg-white  transition-all duration-300  rounded-md
                ${
                    ""
                        ? "border-red-500 focus:border-red-500"
                        : "focus:border-slate-400"
                }
                `}
                >
                    <option  className="py-2 block" >
                        Select Category
                    </option>
                    {categories.length > 0 &&
                        categories.map((category, index) => {
                            return (
                                <option
                                    key={index}
                                    value={category.id}
                                    className="py-2 block"
                                >
                                    {category.name}
                                </option>
                            );
                        })}
                </select>
                {
                    errors.category_id && <span className="text-sm text-red-500">{errors.category_id}</span>
                }
            </div>
            
            <div>
            <Input
                placeholder={"Enter Subcategory"}
                name={'name'}
                value={formData.name}
                onChange={handleChange}
                icon={TbCategoryFilled}
                label={"Subcategory"}
            />
            {
                    errors.name && <span className="text-sm text-red-500">{errors.category_id}</span>
                }
            </div>
            <div className="flex justify-end my-4">
                {
                    updateId ? (<button type="submit" className=" bg-blue-500 px-7 py-2 text-white rounded-md hover:bg-blue-500/90 ">Update</button>):(<button type="submit" className=" bg-primary px-7 py-2 text-white rounded-md hover:bg-primary/90 ">Create</button>)
                }
            </div>
            
        </form>
    );
};

export default FromCategory;

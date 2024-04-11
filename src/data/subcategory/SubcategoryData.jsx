import { fetchSubcategories } from "./SubcategoryService";

export const getAllSubCategories = async () => {
    try {
        const response = await fetchSubcategories();

        return response.data.subcategories
        
    } catch (error) {
        console.log(error);
    }
}
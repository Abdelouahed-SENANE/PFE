import { fetchSubcategories, fetchSubcategory } from "./SubcategoryService";

export const getAllSubCategories = async () => {
    try {
        const response = await fetchSubcategories();
        return response.data.subcategories
        
    } catch (error) {
        console.log(error);
    }
}
export const getSubcategory = async (id) => {
    const response = await fetchSubcategory(id);
    if (response.status !== 200) {
        throw new Error('Failed network');
    }
    return response.data.subcategory

}
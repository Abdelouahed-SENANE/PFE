import instance from "@config/ConfigAxios";

export const getAllCategories = async () => {
    try {
        const response = await instance.get("/categories");

        if (response.status !== 200) {
            throw new Error("Failed to fetch categories");
        }
        return {
            'categories' : response.data.categories
        };
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error; 
    }
};


import instance from "@config/ConfigAxios";


export const fetchSubcategories = async () => {
    try {
        const response = await instance.get('/subcategories')
        if (response.status !== 200) {
            throw new Error('Failed To connect with server')
        }
        return response
    } catch (error) {
        console.log(error);
    }
}
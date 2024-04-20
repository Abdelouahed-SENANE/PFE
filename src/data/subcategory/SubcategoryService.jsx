
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

export const deleteSubcategory = async (id) => {
        const response = await instance.delete('/subcategories/'+id)
        if (response.status !== 204) {
            throw new Error('Failed To connect with server')
        }
        return response
}
export const fetchSubcategory = async (id) => {
    const response = await instance.get('/subcategory/'+id)
    if (response.status !== 200) {
        throw new Error('Failed To connect with server')
    }
    return response
}
export const createSubcategory = async (payload) => {
    const response = await instance.post('subcategories' , payload)
    return response;
}
export const updateSubcategories = async (id,payload) => {
    const response = await instance.put(`subcategory/${id}` , payload)
    return response;
}
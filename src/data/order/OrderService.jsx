import instance from "../../config/ConfigAxios"


export const createOrder = async (payload) => {
    const response = await instance.post('orders/create' , payload);
    return response;
}
import { myOrders } from "./OrderService"


export const getMyOrders = async () => {
    const response = await myOrders();
    return {
        'myOrders' : response.data.data
    }
}
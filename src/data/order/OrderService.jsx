import instance from "../../config/ConfigAxios";

export const createOrder = async (payload) => {
    const response = await instance.post("orders/create", payload);
    return response;
};

export const myOrders = async () => {
    const response = await instance.get("my-orders");
    return response;
};
export const updateStatusOrder = async (id, newStatus) => {
    const response = await instance.patch("orders/update-status/" + id, {
        status: newStatus,
    });
    return response;
};
export const canPurchase = async (id) => {
    const response = await instance.get("orders/can-purchase/" + id);
    return response;
};
export const checkOrderIsRated = async (id) => {
    const response = await instance.get("orders/check-order-rating/" + id);
    return {
        isRated: response.data.data.isRated,
    };
};

export const storeRating = async ( payload) => {
    const response = await instance.post('/ratings', payload)
    return response;
}
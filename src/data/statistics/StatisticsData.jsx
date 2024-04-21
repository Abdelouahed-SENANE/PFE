import instance from "@config/ConfigAxios";

export const getPopularGigsOnWeek = async () => {
    const response = await instance.get("popular-gigs");
    return response.data;
};
export const getSalesByDayOfWeek = async () => {
    const response = await instance.get("sales-gigs");
    return response.data;
};

export const getRecentTramsactions = async () => {
    const response = await instance.get("transactions-gigs");
    return response.data;
};
export const getTheMostSubcategoriesUsed = async () => {
    const response = await instance.get("subcategories-usage");
    return response.data;
};

export const countUsers = async () => {
    const response = await instance.get("count-users");
    return response.data;
};
export const countGigs = async () => {
    const response = await instance.get("count-gigs");
    return response.data;
};
export const countOrders = async () => {
    const response = await instance.get("count-orders");
    return response.data;
};
export const recentTransactions = async () => {
    const response = await instance.get("recent-transactions");
    return response.data.data;
};

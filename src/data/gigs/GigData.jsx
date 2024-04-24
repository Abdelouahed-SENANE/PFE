import {
    MyGigs,
    fetchActiveGig,
    fetchPendingGig,
    fetchRatingOfGig,
    oneGigOrderedByClient,
} from "./GigService";
export const getMyGigs = async () => {
    try {
        const response = await MyGigs();

        return {
            myGigs: response.data.myGigs,
        };
    } catch (error) {
        return error;
    }
};
export const getGigWithClientHasOrderOrNot = async (gig) => {
    const response = await oneGigOrderedByClient(gig);
    let data = response.data.data;
    let result = {
        gig: data,
    };
    if (data.orders && data.orders.length > 0) {
        result.order = {
            status: data.orders[0].status,
            order_id: data.orders[0].id,
            gig_id: data.orders[0].gig_id,
            client_id: data.orders[0].client_id,
        };
    }
    return result;
};

export const getActiveGigs = async (page, filters, search) => {
    try {
        const response = await fetchActiveGig(page, filters, search);
        return {
            activeGigs: response.data.data,
            paginations: response.data,
        };
    } catch (error) {
        return error;
    }
};

export const getPendingGigs = async () => {
    const response = await fetchPendingGig();
    return response.data.data;
};

export const getReviewsOfGig = async (id) => {
    const response = await fetchRatingOfGig(id);
    return response;
};

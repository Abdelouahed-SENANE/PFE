import instance from "../../config/ConfigAxios";

export const getAverageRating = async (freelancerId) => {
    const response = await instance.get("average-rating/" + freelancerId);
    return {
        average : response.data.data.averageRating,
        totalRating : response.data.data.totalRating
    }
};
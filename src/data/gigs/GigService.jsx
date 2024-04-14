import instance from "@config/ConfigAxios";

export const fetchGigs = async () => {
    try {
        const response = await instance.get("/subcategories");

        return response;
    } catch (error) {
        console.log(error);
    }
};

export const createGig = async (payload) => {
    try {
        const response = await instance.post("/gigs/create", payload, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const MyGigs = async () => {
    try {
        const response = await instance.get("/my-gigs");
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const oneGig = async (gig) => {
    try {
        const response = await instance.get(`/gigs/${gig}`);

        return response;
    } catch (error) {
        console.log(error);
    }
};

export const updateGig = async (payload, id) => {
    try {
        const apiUrl = "gigs/update/" + id;
        const response = await instance.post(apiUrl, payload, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
export const deleteGig = async (id) => {
    try {
        const response = await instance.delete("gigs/delete/" + id);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const fetchActiveGig = async (page = 1, filters) => {
    try {
        const response = await instance.get(`/active-gigs?page=${page}`, {
            params: filters
        });
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

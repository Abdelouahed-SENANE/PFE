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
    const response = await instance.post("/gigs/create", payload, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return response;
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
    const response = await instance.get(`/gigs/${gig}`);
    return response;
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

export const fetchActiveGig = async (page = 1, filters, search) => {
    try {
        const response = await instance.get(
            `/active-gigs?page=${page}&search=${search}`,
            {
                params: filters,
            }
        );
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

import { MyGigs, oneGig } from "./GigService";

export const getMyGigs = async () => {
    try {
        const response = await MyGigs();

        return {
            'myGigs' : response.data.myGigs
        }
    } catch (error) {
        return error;
    }
};
 export const getGig = async (gig) => {
    try {
        const response = await oneGig(gig);

        return {
            'gig' : response.data.gig.original
        }
    } catch (error) {
        return error;
    }
 }
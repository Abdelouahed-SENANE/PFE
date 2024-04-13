import { MyGigs, fetchActiveGig, oneGig } from "./GigService";
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

 export const getActiveGigs = async(page) => {
    try {
        const response = await fetchActiveGig(page);
        console.log(response);
        return {
            'activeGigs' : response.data.data,
            'paginations' : response.data
        }
    } catch (error) {
        return error;
    }    
 }
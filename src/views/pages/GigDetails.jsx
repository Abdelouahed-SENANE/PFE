import React, { useEffect, useState } from "react";
import SidebarContent from "../../components/serviceDetails/SidebarContent";
import MainContent from "../../components/serviceDetails/MainContent";
import { useParams } from "react-router-dom";
import { getGig } from "../../data/gigs/GigData";
import Spinner from '@components/ui/Spinner'

const GigDetails = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [errorFetch, setErrFetch] = useState(null);
    const [gig, setGig] = useState({});
    const { id } = useParams();

    const fetchGig = async () => {
        try {
            const resultat = await getGig(id);
            setGig(resultat.gig)
            console.log(resultat.gig);
        } catch (error) {
            setErrFetch("An error occured while fetching the data");
            console.error(error);
        } finally {
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        }
    };

    useEffect(() => {
        fetchGig();
    }, []);
    return isLoading ? (
        <div className="min-h-[90vh] w-full flex items-center justify-center">
          <Spinner />
        </div>
    ) : errorFetch ? (
        <div className="text-xl">{errorFetch}</div>
    ) : gig ? (
        <div className="container w-[70%] mx-auto">
            <div className="flex items-start my-6 p-8">
                <MainContent gig={gig}/>
                <SidebarContent gig={gig}/>
            </div>
        </div>
    ) : (
        <div>Data does not exist</div>
    );
};

export default GigDetails;

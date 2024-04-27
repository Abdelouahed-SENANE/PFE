import React, { useEffect, useState } from "react";
import SidebarContent from "../../components/serviceDetails/SidebarContent";
import MainContent from "../../components/serviceDetails/MainContent";
import { useParams } from "react-router-dom";
import Spinner from "@components/ui/Spinner";
import { canPurchase } from "../../data/order/OrderService";
import { getGigWithClientHasOrderOrNot } from "../../data/gigs/GigData";
const GigDetails = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [errorFetch, setErrFetch] = useState(null);
    const [isPurchase, setIsPurchase] = useState(true);
    const [gig, setGig] = useState({});
    const { id } = useParams();

    const fetchGig = async () => {
        try {
            const resultat = await getGigWithClientHasOrderOrNot(id);
            setGig(resultat.gig);
        } catch (error) {
            setErrFetch("An error occurred while fetching gig data");
            console.error(error);
        } finally {
            setTimeout(() => {
                setIsLoading(false);
            }, 4000);
        }
    };
    const canPuchaseThisGig = async () => {
        try {
            const response = await canPurchase(id);
            setIsPurchase(response.canPurchase);
        } catch (error) {
            console.log(error);
        } finally {
            setTimeout(() => {
                setIsLoading(false);
            }, 4000);
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                await fetchGig();
                await canPuchaseThisGig();
            } catch (error) {
                setErrFetch("An error occurred while fetching the data");
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return isLoading ? (
        <div className="min-h-[90vh] w-full flex items-center justify-center">
            <Spinner />
        </div>
    ) : errorFetch ? (
        <div className="text-xl">{errorFetch}</div>
    ) : gig ? (
        <div className=" lg:w-[70%] w-full mx-auto">
            <div className=" flex flex-col-reverse lg:flex-row flex-wrap gap-6 items-start w-full justify-between my-6 p-8">
                <div className="w-full max-w-[750px]">
                    <MainContent gig={gig} />
                </div>
                <div>
                    <SidebarContent gig={gig} isPurchase={isPurchase} />
                </div>
            </div>
        </div>
    ) : (
        <div>Data does not exist</div>
    );
};

export default GigDetails;

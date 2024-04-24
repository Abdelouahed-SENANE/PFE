import React, { useEffect, useState } from "react";
import SidebarContent from "../../components/serviceDetails/SidebarContent";
import MainContent from "../../components/serviceDetails/MainContent";
import { useParams } from "react-router-dom";
import Spinner from "@components/ui/Spinner";
import { canPurchase } from "../../data/order/OrderService";
import { getGigWithClientHasOrderOrNot } from "../../data/gigs/GigData";
const GigDetails = React.memo(() => {
    const [isLoading, setIsLoading] = useState(true);
    const [errorFetch, setErrFetch] = useState(null);
    const [isPurchase, setIsPurchase] = useState(true);
    const [gig, setGig] = useState({});
    const [order, setOrder] = useState({});
    const { id } = useParams();

    const fetchGig = async () => {
        try {
        const resultat = await getGigWithClientHasOrderOrNot(id);
            setGig(resultat.gig);
            setOrder(resultat.order);
    } catch (error) {
        setErrFetch("An error occurred while fetching gig data");
        console.error(error);
    } finally {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);    }
    };
    const canPuchaseThisGig = async () => {
        try {
            await canPurchase(id);
        } catch (error) {
            if (error.response.status === 400) {
                setIsPurchase(false)
            }
        } finally {
            setTimeout(() => {
                setIsLoading(false);
            }, 5000);
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
        <div className="container w-[70%] mx-auto">
            <div className="flex items-start my-6 p-8">
                <MainContent gig={gig} order={order} />
                <SidebarContent gig={gig} isPurchase={isPurchase}/>
            </div>
        </div>
    ) : (
        <div>Data does not exist</div>
    );
});

export default GigDetails;

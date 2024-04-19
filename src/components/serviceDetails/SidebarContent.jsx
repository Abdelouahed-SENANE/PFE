import React, { useState } from "react";
import instance from "../../config/ConfigAxios";
import DateFormatted from "../../helpers/DateFormatted";
import formatDateTime from "../../helpers/DateFormatted";
import LoadingButton from "../ui/loadinButton/LoadingButton";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext";
import { useStripe } from '@stripe/react-stripe-js';

const SidebarContent = ({ gig }) => {
    const { user, token } = useAuth();
    const stripe = useStripe();
    const deliveryTime = Date.now() + gig.delivery * 24 * 60 * 60 * 1000;
    const [isLoading, setIsLoading] = useState(null);
    const order = {
        gig_id: gig.id,
        received_at: formatDateTime(new Date(deliveryTime)),
        amount : gig.price,
        currency : 'usd',
        gig_name : gig.title
    };

    const handlePayment = async () => {
        try {
            setIsLoading(true);

            const { data } = await instance.post('/create-checkout-session', 
                order
            );

            const sessionId = data.sessionId;
            setTimeout(() => {
                redirectToStripeCheckout(sessionId);
            }, 1200);
        } catch (error) {
            console.error('Error:', error);
            setIsLoading(false); 
        }
    };
    const redirectToStripeCheckout = async (sessionId) => {
        try {
            const { error } = await stripe.redirectToCheckout({
                sessionId,
            });

            if (error) {
                console.error('Stripe Checkout Error:', error);
                setIsLoading(false);
            }
        } catch (error) {
            console.error('Error redirecting to Stripe Checkout:', error);
            setIsLoading(false);
        }
    };

    return (
        <div className="min-w-[390px] border overflow-hidden border-gray-300 rounded-md shadow shadow-slate-100">
            <h4 className="py-3 text-center border-b border-gray-200  text-primary font-medium  text-xl font">
                Puchase
            </h4>
            <div className="pt-5">
                <div className="px-6 border-b mb-2 pb-2 border-slate-200">
                    <h2 className="text-xl font-medium mb-2 ">{gig.title}</h2>
                    <div className="flex items-center mb-1 justify-between">
                        <div className="text-sm">Price:</div>
                        <div>{gig.price}</div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="text-sm">Delivery:</div>
                        <div>
                            {gig.delivery > 1
                                ? `${gig.delivery} days`
                                : `${gig.delivery} days`}
                        </div>
                    </div>
                </div>
                <div className="w-full px-6 pb-4 overflow-hidden">
                    {user?.role === "client" ? (
                        <button
                            onClick={handlePayment} disabled={isLoading}
                            className="block my-1 rounded-md bg-primary w-full py-2 text-white"
                        >
                            {isLoading ? (
                                <LoadingButton text={"Loading..."} />
                            ) : (
                                "Continue"
                            )}
                        </button>
                    ) : (
                        <Link
                            to={"/login"}
                            className="block my-1 rounded-md bg-primary text-center w-full py-2 text-white"
                        >
                            Continue
                        </Link>
                    )}
                    <button className="block my-1 rounded-md border-2 border-primary w-full py-2 text-primary">
                        Contact Me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SidebarContent;

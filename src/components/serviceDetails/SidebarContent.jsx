import React, { useState } from "react";
import instance from "../../config/ConfigAxios";
import formatDateTime from "../../helpers/DateFormatted";
import LoadingButton from "../ui/loadinButton/LoadingButton";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext";
import { useStripe } from "@stripe/react-stripe-js";
import { GiRecycle } from "react-icons/gi";
import { truncate } from "../../utils/truncate";
const SidebarContent = ({ gig, isPurchase }) => {
    const { user } = useAuth();
    const stripe = useStripe();
    const deliveryTime = Date.now() + gig.delivery * 24 * 60 * 60 * 1000;
    const [isLoading, setIsLoading] = useState(null);
    const order = {
        gig_id: gig.id,
        received_at: formatDateTime(new Date(deliveryTime)),
        amount: gig.price,
        currency: "usd",
        gig_name: gig.title,
    };
    const handlePayment = async () => {
        try {
            setIsLoading(true);

            const { data } = await instance.post(
                "/create-checkout-session",
                order
            );

            const sessionId = data.sessionId;
            setTimeout(() => {
                redirectToStripeCheckout(sessionId);
            }, 1200);
        } catch (error) {
            console.error("Error:", error);
            setIsLoading(false);
        }
    };
    const redirectToStripeCheckout = async (sessionId) => {
        try {
            const { error } = await stripe.redirectToCheckout({
                sessionId,
            });

            if (error) {
                console.error("Stripe Checkout Error:", error);
                setIsLoading(false);
            }
        } catch (error) {
            console.error("Error redirecting to Stripe Checkout:", error);
            setIsLoading(false);
        }
    };

    return (
        <div className="min-w-[420px]  border overflow-hidden p-5 border-gray-200 rounded-md shadow shadow-slate-100">
            <div >
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-light mb-2 ">{gig.title}</h2>
                    <span className="text-3xl font-light">${gig.price}</span>
                </div>
                <div>
                    <p className="text-gray-500  text-pretty font-light  my-2">{truncate(gig.excerpt , 97)}</p>
                </div>
                <div className="flex items-center gap-2">
                    <GiRecycle size={20} />
                    <span>delivery</span>
                    {gig.delivery > 1
                        ? `${gig.delivery} days`
                        : `${gig.delivery} day`}
                </div>
                <div className="w-full  overflow-hidden">
                    {user?.role === "client" ? (
                        isPurchase && (
                            <button
                                onClick={handlePayment}
                                disabled={isLoading}
                                className="block mt-5 rounded-sm bg-primary w-full py-2 text-white"
                            >
                                {isLoading ? (
                                    <LoadingButton text={"Loading..."} />
                                ) : (
                                    "Continue"
                                )}
                            </button>
                        )
                    ) : (
                        <Link
                            to={"/login"}
                            className="block my-1 rounded-md bg-primary text-center w-full py-2 text-white"
                        >
                            Continue
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SidebarContent;

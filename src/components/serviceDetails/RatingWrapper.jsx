import React, { useEffect, useState, lazy, Suspense } from "react";
// import Rating from "./Rate";
// import FormRating from "./FormRating";
import test from "@assets/images/test.jpg";
import { checkOrderIsRated, storeRating } from "../../data/order/OrderService";

// Lazy load Rating component
const Rating = lazy(() => import("./Rate"));
// Lazy load FormRating component
const FormRating = lazy(() => import("./FormRating"));

const RatingWrapper = ({ order }) => {
    const [rate, setRate] = useState(0);
    const [feedback, setFeedback] = useState(null);
    const [isRating, setIsRating] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setErr] = useState(null);
    useEffect(() => {
        const fetchIsOrderIsRated = async () => {
            try {
                const result = await checkOrderIsRated(order.order_id);
                setIsRating(result.isRated);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                console.log(error);
            }
        };

        if (order && order.status === "COMPLETED") {
            fetchIsOrderIsRated();
        } else {
            setIsLoading(false);
        }
    }, [order]);
    const handleClick = async (e) => {
        e.preventDefault();
        if (!rate || !feedback) {
            setErr("Please all fields is required!");
        } else {
            setErr("");
            const formData = {
                order_id: order.order_id,
                value: rate,
                comment: feedback,
            };
            try {
                const response = await storeRating(formData);
                console.log(response);
            } catch (error) {
                if (error.response.data.errors) {
                    setErr(error.response.data.errors[0]);
                }
                console.log(error);
            }
        }
    };
    if (!order || order.status !== "COMPLETED" || isRating || isLoading) {
        return null;
    }
    return (
        <>
            {order && order.status === "COMPLETED" && !isRating && (
                <div className="border-t py-4 gap-3 flex items-start">
                    <div>
                        <img
                            src={test}
                            alt=""
                            className="h-12 w-12 rounded-full"
                        />
                    </div>
                    <div className="flex-1">
                        <Suspense fallback={<div>Loading Rating...</div>}>
                            <Rating rate={rate} setRate={setRate} />
                        </Suspense>
                        {/* Wrap lazy-loaded FormRating component with Suspense */}
                        <Suspense fallback={<div>Loading FormRating...</div>}>
                            <FormRating setFeedback={setFeedback} />
                        </Suspense>
                        {error && (
                            <div className="bg-red-50 text-sm text-red-500 p-2 rounded-md">
                                <span>{error}</span>
                            </div>
                        )}
                        <button
                            onClick={handleClick}
                            className="px-8  rounded-md  my-2 text-white py-2 bg-primary"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default RatingWrapper;

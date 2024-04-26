import React, { useEffect, useState, lazy, Suspense } from "react";
// import Rating from "./Rate";
// import FormRating from "./FormRating";
import test from "@assets/images/test.jpg";
import { storeRating } from "../../data/order/OrderService";
import { checkOrderIsRated } from "../../data/order/OrderService";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext";
import { getReviewsOfGig } from "../../data/gigs/GigData";

// Lazy load Rating component
const Rating = lazy(() => import("./Rate"));
// Lazy load FormRating component
const FormRating = lazy(() => import("./FormRating"));

const RatingWrapper = ({setRatings }) => {
    const { id } = useParams();
    const { user } = useAuth();
    const [rate, setRate] = useState(0);
    const [feedback, setFeedback] = useState(null);
    const [isRating, setIsRating] = useState(null);
    const [orderId, setOrderId] = useState(null);
    const [error, setErr] = useState(null);

    const fetchRatings = async () => {
        try {
            const result = await getReviewsOfGig(id);
            console.log(result);
            setRatings(result.ratings);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        const fetchIsOrderIsRated = async () => {
            try {
                const result = await checkOrderIsRated(id);
                setIsRating(result.canRating);
                setOrderId(result.order_id);
            } catch (error) {
                console.log(error);
            }
        };
        fetchIsOrderIsRated();
    }, [isRating]);
    const handleClick = async (e) => {
        e.preventDefault();
        if (!rate || !feedback) {
            setErr("Please all fields is required!");
        } else {
            setErr("");
            const formData = {
                order_id: orderId,
                value: rate,
                comment: feedback,
            };
            try {
                const response = await storeRating(formData);
                if (response.status === 201) {
                    setIsRating(false);
                    fetchRatings()
                }
            } catch (error) {
                if (error.response.data.errors) {
                    setErr(error.response.data.errors[0]);
                }
                console.log(error);
            }
        }
    };
    return (
        <>
            {isRating && (
                <div className="border-t py-4 gap-3 flex items-start">
                    <div>
                        <img
                            src={'http://localhost:8000/storage/avatars/'+user.picture}
                            alt=""
                            className="h-12 w-12 rounded-full"
                        />
                    </div>
                    <div className="flex-1">
                            <Rating rate={rate} setRate={setRate} />

                            <FormRating setFeedback={setFeedback} />
                        {error && (
                            <div className="bg-red-50 text-sm text-red-500 p-2 rounded-md">
                                <span>{error}</span>
                            </div>
                        )}
                        <button
                            onClick={handleClick}
                            className="px-4 rounded-md  my-2 text-white py-1 bg-primary"
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

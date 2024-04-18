import React, { useState } from "react";
import instance from "../../config/ConfigAxios";
import DateFormatted from '../../helpers/DateFormatted'
import formatDateTime from "../../helpers/DateFormatted";
import { createOrder } from "../../data/order/OrderService";
import LoadingButton from "../ui/loadinButton/LoadingButton";
import {useNavigate} from 'react-router-dom';

const SidebarContent = ({ gig }) => {
    const deliveryTime = Date.now() + gig.delivery * 24 * 60 * 60 * 1000;
    const [isLoading , setIsLoading] = useState(null)
    const navigate = useNavigate();

    const handleClick = async () => {
        setIsLoading(true);

        const order = {
            gig_id: gig.id,
            received_at: formatDateTime(new Date(deliveryTime))
        };

        try {
            const result = await createOrder(order);
           if (result.status === 200) {
            setTimeout(() => {
                setIsLoading(false); 
                navigate('/services'); 
            }, 1200);
           }

        } catch (error) {
            console.error('Error:', error);
            setIsLoading(false); // Turn off loading state on error
        }
    }
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
                    <button onClick={handleClick} className="block my-1 rounded-md bg-primary w-full py-2 text-white">
                        {isLoading ? <LoadingButton text={'Loading...'}/>  : 'Continue'}
                    </button>
                    <button className="block my-1 rounded-md border-2 border-primary w-full py-2 text-primary">
                        Contact Me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SidebarContent;

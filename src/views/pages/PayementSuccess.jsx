import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import instance from '../../config/ConfigAxios';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
const PaymentSuccess = () => {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const sessionId = searchParams.get('session_id');
        if (sessionId) {
            instance.put('/payment-success', { session_id: sessionId })
                .then(response => {
                    console.log('Payment success:', response.data);
                })
                .catch(error => {
                    console.error('Payment error:', error);
                });
        }
    }, [location.search]);
    setTimeout(() => {
        navigate('/services');
    }, 5000);
    return (
        <div className='h-screen text-green-400 w-full flex flex-col items-center justify-center '>
            <div>
                <IoIosCheckmarkCircleOutline size={200} />
            </div>
            <h1 className='text-4xl'>Payment Successful!</h1>
            <p className='text-gray-600 text-xl my-2 font-light'>Please wait a moment we redirect to home page</p>
            <div className='my-4'>
            <span class="loader_payment"></span>
            </div>
        </div>
    );
};

export default PaymentSuccess;

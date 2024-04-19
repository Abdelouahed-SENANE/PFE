import { AuthProvider } from "./hooks/AuthContext";
import Routes from "./routes/Router";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import Router from "./routes/Router";
import { RouterProvider } from "react-router-dom";
const stripePromise = loadStripe('pk_test_51P6qrsRo59bigYbnkI6D5LVHhK8BB4Vzughaw7Zq2L5Db8kRPyabPkvEsptyY4QeMfQPkEn2RNn17U04TLHOszNf00EcHkKUv0');
function App() {
    return (
        <>
            <AuthProvider>
                <Elements stripe={stripePromise}>
                    <Routes />
                </Elements>
            </AuthProvider>
        </>
    );
}

export default App;

import { AuthProvider } from "./hooks/AuthContext";
import Routes from "./routes/Router";
import Router from "./routes/Router";
import { RouterProvider } from "react-router-dom";
function App() {
    return (
        <>
            <AuthProvider>
                <Routes/>
            </AuthProvider>
        </>
    );
}

export default App;

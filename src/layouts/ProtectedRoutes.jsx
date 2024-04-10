import React from 'react'
import { Outlet , Navigate} from "react-router-dom";
import { useAuth } from '../hooks/AuthContext';

const ProtectedRoutes = () => {
    const {token} = useAuth();
    if (!token) {
        return <Navigate to={'/login'}/>
    }
  return <Outlet/>
}

export default ProtectedRoutes
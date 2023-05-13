import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { AuthContext } from '../Components/Provider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    console.log(location);

    if (loading) {
        return <Spinner animation="border" variant="primary" />
    }

    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace={true} ></Navigate>
};

export default PrivateRoute;
import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user, loading } = use(AuthContext)

    if (loading) {

        return <div className='flex items-center justify-center min-h-screen'>
            <span class="loading loading-spinner text-neutral"></span>
        </div>

    }
    if (user && user?.email) {
        return children;
    }
    return <Navigate to='/auth/login'></Navigate>
};

export default PrivateRoute;
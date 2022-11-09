import React, { Children, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PriveteRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()

        if(loading){
            return <div className='text-3xl'> Loading....</div>
        }
        if(user){
            return children;
        }

    return <Navigate to='/login' state={{from:location}} replace ></Navigate>
};

export default PriveteRoutes;
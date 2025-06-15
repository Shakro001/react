


import React from 'react'

import useAuthStore from '../store/authSlice'
import { Navigate, useLocation } from 'react-router-dom'

function AuthGuard({children}) {
    
    const authStatus = useAuthStore((state) => state.auth)

    const location = useLocation()


    if(authStatus){
        console.log('auth status >>>', authStatus)
        return children;
    }else{
        console.log('auth status >>>', authStatus)
        return <Navigate to={'/'} state={{path: location}} replace />

    }

}

export default AuthGuard

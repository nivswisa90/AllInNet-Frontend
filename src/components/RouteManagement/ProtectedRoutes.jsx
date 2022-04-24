import React from 'react'

import {Navigate, Outlet} from 'react-router-dom'

const useAuth = () => {
    const token = localStorage.getItem('token')
    return !!token
}


const ProtectedRoutes = () => {
    const auth = useAuth()

    return auth ? <Outlet/> : <Navigate to="/login"/>
}


export default ProtectedRoutes
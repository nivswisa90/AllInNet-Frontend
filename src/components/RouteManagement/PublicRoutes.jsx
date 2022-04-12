import React from 'react'

import { Navigate, Outlet } from 'react-router-dom'

const useAuth = () => {
    const token = localStorage.getItem('token')
    return !!token
}

const PublicRoutes = () => {
    const auth = useAuth()

    return auth ? <Navigate to="/main" /> : <Outlet />
}

export default PublicRoutes
import React from 'react'

import {Navigate, Outlet} from 'react-router-dom'

const useAuth = () => {
    let user;

    const token = localStorage.getItem('user')

    if (token) {
        user = JSON.parse(token)
    }

    if (user) {
        return {
            auth: true,
            role: user.role
        }
    } else {
        return {
            auth: false,
            role: null
        }
    }
}


const ProtectedRoutes = (props) => {
    const {auth, role} = useAuth()

    if (props.roleRequired) {
        return auth ? (
            props.roleRequired === role ? (
                <Outlet/>
            ) : (
                <Navigate to="/denied"/>
            )
        ) : (
            <Navigate to="/login"/>
        )
    } else {
        return auth ? <Outlet/> : <Navigate to="/login"/>
    }
}

export default ProtectedRoutes
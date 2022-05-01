import {Outlet} from 'react-router-dom'
import React, {useEffect, useState} from "react";
import axios from "../../axios";

const InnerContent = () => {
    const [user, setUser] = useState('')

    useEffect(() => {
        axios.get('/api/login/users/', {
            headers: {
                "Content-type": "application/json",
                "x-access-token": localStorage.getItem('token')
            }
        }).then(user => {
            setUser(user.data)
        })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='inner-content'>
            <Outlet context={[user]}/>
        </div>
    )
}

export default InnerContent;
import React from 'react'
import {toast, ToastContainer} from "react-toastify";

const Error = (props) =>{
    return (
        // toast.error(props.msg, {
        //     position: "top-center",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: 0,
        // })

        <div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />{props.msg}</div>
    )
}
export default Error

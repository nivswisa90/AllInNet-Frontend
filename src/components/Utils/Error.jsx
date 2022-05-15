import React from 'react'
import { ToastContainer} from "react-toastify";

const Error = (props) =>{
    return (


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
            />{props.msg}
        </div>
    )
}
export default Error

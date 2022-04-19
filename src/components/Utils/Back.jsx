import React from 'react'
import {MdArrowBackIos} from 'react-icons/md'
import {Link} from "react-router-dom";

const Back = () =>{
    return (
        <Link to={'/main'}>
         <p>
             <MdArrowBackIos/> Back
         </p>
        </Link>

 )
}
export default Back
import React from 'react'
import {MdArrowBackIos} from 'react-icons/md'
import {Link} from "react-router-dom";

const Back = () =>{
    return (
        <Link to={'/main'}>
         <span>
             <MdArrowBackIos/> Back
         </span>
        </Link>

 )
}
export default Back
import React,{useState} from 'react'
import SignIn from '../components/Signin/signinCom';
import Navbar from '../components/NavBar'
import Sidebar from '../components/SideBar'

const SigninPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggle = () => { 
    setIsOpen(!isOpen);
  };
  return (
    <div>
        <Sidebar isOpen={isOpen} toggle = {toggle} />
        <Navbar toggle={toggle}/>
        <SignIn/>
    </div>
  )
}

export default SigninPage;
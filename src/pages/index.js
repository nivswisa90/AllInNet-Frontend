import React, {useState} from 'react'
import BackHomeSection from '../components/BackHome/backHome'
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from '../components/MainSection/Data'
import MainSection from '../components/MainSection/mainSection'
import Navbar from '../components/NavBar'
import Sidebar from '../components/SideBar'
import Footer from '../components/Footer/footer'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggle = () => { 
    setIsOpen(!isOpen);
  };

  //const[image,setImage] = useState(false);

  return (
    <>
        <Sidebar isOpen={isOpen} toggle = {toggle} />
        <Navbar toggle={toggle} />
        <BackHomeSection/>
        <MainSection {...homeObjOne}/>
        <MainSection {...homeObjTwo}/>
        <MainSection {...homeObjThree}/>
        <MainSection {...homeObjFour}/>
        <Footer/>

    </>
  )
}

export default Home
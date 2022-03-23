import React, {useState} from 'react'
import TrainingProg from '../components/TrainingProgram/TrainingProg'
import Navbar from '../components/NavBar/index';
import Sidebar from '../components/SideBar/index';
import { Container}  from '../components/TrainingProgram/TrainingProgElements';
const SystemProgram = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggle = () => { 
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Container>
        <Navbar toggle = {toggle}/>
        <Sidebar isOpen={isOpen} toggle = {toggle}/>
        <TrainingProg/>
      </Container>
    </>
  )
}

export default SystemProgram
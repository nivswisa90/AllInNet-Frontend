import React, {useState} from 'react'
import Sidebar from '../components/SideBar';
import { Container } from '../components/Signin/SigninElements';
import TrainingResult from '../components/TrainingResult/TrainingResult';
import Navbar from '../components/NavBar';

const DisplayTrainingResult = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggle = () => { 
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Container>
          <Navbar toggle = {toggle}/>
          <Sidebar isOpen={isOpen} toggle = {toggle}/>
          <TrainingResult/>
      </Container>
    </div>
  )
}


export default DisplayTrainingResult;


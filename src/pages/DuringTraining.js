import React, {useState} from 'react'
import Navbar from '../components/NavBar'
import Sidebar from '../components/SideBar'
import { Container}  from '../components/TrainingProgram/TrainingProgElements';
import StopTraining from '../components/TrainingProgram/StopTraining'
const DuringTraining = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggle = () => { 
    setIsOpen(!isOpen);
  };
  return (
    <div>
        <Container>
        <Sidebar isOpen={isOpen} toggle = {toggle} />
        <Navbar toggle={toggle}/>
            <StopTraining/>
        </Container>
        
    </div>
  )
}

export default DuringTraining
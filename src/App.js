import React, {useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./components/SignIn/SignIn";
import TrainingResult from './components/TrainingResult/TrainingResult';
import StopTraining from "./components/TrainingProgram/StopTraining";
import Navbar from "./components/NavBar";
import Sidebar from "./components/SideBar";
import {Container} from './components/TrainingProgram/TrainingProgElements';
import TrainingProg from './components/TrainingProgram/TrainingProg'
// import Footer from "./components/Footer/footer";
const App =() =>{
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <Router>
            <Container>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/trainingResult" component={TrainingResult} exact/>
                <Route path="/signIn" component={SignIn} exact/>
                <Route path="/systemTrainingProgram" component={TrainingProg} exact/>
                <Route path="/duringTraining" component={StopTraining} exact/>
            </Switch>
            
            </Container>
        </Router>
    );
}

export default App;

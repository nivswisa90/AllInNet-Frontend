import { Route, Routes } from "react-router-dom";
import Login from "../components/Login/login";
import TrainingPrograms from '../components/trainingPrograms'
import TrainingResults from '../components/TrainingResults'
import MainPage from "../components/MainPage";




const setToken = (userToken) => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
}
const ReactRouter = () => {
    const token = getToken();

    return (
        <Routes>
            <Route exact path="/login" element={<Login setToken={setToken} />} />
            <Route path='/' element={<MainPage/>}/>
            <Route path='/results' element={<TrainingResults/>}/>
            <Route path="/programs" element={<TrainingPrograms />} />
        </Routes>
    );
};
export default ReactRouter;

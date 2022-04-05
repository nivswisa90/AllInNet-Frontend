import { Route, Routes } from "react-router-dom";
import Login from "../components/login";
import TrainingPrograms from '../components/trainingPrograms'



function setToken(userToken) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
}
const ReactRouter = () => {
    const token = getToken();

    return (
        <Routes>
            <Route exact path="/login" element={<Login setToken={{setToken}} />} />
            <Route path="/programs" element={<TrainingPrograms />} />
        </Routes>
    );
};
export default ReactRouter;

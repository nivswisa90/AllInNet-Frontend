import {Navigate, Route, Routes} from "react-router-dom";

import TrainingPrograms from '../components/Programs/trainingPrograms'
import MainPage from "../components/MainPage";
import ProtectedRoutes from "../components/RouteManagement/ProtectedRoutes";
import PublicRoutes from "../components/RouteManagement/PublicRoutes";
import InnerContent from "../components/RouteManagement/InnerContent";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import BuildTrainingProgram from "../components/Coach/BuildTraining/BuildTrainingProgram";
import CoachPlayersResults from "../components/Coach/TeamPlayers/CoachPlayersResults";
import ResultReport from "../components/Results/Report/ResultReport";
import HistoryReport from "../components/Results/Analysis/HistoryReport";

const ReactRouter = () => (
    <Routes>
        <Route path="/" element={<ProtectedRoutes/>}>
            <Route path="/" element={<InnerContent/>}>
                <Route path='/' element={<Navigate replace to='main'/>}/>
                <Route path="/main" element={<MainPage/>}/>
                <Route path='/results' element={<CoachPlayersResults/>}/>
                <Route path='/report' element={<ResultReport/>}/>
                <Route path="/programs" element={<TrainingPrograms/>}/>
                <Route path="/buildtraining" element={<BuildTrainingProgram/>}/>
                <Route path='/analysis' element={<HistoryReport/>}/>
            </Route>
        </Route>

        <Route path="/" element={<PublicRoutes/>}>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Route>
    </Routes>
);
export default ReactRouter;

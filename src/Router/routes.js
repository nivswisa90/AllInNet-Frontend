import {Navigate, Route, Routes} from "react-router-dom";
// import Login from "../components/Login/login";
import TrainingPrograms from '../components/Programs/trainingPrograms'
import TrainingResults from '../components/Results/TrainingResults'
import MainPage from "../components/MainPage";
import ProtectedRoutes from "../components/RouteManagement/ProtectedRoutes";
import PublicRoutes from "../components/RouteManagement/PublicRoutes";
import InnerContent from "../components/RouteManagement/InnerContent";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ResultReport from "../components/Results/ResultReport";
import CoachView from "../components/CoachView";

const ReactRouter = () => (
    <Routes>
        <Route path="/" element={<ProtectedRoutes/>}>
            <Route path="/" element={<InnerContent/>}>
                <Route path='/' element={<Navigate replace to='main'/>}/>
                <Route path="main" element={<MainPage/>}/>
                <Route path='/results' element={<TrainingResults/>}/>
                <Route path='/report' element={<ResultReport/>}/>
                <Route path="/programs" element={<TrainingPrograms />} />
                <Route path="/coach" element={<CoachView/>}/>
            </Route>
        </Route>

        <Route path="/" element={<PublicRoutes/>}>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            {/*<Route path="/login" element={<Login />} />*/}
        </Route>
        {/*<Route path="login" element={<PublicRoutes />}>*/}
        {/*    <Route path="/login" element={<Login />} />*/}
        {/*</Route>*/}
    </Routes>
);
export default ReactRouter;

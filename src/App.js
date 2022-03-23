import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import SystemProgram from "./pages/systemProgram";
import SigninPage from "./pages/signin";
import TrainingResult from "./pages/trainingResult";
import DuringTraining from "./pages/DuringTraining";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/trainingResult" component={TrainingResult} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/systemTrainingProgram" component={SystemProgram} exact />
        <Route path="/duringTraining" component={DuringTraining} exact />

      </Switch>
    </Router>
  );
}

export default App;

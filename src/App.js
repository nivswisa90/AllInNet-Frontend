import React from "react";
import ReactRouter from "./Router/routes";
import Container from "@mui/material/Container";

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

import "./App.css";

const App = () => {
  return (
    <Container className="App">
      <ErrorBoundary>
        <ReactRouter />
      </ErrorBoundary>
    </Container>
  );
}

export default App;

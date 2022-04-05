import React from 'react';
import './App.css';
import ReactRouter from "./Router/routes";
import "@fontsource/roboto/400.css";
import Container from "@mui/material/Container";

function App() {
    return (
        <Container >
            <ReactRouter/>
        </Container>
    );
}

export default App;

import React from 'react';
import './App.css';
import ReactRouter from "./Router/routes";
import Container from "@mui/material/Container";


function App() {
    return (
        <Container className='App'>
            <ReactRouter/>
        </Container>
    );
}

export default App;

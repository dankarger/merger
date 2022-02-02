import React from "react";
import './App.css';
import HomePage from "./pages/HomePage";
import WorkSpace from "./pages/WorkSpace";
import myApi from './api/Api';
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

  return (
    <div className="App">
        <NavBar />
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<HomePage />} />
                <Route path='/work' exact element={<WorkSpace />} />

            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;

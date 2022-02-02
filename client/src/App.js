import React from "react";
import './App.css';
import HomePage from "./pages/HomePage";
import myApi from './api/Api';
import NavBar from "./components/NavBar/NavBar";

function App() {

  return (
    <div className="App">
        <NavBar />
        <HomePage />
    </div>
  );
}

export default App;

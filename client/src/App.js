import React from "react";
import './App.css';
import HomePage from "./pages/HomePage";
import HomePage2 from "./pages/HomePage2";
import WorkSpace from "./pages/WorkSpace";
import myApi from './api/Api';
import NavBar from "./components/NavBar/NavBar";
import DownloadImages from "./components/DownLoadImages/DownloadImages";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

  return (
    <div className="App">
        <NavBar />
        <BrowserRouter>
            <Routes>
                <Route path='/'  element={<HomePage />} />
                <Route path='/work'  element={<WorkSpace />} />
                <Route path='/gallery'   element={<DownloadImages />} />
                <Route path='/gallery2'   element={<HomePage2 />} />
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;

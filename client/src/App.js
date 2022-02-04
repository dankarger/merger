import React from "react";
import './App.css';
import HomePage from "./pages/HomePage";
import HomePage2 from "./pages/HomePage2";
import WorkSpace from "./pages/WorkSpace";
import myApi from './api/Api';
import NavBar from "./components/NavBar/NavBar";
import Navbar2 from "./components/NavBar/NavBar2"
import Navbar3 from "./components/NavBar/Navbar3";
import Gallery from "./components/Gallery/Gallery";
import DownloadImages from "./components/DownLoadImages/DownloadImages";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

  return (
    <div className="App">

        <BrowserRouter>
            <NavBar />
            {/*<Navbar2 />*/}
            {/*<Navbar3 />*/}
            <Routes>
                <Route path='/home'  element={<HomePage />} />
                <Route path='/work'  element={<WorkSpace />} />
                <Route path='/gallery'   element={<DownloadImages />} />
                <Route path='/gallery2'   element={<Gallery />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

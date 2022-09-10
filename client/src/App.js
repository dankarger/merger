import React, {useState} from "react";
import './App.css';
import HomePage from "./pages/HomePage";
import WorkSpace from "./pages/WorkSpace";
import NavBar from "./components/NavBar/NavBar";
import Gallery from "./components/Gallery/Gallery";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Footer from "./components/Footer/Footer";
 export const UserContext = React.createContext({});


function App() {
    const[currentUser,setCurrentUser] = useState({name:'Guest',email:'guest',password:'guest',_id:"620668fd2127376b525099dd",id:"620668fd2127376b525099dd"})

  return (
    <div className="App">
        <UserContext.Provider value={[currentUser, setCurrentUser]}>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/'  element={<HomePage />} />
                <Route path='/home'  element={<HomePage />} />
                <Route path='/create'  element={<WorkSpace />} />
                <Route path='/gallery'  element={<Gallery />} />
                <Route path='/login'  element={<LoginPage />} />
                <Route path='/register'  element={<RegisterPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
        </UserContext.Provider>

    </div>
  );
}

export default App;

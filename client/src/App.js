import React, {useState} from "react";
import './App.css';
import HomePage from "./pages/HomePage";
import WorkSpace from "./pages/WorkSpace";
import NavBar from "./components/NavBar/NavBar";
import Gallery from "./components/Gallery/Gallery";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import {GreetingStyled} from "./styles/Greeting.styled";
import TopMenuBar from "./TopMenuBar/TopMenuBar";

export const UserContext = React.createContext({name:'guest',email:'guest',password:'guest',_id:"620191159f3c315c33ae4d44"});


function App() {
    const[currentUser,setCurrentUser] = useState({name:'guest',email:'guest',password:'guest',_id:"620191159f3c315c33ae4d44"})

  return (
    <div className="App">
    {/*<Global>*/}
        <UserContext.Provider value={[currentUser, setCurrentUser]}>
        <BrowserRouter>
            <NavBar />

            <GreetingStyled>
                <TopMenuBar/>
                <div>
                    Welcome <span> {currentUser.name}</span>
                </div>
            </GreetingStyled>


            <Routes>
                <Route path='/home'  element={<HomePage />} />
                <Route path='/work'  element={<WorkSpace />} />
                <Route path='/gallery'  element={<Gallery />} />
                <Route path='/login'  element={<LoginPage />} />
                <Route path='/register'  element={<RegisterPage />} />
                {/*<Route path='/gallery2'  element={<Gallery />} />*/}
            </Routes>
        </BrowserRouter>
    {/*</Global>*/}
        </UserContext.Provider>
    </div>
  );
}

export default App;

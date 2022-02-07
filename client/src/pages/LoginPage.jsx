import React, {useContext, useState} from "react";
import {LoginPageStyled} from "../styles/LoginPage.styled";
import LoginRegisterForm from "../components/LoginRegisterForm/LoginRegisterForm";
import {LoginFormStyled} from "../styles/LoginForm.styled";
import {Link} from 'react-router-dom'
import {NotRegisterTextStyled} from "../styles/NotRegisterText.styled";
import {UserContext} from "../App";

const LoginPage =()=> {
        const [currentUser,setCurrentUser]= useContext(UserContext)
        const[formData,setFormData]= useState({});

    const handleSubmitLogin = async ()=>{
        try {

        }
        catch (e) {

        }

    }


    const handleFormInputs = (e) => {
        console.log(e.target.name, e.target.value);
        let newFormData = formData
        newFormData[e.target.name] = e.target.value
        setFormData(newFormData)
        console.log('fff',formData)
    }


    return (
        <LoginPageStyled>
            <LoginFormStyled>
                <h1>Login</h1>
               <LoginRegisterForm type={'login'} handleFormInputs={handleFormInputs} value/>
             <NotRegisterTextStyled>
               Not Register ? <Link to='/register'><span> click here </span> </Link>  to Register
             </NotRegisterTextStyled>
            </LoginFormStyled>

        </LoginPageStyled>
    )
}
export default LoginPage
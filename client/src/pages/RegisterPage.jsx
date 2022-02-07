import React, {useContext, useState} from "react";
import {LoginPageStyled} from "../styles/LoginPage.styled";
import LoginRegisterForm from "../components/LoginRegisterForm/LoginRegisterForm";
import {LoginFormStyled} from "../styles/LoginForm.styled";
import {Link} from 'react-router-dom'
import {NotRegisterTextStyled} from "../styles/NotRegisterText.styled";
import {UserContext} from "../App";



const RegisterPage =()=> {
    const [currentUser,setCurrentUser]= useContext(UserContext)
    const[formData,setFormData]= useState({});


    const handleFormInputs = (e) => {

        let newFormData = formData
        newFormData[e.target.name] = e.target.value
        setFormData(newFormData)

    }

    return (
        <LoginPageStyled>
            <LoginFormStyled>
                <h1>Register</h1>
                <LoginRegisterForm type={'register'}  handleFormInputs={handleFormInputs} />
                <NotRegisterTextStyled>
                    all ready Register ? <Link to='/login'><span> click here </span> </Link>  to Login
                </NotRegisterTextStyled>
            </LoginFormStyled>

        </LoginPageStyled>
    )
}
export default RegisterPage
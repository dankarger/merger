import React, {useContext, useState} from "react";
import {LoginPageStyled} from "../styles/LoginPage.styled";
import LoginRegisterForm from "../components/LoginRegisterForm/LoginRegisterForm";
import {LoginFormStyled} from "../styles/LoginForm.styled";
import {Link, useNavigate} from 'react-router-dom'
import {NotRegisterTextStyled} from "../styles/NotRegisterText.styled";
import {UserContext} from "../App";
import myApi from "../api/Api";


const RegisterPage =()=> {
    const [currentUser,setCurrentUser]= useContext(UserContext)
    const[formData,setFormData]= useState({});
    const navigate = useNavigate();


    const handleSubmitRegister2 = async ()=>{
        try {
            const name = formData.name
            const email = formData.email
            const password = formData.password
            // const{name, email, password} = formData
            const response = await myApi.post('/users/register',{name:name,email:email,password:password})
            console.log('register',response)
            if(response.status===200) {
                console.log('yes',response.data)
                setCurrentUser(response.data);
                navigate(`/work`);

            }
        }
        catch (e) {
            console.log('login;',e.message)
        }
    }

    const handleSubmitLoginGuest= async ()=> {
        try {
            const response = await myApi.post('/users/login',{name:'guest',email:'guest',password:'guest'})
            console.log('login-Guest',response.data.user)
            setCurrentUser(response.data)
            navigate(`/work`);

        }catch(e) {
            console.log(e.message)
        }

    }

    const handleFormInputs = (e) => {
        let newFormData = formData
        newFormData[e.target.name] = e.target.value
        setFormData(newFormData)
        console.log('form',formData)

    }

    return (
        <LoginPageStyled>
            <LoginFormStyled>
                <h1>Register</h1>
                <LoginRegisterForm type={'register'}
                                   handleFormInputs={handleFormInputs}
                                   formData={formData}
                                   handleSubmitLogin={handleSubmitRegister2}
                                   handleSubmitLoginGuest={handleSubmitLoginGuest}/>
                <NotRegisterTextStyled>
                    all ready Register ? <Link to='/login'><span> click here </span> </Link>  to Login
                </NotRegisterTextStyled>
            </LoginFormStyled>

        </LoginPageStyled>
    )
}
export default RegisterPage
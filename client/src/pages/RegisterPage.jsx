import React, {useContext, useEffect, useState} from "react";
import {LoginPageStyled} from "../styles/LoginPage.styled";
import LoginRegisterForm from "../components/LoginRegisterForm/LoginRegisterForm";
import {LoginFormStyled} from "../styles/LoginForm.styled";
import {Link, useNavigate} from 'react-router-dom'
import {NotRegisterTextStyled} from "../styles/NotRegisterText.styled";
import {UserContext} from "../App";
import myApi from "../api/Api";
import {SignInUserMessage, loggedInGuestMessage} from "./Info/Info";
import CustomizedDialogs from "../components/Dialog/Dialog";
import AlertCostum from "../components/Alert/Alert";


const RegisterPage =()=> {
    const [currentUser,setCurrentUser]= useContext(UserContext)
    const[formData,setFormData]= useState({});
    const navigate = useNavigate();
    const[modalInfo,setModalInfo]=useState({})
    const[isDialogueOpen,setIsDialogueOpen] = useState(false)
    const[errorMessage,setErrorMessage] = useState(null)
    const[isErrorMessage,setIsErrorMessage]=useState(false)


    useEffect(()=>{


    })
    const resetInputFields=()=>{
        setFormData({})
    }

    const handleSubmitRegister2 = async ()=>{
        try {
            const name = formData.name
            const email = formData.email
            const password = formData.password
            const response = await myApi.post('/users/register',{name:name,email:email,password:password})
            if(response.status===200) {
                const user = await myApi.post('/users/login',{email:email,password:password})
                setCurrentUser(response.data);
               return handleDialogueMessage('user',response.data)
            }
        }
        catch (error) {
            console.log(error.response.request.response)
            setErrorMessage(error.response.data.message)
            if(error.response.data.message.includes('E11000')){
                setErrorMessage("Email already exist, please register with another Email")
                resetInputFields()
            }
            setIsErrorMessage(true)
            console.log('loginEE;',error.response);
        }
    }

    const handleSubmitLoginGuest= async ()=> {
        try {
            const response = await myApi.post('/users/login',{name:'guest',email:'guest',password:'guest'})
            // console.log('login-Guest',response.data.user)
            setCurrentUser(response.data.user)
            handleDialogueMessage('guest')
        }catch (error) {
            setErrorMessage(error.response.data.message)
            setIsErrorMessage(true)
            console.log('loginEE;',error.response);
        }
    }

    const handleFormInputs = (e) => {
        let newFormData = {...formData}
        newFormData[e.target.name] = e.target.value
        setFormData(newFormData);
        // console.log('form',formData);
    }

    const handleDialogueMessage=(type,user) => {
        if(type==='guest'){
            const{title,message,message2,navigate,titleColor}=loggedInGuestMessage
            setModalInfo({title:title,message:message,message2:message2,navigate:navigate,titleColor: 'green'})
        }

        else if(type==='user') {
            const{title,message,message2,navigate}=SignInUserMessage
            setModalInfo({title:title,message:`${message} ${user.name}`,message2:message2,navigate:navigate,titleColor: 'green'})
        }
        setIsDialogueOpen(true);
    }
    return (

        <LoginPageStyled>
            <AlertCostum
                errorMessage={errorMessage}
                severity={'error'}
                setErrorMessage={setErrorMessage}
                isErrorMessage={isErrorMessage}
                setIsErrorMessage={setIsErrorMessage}
            />
            <LoginFormStyled>
                <h1>Register</h1>
                <LoginRegisterForm type={'register'}
                                   handleFormInputs={handleFormInputs}
                                   formData={formData}
                                   handleSubmitLogin={handleSubmitRegister2}
                                   handleSubmitLoginGuest={handleSubmitLoginGuest}/>
                <NotRegisterTextStyled>
                    already Registered ? <Link to='/login'><span> click here </span> </Link>  to Login
                </NotRegisterTextStyled>
            </LoginFormStyled>
            <CustomizedDialogs isDialogueOpen={isDialogueOpen} modalInfo={modalInfo}/>
        </LoginPageStyled>
    )
}
export default RegisterPage
import React, {useContext, useState} from "react";
import {LoginPageStyled} from "../styles/LoginPage.styled";
import LoginRegisterForm from "../components/LoginRegisterForm/LoginRegisterForm";
import {LoginFormStyled} from "../styles/LoginForm.styled";
import {Link, useNavigate} from 'react-router-dom'
import {NotRegisterTextStyled} from "../styles/NotRegisterText.styled";
import {UserContext} from "../App";
import myApi from "../api/Api";
import {loggedInGuestMessage, loggedInUserMessage} from "./Info/Info";
import CustomizedDialogs from "../components/Dialog/Dialog";


const RegisterPage =()=> {
    const [currentUser,setCurrentUser]= useContext(UserContext)
    const[formData,setFormData]= useState({});
    const navigate = useNavigate();
    const[modalInfo,setModalInfo]=useState({})
    const[isDialogueOpen,setIsDialogueOpen] = useState(false)


    const handleSubmitRegister2 = async ()=>{
        try {
            const name = formData.name || 'test'
            const email = formData.email
            const password = formData.password
            // const{name, email, password} = formData
            const response = await myApi.post('/users/register',{name:name,email:email,password:password})
            console.log('register',response)
            if(response.status===200) {
                console.log('yes',response.data)
                setCurrentUser(response.data);
                console.log('fffuck',currentUser)
                handleDialogueMessage('user',response.data)

                // navigate(`/work`);

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
            handleDialogueMessage('guest')

            // navigate(`/work`);

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

    const handleDialogueMessage=(type,user)=>{
        if(type==='guest'){
            const{title,message,message2,navigate}=loggedInGuestMessage
            setModalInfo({title:title,message:message,message2:message2,navigate:navigate})
        }
        else if(type==='user'){
            const{title,message,message2,navigate}=loggedInUserMessage
            setModalInfo({title:title,message:`${message} ${user.name}`,message2:message2,navigate:navigate})
        }
        setIsDialogueOpen(true);
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
            <CustomizedDialogs isDialogueOpen={isDialogueOpen} modalInfo={modalInfo}/>

        </LoginPageStyled>
    )
}
export default RegisterPage
import React, {useContext, useState,useRef} from "react";
import {LoginPageStyled} from "../styles/LoginPage.styled";
import LoginRegisterForm from "../components/LoginRegisterForm/LoginRegisterForm";
import {LoginFormStyled} from "../styles/LoginForm.styled";
import {Link,useNavigate} from 'react-router-dom'
import {NotRegisterTextStyled} from "../styles/NotRegisterText.styled";
import {UserContext} from "../App";
import myApi from "../api/Api";
import CustomizedDialogs from "../components/Dialog/Dialog";
import {loggedInGuestMessage, loggedInUserMessage} from "./Info/Info";

const LoginPage =()=> {
        const [currentUser,setCurrentUser]= useContext(UserContext);
        const[formData,setFormData]= useState({});
        const navigate = useNavigate();
        const[isDialogueOpen,setIsDialogueOpen] = useState(false);
        const[modalInfo,setModalInfo]=useState({});
        const nameInput = useRef(null);

        const handleSubmitLogin = async ()=>{
        try {

            const email = formData.email
            const password = formData.password
            const response = await myApi.post('/users/login',{email:email,password:password})
            if(response.status===200) {
                console.log('yes',response.data)
                setCurrentUser(response.data.user)
                 console.log('u',currentUser)
                handleDialogueMessage('user',response.data.user,'success')
            }
        }
        catch (e) {
            console.log('login;',e.message);
        }
    }

const handleSubmitLoginGuest= async ()=> {
        try {
            const response = await myApi.post('/users/login',{email:'guest',password:'guest'})
            console.log('login-Guest',response)
            handleDialogueMessage('guest','guest','green')
        }catch(e) {
            console.log(e.message)
        }
}

    const handleFormInputs = (e) => {
        let newFormData = formData
        newFormData[e.target.name] = e.target.value
        setFormData(newFormData)
    }

    const handleDialogueMessage=(type,user,titleColor='green')=>{
            if(type==='guest'){
                const{title,message,message2,navigate}=loggedInGuestMessage
                 setModalInfo({title:title,message:message,message2:message2,navigate:navigate,titleColor:titleColor});
            }
            else if(type==='user'){
                const{title,message,message2,navigate}=loggedInUserMessage
                setModalInfo({title:title,message:`${message} ${user.name}`,message2:message2,navigate:navigate,titleColor:titleColor});
            }
            setIsDialogueOpen(true);
    }

    return (

        <LoginPageStyled>
            <LoginFormStyled>
                <h1>Login</h1>
               <LoginRegisterForm type={'login'}
                                  handleFormInputs={handleFormInputs}
                                  formData={formData}
                                  handleSubmitLogin={handleSubmitLogin}
                                  handleSubmitLoginGuest={handleSubmitLoginGuest}/>
             <NotRegisterTextStyled>
               Not Register ? <Link to='/register'><span> click here </span> </Link>  to Register
             </NotRegisterTextStyled>
            </LoginFormStyled>
        <CustomizedDialogs isDialogueOpen={isDialogueOpen} modalInfo={modalInfo} />
        </LoginPageStyled>
    )
}

export default LoginPage
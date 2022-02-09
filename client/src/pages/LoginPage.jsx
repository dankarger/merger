import React, {useContext, useState} from "react";
import {LoginPageStyled} from "../styles/LoginPage.styled";
import LoginRegisterForm from "../components/LoginRegisterForm/LoginRegisterForm";
import {LoginFormStyled} from "../styles/LoginForm.styled";
import {Link,useNavigate} from 'react-router-dom'
import {NotRegisterTextStyled} from "../styles/NotRegisterText.styled";
import {UserContext} from "../App";
import myApi from "../api/Api";
import CustomizedDialogs from "../components/Dialog/Dialog";

const LoginPage =()=> {
        const [currentUser,setCurrentUser]= useContext(UserContext)
        const[formData,setFormData]= useState({});
        const navigate = useNavigate();
        const[isDialogueOpen,setIsDialogueOpen] = useState(false)
    const[modalInfo,setModalInfo]=useState({title:'Login Successfull',message:'You are loged in as Guest',navigate:'/work'})
    const handleSubmitLogin = async ()=>{
        try {
            const email = formData.email
            const password = formData.password
           const response = await myApi.post('/users/login',{email:email,password:password})
            console.log('login',response)
            if(response.status===200) {
                console.log('yes',response.data)
                setCurrentUser(response.data.user)
                navigate(`/work`);
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
            setCurrentUser(response.data.user);

            setIsDialogueOpen(true);
            // navigate(`/work`);
        }catch(e) {
            console.log(e.message)
        }
}
    const handleFormInputs = (e) => {
        let newFormData = formData
        newFormData[e.target.name] = e.target.value
        setFormData(newFormData)
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
        <CustomizedDialogs isDialogueOpen={isDialogueOpen} modalInfo={modalInfo}/>
        </LoginPageStyled>
    )
}
export default LoginPage
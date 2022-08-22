import React, {useContext, useState, useRef} from "react";
import {LoginPageStyled} from "../styles/LoginPage.styled";
import LoginRegisterForm from "../components/LoginRegisterForm/LoginRegisterForm";
import {LoginFormStyled} from "../styles/LoginForm.styled";
import {Link, useNavigate} from 'react-router-dom'
import {NotRegisterTextStyled} from "../styles/NotRegisterText.styled";
import {UserContext} from "../App";
import myApi from "../api/Api";
import CustomizedDialogs from "../components/Dialog/Dialog";
import {loggedInGuestMessage, loggedInUserMessage, ErrorUserMessage} from "./Info/Info";
import AlertCostum from "../components/Alert/Alert";

const LoginPage = () => {
    const [currentUser, setCurrentUser] = useContext(UserContext);
    const [formData, setFormData] = useState({});
    const [isDialogueOpen, setIsDialogueOpen] = useState(false);
    const [modalInfo, setModalInfo] = useState({});

    const [errorMessage, setErrorMessage] = useState(null)
    const [isErrorMessage, setIsErrorMessage] = useState(false)


    const handleSubmitLogin = async () => {
        try {

            const email = formData.email
            const password = formData.password
            const response = await myApi.post('/users/login', {email: email, password: password})
            if (response.status === 200) {
                setCurrentUser(response.data.user)
                handleDialogueMessage('user', response.data.user, 'success')
            } else {

            }
        } catch (error) {
            setErrorMessage(error.response.data.message)
            setIsErrorMessage(true)
            console.log('loginEE;', error.response);
        }
    }

    const handleSubmitLoginGuest = async () => {
        try {
            const response = await myApi.post('/users/login', {email: 'guest', password: 'guest'})
            setCurrentUser(response.data.user)
            handleDialogueMessage('guest', 'guest', 'green')

        } catch (error) {
            setErrorMessage(error.response.data.message)
            setIsErrorMessage(true)
            setFormData({})
        }
    }

    const handleFormInputs = (e) => {
        let newFormData = {...formData}
        newFormData[e.target.name] = e.target.value
        setFormData(newFormData)
    }

    const handleDialogueMessage = (type, user, titleColor = 'green') => {
        if (type === 'guest') {
            const {title, message, message2, navigate} = loggedInGuestMessage
            setModalInfo({
                title: title,
                message: message,
                message2: message2,
                navigate: navigate,
                titleColor: titleColor
            });
        } else if (type === 'user') {
            const {title, message, message2, navigate, titleColor} = loggedInUserMessage
            setModalInfo({
                title: title,
                message: `${message} ${user.name}`,
                message2: message2,
                navigate: navigate,
                titleColor: titleColor
            });
        } else if (type === 'error') {
            const {title, message, message2, navigate, titleColor} = ErrorUserMessage
            setModalInfo({
                title: title,
                message: `${message}dd ${errorMessage.message}` + errorMessage,
                message2: errorMessage,
                navigate: navigate,
                titleColor: 'red'
            });
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
                <h1>Login</h1>
                <LoginRegisterForm type={'login'}
                                   handleFormInputs={handleFormInputs}
                                   formData={formData}
                                   handleSubmitLogin={handleSubmitLogin}
                                   handleSubmitLoginGuest={handleSubmitLoginGuest}/>
                <NotRegisterTextStyled>
                    Not Registered ? <Link to='/register'><span> click here </span> </Link> to Register
                </NotRegisterTextStyled>
            </LoginFormStyled>
            <CustomizedDialogs isDialogueOpen={isDialogueOpen} modalInfo={modalInfo}/>
        </LoginPageStyled>
    )
}

export default LoginPage
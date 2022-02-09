import React,{useContext} from "react";

// const [currentUser,setCurrentUser]= useContext(UserContext)



export const loggedInGuestMessage = {
    title:'Logged-in Successfully',
    message:'You are logged in as Guest',
    message2: 'Your works will be saved as Guest , if you want to save under your name please Log in under your Account ',
    titleColor:'green',
    navigate:'/work'

}
//
export const loggedInUserMessage = {
    title:'Logged-in Successfully',
    message:'You are logged in as ',
    message2: 'You can save under your user name, You can find in the Gallery page all your work ',
    navigate:'/work',
    titleColor:'green',

}
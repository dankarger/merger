import React,{useContext} from "react";

// const [currentUser,setCurrentUser]= useContext(UserContext)



export const loggedInGuestMessage = {
    title:'Logged-in Successful',
    message:'Hi Guest',
    message2: 'Your works will be saved as Guest and will be public, if you want to create and save under your own gallery please Register or Sign-in with your Account ',
    titleColor:'green',
    navigate:'/create'

}
//
export const loggedInUserMessage = {
    title:'Logged-in Successful',
    message:'Hi ',
    message2: 'You can now save under your user name and delete images you created, You can find in the Gallery page all your work ',
    navigate:'/create',
    titleColor:'green',

}

export const SignInUserMessage = {
    title:'Sign-Up Successfully',
    message:'Hi ',
    message2: 'Welcome to Merger ,your Image merging app, We are Happy You Joined, You can Create your own merges , view others works, and download, Have Fun :)  ',
    navigate:'/create',
    titleColor:'green',
}

export const ErrorUserMessage = {
    title: 'Error',
    message: 'failure ',
    message2: 'the operation failed :( ',
    navigate: '/login',
    titleColor: 'red',
}

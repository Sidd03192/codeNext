// this will have the authentiction . We will use passwordless authentication for ease of use and we will also use firebase. 
// This is where the user will be cretated and that itself will be a seperate collection. 
//we will use one tap sign in, so no pages. 

import "./auth.css";
import { useState, useEffect } from "react";
import React from 'react'
import "./auth.css"
export const Auth =()=>{

const [userData, setUserData] = useState();
const [userName, setUserName] = useState();
const[userId, setUserId] = useState();
const [userEmail, setUserEmail] = useState();
const [createdAt, setCreatedAt]= useState();
const [alertbutton,setalertbutton]=useState(false);




return (


    <h1> Auth Page </h1>
)


}


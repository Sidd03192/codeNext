// this will have the authentiction . We will use passwordless authentication for ease of use and we will also use firebase. 
// This is where the user will be cretated and that itself will be a seperate collection. 
//we will use one tap sign in, so no pages. 

import "./Auth.css";
import { Alert } from '@mui/material';
import { auth, provider } from "../../firebase";
import {  onAuthStateChanged,signInWithEmailAndPassword,createUserWithEmailAndPassword, signInWithPopup,sendEmailVerification} from "firebase/auth";
import Cookies from "universal-cookie";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
const cookies = new Cookies();
import React from 'react'
import { useState } from 'react';
import {signInWithPopup } from 'firebase'
const Auth =()=>{

const [userData, setUserData] = useState();








}

return Auth; 
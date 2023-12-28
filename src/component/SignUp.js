//import React from 'react'

import { useState, useEffect } from "react"
import {useNavigate} from "react-router-dom"

const SignUp=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    
    useEffect(()=>{
        const auth=localStorage.getItem("user");
        if(auth){
            navigate('/')

        }

    })
  const collectData=async()=>{
    console.warn(name,email,password);
    let result=await fetch('http://localhost:4500/register',{
      method:'POST',
      body:JSON.stringify({name,email,password}),
      headers:{
        'Content-type':'application/json'
      }
    })
    result=await result.json();
    console.warn(result);
    localStorage.setItem("user",JSON.stringify(result.result));
    localStorage.setItem("token",JSON.stringify(result.auth));

    navigate('/')
  }

    return (
        <div>
            <h1>Register</h1>
            <input className="inputBox" type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter Name"></input>
            <input className="inputBox" type="Email" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter Email"></input>
            <input className="inputBox" type="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Enter password"></input>
            <button className="inputBox btn" onClick={collectData}>Submit</button>
            

        </div>
    )
}
export default SignUp
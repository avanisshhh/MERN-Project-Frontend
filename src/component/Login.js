import { useState ,useEffect} from "react";
import { useNavigate } from "react-router";
const Login=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate()
    useEffect(()=>{
        const auth=localStorage.getItem("user");
        if(auth){
            navigate('/')

        }

    });

    const handleLogin=async()=>{
        console.warn(email,password);
        let result = await fetch("http://localhost:4500/login",{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result=await result.json();
        console.warn(result);
        if(result.auth){
            localStorage.setItem("user",JSON.stringify(result.user));
            localStorage.setItem("token",JSON.stringify(result.auth));

            navigate("/")
        }
        else{
            alert('please enter correct details')
        }

    }

    return (
        <div>
            <h1>Login Page</h1>
            <input className="inputBox" type="Email" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter Email"></input>
            <input className="inputBox" type="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Enter password"></input>
            <button className="inputBox btn" onClick={handleLogin}>Submit</button>
            

        </div>
    )
}
export default Login;

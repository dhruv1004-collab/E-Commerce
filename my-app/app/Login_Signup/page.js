"use client";
import {React , use, useState} from 'react'
import "./Login_Signup.css"

const page = () => {
  const [state , setState] = useState("Login")
  const [UserDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: ""
  })
  
    const handleChange = (e) => {
      setUserDetails({...UserDetails, [e.target.name]: e.target.value});
    }

  const signup = async ()=>{
    console.log("Signup called" , UserDetails)
    let responseData;
    await fetch("http://localhost:4000/signup",{
      method : "POST",
      headers:{
        Accept : "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(UserDetails),
    }).then((res) => res.json()).then((data)=> responseData = data)

    if(responseData.success){
      localStorage.setItem("auth_token", responseData.token)
      window.location.replace("/")
    }
    else{
      alert(responseData.message || "Something went wrong")
    }

    
  }
  
  const login = async ()=>{
    console.log("login called" , UserDetails)
   let responseData;
    await fetch("http://localhost:4000/login",{
      method : "POST",
      headers:{
        Accept : "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(UserDetails),
    }).then((res) => res.json()).then((data)=> responseData = data)

    if(responseData.success){
      localStorage.setItem("auth_token", responseData.token)
      window.location.replace("/")
    }
    else{
      alert(responseData.message || "Something went wrong")
    }
  }


  return (
    <>
      <div className="login_signup">
        <div className="login_signup_container">
          <h1>{state}</h1>
          <div className="login_signup_fields">
            {state === "Sign Up" ?  <input name="username" value={UserDetails.username} onChange={handleChange} suppressHydrationWarning type="text" placeholder='Your Name' />: ""}
           
            <input suppressHydrationWarning name="email" value={UserDetails.email} onChange={handleChange} type="email" placeholder='E-mail Address' />
            <input suppressHydrationWarning name="password" value={UserDetails.password} onChange={handleChange} type="password" placeholder='Password' />

          </div>
          <button suppressHydrationWarning onClick={()=>{state === "Login" ? login() : signup()}}>Continue</button>


          {state === "Login" ?<p className="login_signup_login">Create an account? <span onClick={()=>{setState("Sign Up")}}> Click here</span></p> : <p className="login_signup_login">Already have an account? <span onClick={()=>{setState("Login")}}> Login here</span></p>}
          
          
          <div className="login_signup_agree">
            <input suppressHydrationWarning type="checkbox" name='' id='' />
            <p>By continuing, i agree to the terms of use & privacy policy</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
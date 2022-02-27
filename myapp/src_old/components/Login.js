import React,{useState} from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom"
function Login({setLoginUser}) {
 
  const history = useNavigate()
    const [user,setUser] = useState({
        name:"",
        password: ""
    })
    const handleChange = e =>{
    const {name,value} = e.target
    setUser({
    ...user,//spread operator 
    [name]:value
    })
    }

    const login =()=>{
        axios.post("http://localhost:4000/Login",user)
        .then(res=>{alert(res.data.message)
        setLoginUser(res.data.user)
    history.push("/")})
    }


  return (
    <>
      <div className="formOuterBody">
        <span className="formSpans">
          <form className="formArea">
            <h2 id="loginHeading">Login Here</h2>

            <input className="inputLogIn" type="text" placeholder="Email or Phone" id="username" name="email" value={user.email}  onChange={handleChange}  />

            <input className="inputLogIn" type="password" placeholder="Password" id="password" name="password" value={user.password}  onChange={handleChange} />

            <button className="btnLogin" onClick={login} >Log In</button>
          </form>
        </span>
        <span className="formSpans" id="formGreeting">
          <h2 className="formHeadings">Welcome Back!</h2>
        </span>
      </div>
    </>
  );
}

export default Login;

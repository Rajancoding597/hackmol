import React,{useState} from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";


function Signup() {
  let sign_up = () => {
    // axios.post('http://localhost:4000/')
  };

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user, //spread operator
      [name]: value,
    });
  };
  //register function
  const egister = () => {
    const { name, email, password } = user;
    if (name && email && password) {
      axios
        .post("http://localhost:4000/Register", user)
        .then((res) => console.log(res));
    } else {
      alert("invalid input");
    }
  }

    return (
      <>
        <div className="formOuterBody">
          <span className="formSpans">
            <form className="formArea">
              <h2 id="signupHeading">Signup Here</h2>

              <input
                className="inputSignUp"
                type="text"
                placeholder="Name"
                id="name"
                name="name" value={user.name} onChange={handleChange}
              />

              <input
                className="inputSignUp"
                type="text"
                placeholder=" Phone"
                id="username"
                name="email" value={user.email} onChange={handleChange}
              />

              <input
                className="inputSignUp"
                type="password"
                placeholder="Password"
                id="password"
                name="password" value={user.password} onChange={handleChange}
              />

              <button className="btnSignUp" onClick={egister}>
                Sign Up
              </button>
            </form>
          </span>
          <span className="formSpans" id="formGreeting">
            <h2 className="formHeadings">Welcome Back!</h2>
          </span>
        </div>
      </>
    );
}
export default Signup

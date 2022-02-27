import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "./Home.css";

function Fun() {
  
  const navigate = useNavigate();

  const handleClickLogin=()=>{
    navigate("./login", {replace: true});
  }

  const handleClickSignup=()=>{
    navigate("./signup", {replace: true});
  }

  return (
    <>
      <div className="homeOuterContainer">
        <div className="homeDivs" id="homeLeftDiv">
          <div className="homeBlob">
            <div className="blobHeading">
              KLEAN
            </div>
          </div>
        </div>
        <div className="homeDivs" id="homeRightDiv">
          <button className="buttonsLog" onClick={handleClickLogin}>
            <NavLink
              to="/login"
              exact="true"
              className="btnHome"
            >
              login
            </NavLink>
          </button>
          <button className="buttonsLog" onClick={handleClickSignup}>
            <NavLink
              to="/signup"
              exact="true"
              className="btnHome"
            >
              signup
            </NavLink>
          </button>
        </div>
      </div>
    </>
  );
}

export default Fun;

import React from "react";
// import "./../index.css";
function Login() {
    return (
        <>
            <div className="formOuterBody">
                <span className="formSpans">
                    <div>
                        <h2 className="formHeadings">Log In</h2>
                    </div>
                    <div className="formContent">
                        <div className="signInAreas">
                            <input
                                className="signInInputFields"
                                type="tel"
                                id="phone"
                                name="phone"
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                placeholder="Mobile No."
                            />
                        </div>
                        <div className="signInAreas">
                            <input
                                className="signInInputFields"
                                type="password"
                                name="Password"
                                placeholder="Password"
                            />
                        </div>
                        <div className="signInAreas">
                            <button className="signInButton formButton">Log in</button>
                        </div>
                        <hr id="formLine" />
                        <div className="signInAreas">
                            <span>Do not have an account? </span>
                            <span>
                                <a href="#" className="formAnchorTags">
                                    Sign up
                                </a>
                            </span>
                        </div>
                    </div>
                </span>
                <span className="formSpans" id="formGreeting">
                    <h2 className="formHeadings">Welcome Back!</h2>
                </span>
            </div>
        </>
    );
}

export default Login;
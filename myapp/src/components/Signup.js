import React from "react";

function Signup() {
    return (
        <>
            <div className="formOuterBody">
                <span className="formSpans">
                    <div>
                        <h2 className="formHeadings">Sign Up</h2>
                    </div>
                    <div className="formContent">
                        <div className="signUpAreas">
                            <input
                                className="signUpInputFields"
                                type="text"
                                name="name"
                                placeholder="Name"
                            />
                        </div>
                        <div className="signUpAreas">
                            <input
                                className="signUpInputFields"
                                type="tel"
                                id="phone"
                                name="phone"
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                placeholder="Mobile No."
                            />
                        </div>
                        <div className="signUpAreas">
                            <input
                                className="signUpInputFields"
                                type="password"
                                name="Password"
                                placeholder="Password"
                            />
                        </div>
                        <div className="signUpAreas">
                            <input type="checkbox" name="t&c" id="formCheckbox" />
                            <span>
                                I read and agree to{" "}
                                <a href="#" id="signUpTncLink" className="signUpAnchorTags">
                                    Terms & Conditions
                                </a>
                            </span>
                        </div>
                        <div className="signUpAreas">
                            <button className="signUpButton formButton">Create Account</button>
                        </div>
                        <hr id="formLine" />
                        <div className="signUpAreas">
                            <span>Already have an account? </span>
                            <span>
                                <a href="#" className="formAnchorTags">Sign in</a>
                            </span>
                        </div>
                    </div>
                </span>
                <span className="formSpans" id="formGreeting">
                    <h2 className="formHeadings">Glad to see you!</h2>
                </span>
            </div>
        </>
    );
}

export default Signup;
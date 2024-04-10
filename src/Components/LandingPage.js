import React from "react";
import {useNavigate} from "react-router-dom"

const LandingPage= ()=>{


    const navigate= useNavigate();

    return(
        <div className="landing-page-container container">
            <div className="landing-page-div">
                <div className="heading-p-container">
                    <h1>Welcome to PopX</h1>
                    <p className="landing-para">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,</p>
                </div>
                <div className="landing-page-btns-container">
                    <button onClick={()=>navigate("./create-account")} >Create Account</button>
                    <button onClick={()=> navigate("./login")} >Already Registered? Login</button>
                </div>
            </div>

        </div>
    )
}

export default LandingPage
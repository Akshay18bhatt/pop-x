import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

const LoginPage= ()=>{

    const [loginData, setLoginData]= useState({
        email:null,
        myPassword:null
    })

    
    const navigate= useNavigate();

    function handleLoginFormChange(e){

        const changeName= e.target.name, changeValue= e.target.value;
        console.log(changeName,changeValue);

        setLoginData({...loginData,[changeName]:changeValue});
    }
    console.log(loginData);
    function handleLogin(e){
        e.preventDefault();
        if(loginData.email===null || loginData.myPassword==null){
            alert("Please fill all the fields");
            return;
        }
        else{
            navigate("/user");
        }

    }


    return(
        <div className="login-page-container container">
            <div>
                <div className="login-heading-p-container">
                    <h1>SignIn to your<br/>PopX account</h1>
                    <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,</p>
                </div>
                <form className="login-form" onChange={handleLoginFormChange} onSubmit={handleLogin}>
                    <fieldset>
                        <legend>Email Address</legend>
                        <input type="email" name="email" placeholder="Enter email address" />
                    </fieldset>
                    <fieldset>
                        <legend>Password</legend>
                        <input type="password" name="myPassword" placeholder="Enter password" />
                    </fieldset>

                    <button  className="login-btn">Login</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
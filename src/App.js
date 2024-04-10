import React from "react";
import LandingPage from "./Components/LandingPage";
import LoginPage from "./Components/LoginPage";
import CreateAccountPage from "./Components/CreateAccountPage";
import AccountSettings from "./Components/AccountSettings";
import "./styles.css"
import { BrowserRouter, Routes, Route} from "react-router-dom";

const App= ()=>{


    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/create-account" element={<CreateAccountPage />} />
                    <Route path="/user" element={<AccountSettings />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}


export default App
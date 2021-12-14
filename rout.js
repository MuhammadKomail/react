import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard, Login, SignUp } from ".";


export default function AppRouter() {
    return (
        <Router >
            <div>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signUp" element={<SignUp />} />
                    {/* <Route path="/header" element={<Header />} /> */}
                </Routes>
            </div>
        </Router>
    )
}
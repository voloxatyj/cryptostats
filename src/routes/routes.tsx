import React from "react";
import { Route, Routes as ReactRouterRoutes } from "react-router-dom";
import { LoginPage, } from "../pages/login.page";
import { SignupPage } from "../pages/signup.page";

const Routes: React.FC = () => {
    return <ReactRouterRoutes>
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
    </ReactRouterRoutes>
}

export { Routes };
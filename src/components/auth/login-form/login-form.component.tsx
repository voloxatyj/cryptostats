import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const LoginForm: React.FC = () => {

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();

      const hasValidEmail = email.includes("@");
      const hasValidPassword = password.length >= 6;

      setEmailError(!hasValidEmail);
      setPasswordError(!hasValidPassword);

      if (hasValidEmail && hasValidPassword) {
          // Handle form submission logic here
          console.log("Form submitted with email:", email, "and password:", password);
      }
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen gap-8">
      <h1 className="text-5xl font-bold">Cryptostats</h1>
        <div className="flex flex-col gap-2">
          <TextField 
            label="Email" 
            className="w-80" 
            type="email" 
            required 
            helperText={emailError ? "Please enter a valid email address" : undefined} 
            onChange={(event) => {
                setEmail(event.target.value);
                setEmailError(!event.target.value.includes("@"));
            }}
            error={emailError}
          />
          <TextField 
            label="Password" 
            className="w-80" 
            type="password" 
            required 
            helperText={passwordError ? "Password must be at least 6 characters long" : undefined} 
            onChange={(event) => {
                setPassword(event.target.value);
                setPasswordError(event.target.value.length < 6);
            }}
            error={passwordError}
          />
          <Link to="/signup" className="text-center mt-2 text-blue-500 hover:underline">
            Don't have an account? Sign up
          </Link>
        </div>
        <Button variant="contained" className="w-80" onClick={handleSubmit}>
            <span className="p-1">Login</span>
        </Button>
    </div>
  )
}

export { LoginForm };
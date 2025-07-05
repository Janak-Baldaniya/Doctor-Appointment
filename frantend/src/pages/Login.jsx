import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Context } from "../main";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://doctor-appointment-backend-ozjb.onrender.com/api/v1/user/login",
        { email, password, role: "Patient" },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.data.success) {
        setIsAuthenticated(true);
        toast.success(response.data.message);
        navigateTo("/");
      }
    } catch (error) {
      console.error("Login error:", error);
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Login failed. Please try again.");
      }
    }
  };

  // Redirect if user is already authenticated
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="container form-component login-form">
        <h2>Sign In</h2>
        <p>Please Login To Continue</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat culpa
          voluptas expedita itaque ex, totam ad quod error?
        </p>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <p style={{ marginBottom: 0 }}>Not Registered?</p>
            <Link
              to={"/register"}
              style={{ textDecoration: "none", color: "#271776ca" }}
            >
              Register Now
            </Link>
          </div>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

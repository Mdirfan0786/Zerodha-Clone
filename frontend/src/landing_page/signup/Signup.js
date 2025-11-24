import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Signup() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

    try {
      const { data } = await axios.post(
        `${API_URL}/signup`,
        { ...inputValue },
        { withCredentials: true }
      );

      const { success, message } = data;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }

    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="container">
      <div className="row mt-5 mb-5 p-5">
        <h1 className="fs-1 text-center" style={{ lineHeight: 2 }}>
          Open a free demat and trading account online
        </h1>
        <p className="fs-5 text-center text-muted">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>

      <div className="row mt-5 mb-5 p-5">
        <div className="col-7">
          <img
            src="media/images/account_open.svg"
            alt="account_open"
            style={{ height: "90%" }}
          ></img>
        </div>
        <div className="col-5 auth-logs">
          <h1 className="fs-2 mb-3">Signup now</h1>
          <p className="text-muted">Or track your existing application</p>
          <form onSubmit={handleSubmit}>
            <div className="auth-logs">
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleOnChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="username"
                value={username}
                placeholder="Enter your username"
                onChange={handleOnChange}
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={handleOnChange}
              />
            </div>
            <button
              type="submit"
              className="p-2 btn btn-primary fs-5 mb-3"
              style={{ width: "50%", margin: "0 auto" }}
            >
              Submit
            </button>{" "}
            <br />
            <span>
              Already have an account? <Link to={"/login"}>Login</Link>
            </span>
            <p className="text-muted">
              By proceeding, you agree to the Zerodha{" "}
              <a href="/" style={{ textDecoration: "none" }}>
                terms
              </a>{" "}
              &{" "}
              <a href="/" style={{ textDecoration: "none" }}>
                privacy policy
              </a>
            </p>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Signup;

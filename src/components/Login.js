import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginAction } from "../redux/actions/AuthAction";

//Step-5: Use Redux State and Actions in React Components
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputValues, setInputValue] = useState({
    email: "",
    password: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setInputValue({ ...inputValues, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginAction(inputValues, navigate));
  };
  return (
    <>
      <div className="col-md-12 signup-form">
        <div className="card card-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                onChange={(e) => handleChange(e)}
                autoComplete="off"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                onChange={(e) => handleChange(e)}
                autoComplete="off"
                required
              />
            </div>
            <br />
            <div className="form-group">
              <Link to={"/sign-up"} className="btn btn-primary btn-block">
                Sign Up
              </Link>
              <button
                type="submit"
                className="btn btn-primary btn-block"
                style={{ float: "right" }}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;

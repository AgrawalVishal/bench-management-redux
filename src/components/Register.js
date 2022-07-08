import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RegisterAction } from "../redux/actions/AuthAction";

//Step-5: Use Redux State and Actions in React Components
function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    location: "India",
    category: "FS",
    status: "Active",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "role") {
      if (value === "panel" || value === "candidate") {
        document.getElementById("skill").style.display = "block";
      } else {
        document.getElementById("skill").style.display = "none";
        document.getElementById("skillInput").value = "";
      }
      if (value === "candidate") {
        document.getElementById("resume").style.display = "block";
      } else {
        document.getElementById("resume").style.display = "none";
        document.getElementById("resumeInput").value = "";
      }
    }
    setFormData({ ...formData, [name]: value });
    if (name === "resume") {
      const fileVal = e.target.files[0];
      setFormData({ ...formData, [name]: fileVal.name });
    }
  };
  useEffect(() => {
    if (formData.role === "admin") {
      formData.skill = "";
      formData.resume = "";
    } else if (formData.role === "panel") {
      formData.resume = "";
    }
  }, [formData.role]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(RegisterAction(formData, navigate));
  };
  return (
    <>
      <div className="col-md-12 signup-form">
        <div className="card card-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                autoComplete="off"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact">Contact #</label>
              <input
                type="text"
                name="contact"
                className="form-control"
                autoComplete="off"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                autoComplete="off"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                autoComplete="off"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
                autoComplete="off"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="designation">Designation</label>
              <input
                type="text"
                className="form-control"
                name="designation"
                autoComplete="off"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="role">Role</label>
              <select
                className="form-control"
                name="role"
                required
                onChange={handleChange}
              >
                <option value="">Choose Role</option>
                <option value="admin">Admin</option>
                <option value="panel">Panel</option>
                <option value="candidate">Candidate</option>
              </select>
            </div>
            <div className="form-group hide" id="skill">
              <label htmlFor="skill">Skill Set</label>
              <input
                type="text"
                className="form-control"
                name="skill"
                id="skillInput"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
            <div className="form-group hide" id="resume">
              <label htmlFor="resume">Upload Resume</label>
              <input
                type="file"
                className="form-control"
                name="resume"
                id="resumeInput"
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group">
              <Link to={"/sign-in"} className="btn btn-primary btn-block">
                Sign In
              </Link>
              <button
                type="submit"
                className="btn btn-primary btn-block"
                style={{ float: "right" }}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;

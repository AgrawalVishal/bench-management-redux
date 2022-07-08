import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HomeAction } from "../redux/actions/HomeAction";

function Home() {
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = JSON.parse(localStorage.getItem("user"));
  console.log(userData);
  const users = useSelector((state) => state.authReducer);
  const usersData = useSelector((state) => state.homeReducer.usersData);
  let userList = "";
  if (usersData) {
    userList = usersData.map((data) => {
      return (
        <tr key={data.id}>
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>India</td>
          <td>Bench/Project</td>
          <td>Active</td>
          <td>{data.contact}</td>
          <td>{data.resume}</td>
          <td>28-06-2022</td>
          <td>Admin/Panel/Candidate</td>
        </tr>
      );
    });
  }
  useEffect(() => {
    if (users.isLoggedIn === true) {
      dispatch(HomeAction());
      setRole(users.user.role);
    } else {
      navigate("/sign-in");
    }
  }, [role]);
  return (
    <>
      <div className="col-md-12">
        <div className="card card-container">
          <table>
            <thead>
              <tr>
                <th>KinID</th>
                <th>Name</th>
                <th>Location</th>
                <th>Category</th>
                <th>Status</th>
                <th>Contact #</th>
                <th>Resume Link</th>
                <th>Last Updated</th>
                <th>Updated By</th>
              </tr>
            </thead>
            <tbody>{userList || []}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;

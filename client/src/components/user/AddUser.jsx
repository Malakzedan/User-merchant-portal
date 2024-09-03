import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./styles.module.css";

function AddUser() {
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    fullName: "",
    mobileNumber: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/api/users/create", newUser);
    setNewUser({
      username: "",
      email: "",
      fullName: "",
      mobileNumber: "",
      password: "",
    });
    navigate("/users");
  };
  const handleExit = () => {
    navigate("/users");
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.exit_btn}>
          <button className={styles.close_btn} onClick={handleExit}>
            &times;
          </button>
        </div>
        <h2>Add New User</h2>
        <form className={styles.form_content} onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            placeholder="Username"
            value={newUser.username}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Email"
            value={newUser.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            placeholder="Full Name"
            value={newUser.fullName}
            onChange={handleChange}
            required
          />

          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            type="text"
            className="form-control"
            id="mobileNumber"
            name="mobileNumber"
            placeholder="Mobile Number"
            value={newUser.mobileNumber}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={newUser.password}
            onChange={handleChange}
            required
            minLength="8"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number, one uppercase, one lowercase letter, and at least 8 or more characters"
          />

          <button type="submit">Create New User</button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;

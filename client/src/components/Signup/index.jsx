import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Signup = () => {
  const [data, setData] = useState({
    email: "",
    username: "",
    fullName: "",
    mobileNumber: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:4000/api/users";
      await axios.post(url, data);
      window.location = "/login";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className={styles.Signup_container}>
      <div className={styles.form_container}>
        <div className={styles.left}>
          <form onSubmit={handleSubmit}>
            <p className={styles.font_merchant}>Create a new merchant</p>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
              value={data.username}
              required
              className={styles.input}
            />
            <label htmlFor="fullName">Full Name :</label>
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              onChange={handleChange}
              value={data.fullName}
              required
              className={styles.input}
            />
            <label htmlFor="mobileNumber">Mobile Number :</label>
            <input
              type="tel"
              placeholder="Mobile Number"
              name="mobileNumber"
              onChange={handleChange}
              value={data.mobileNumber}
              required
              className={styles.input}
            />
            <label htmlFor="password">Password :</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.gold_btn}>
              Sign Up
            </button>
          </form>
        </div>
        <div className={styles.right}>
          <p className={styles.font}>Already have an account?</p>
          <Link to="/login">
            <button type="button" className={styles.green_btn}>
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;

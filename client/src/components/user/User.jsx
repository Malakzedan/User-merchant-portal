import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import CreateMerchantModal from "../merchant/Merchants";
import { Link, Outlet } from "react-router-dom";
import styles from "./styles.module.css";

const User = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await axios.get(
      "http://localhost:4000/api/users/all-users"
    );
    setData(response.data);
  };

  const handleDelete = async (_id) => {
    console.log("id");
    console.log(_id);
    await axios.delete(`http://localhost:4000/api/users/${_id}`);
    fetchData();
  };
  return (
    <>
      <div className={styles.main_container}>
        <nav className={styles.navbar}>
          <h1 className={styles.title}>Users</h1>
          <div className={styles.actions}>
            <Link to="/users/add-user" className={styles.create_btn}>
              + Create new User
            </Link>
          </div>
        </nav>
        <div className={styles.table_container}>
          <h2 className={styles.user_count}>{data.length} users</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                {/* <th>ID</th> */}
                <th>Username</th>
                <th>Email</th>
                <th>Full Name</th>
                <th>Mobile Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item._id}>
                  {/* <td>{item._id}</td> */}
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.fullName}</td>
                  <td>{item.mobileNumber}</td>
                  <td>
                    <button
                      className={styles.delete_btn}
                      onClick={() => handleDelete(item._id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default User;

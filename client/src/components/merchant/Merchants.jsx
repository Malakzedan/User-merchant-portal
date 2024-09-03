import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import { Link, Outlet } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Merchants = () => {
  const [merchants, setMerchants] = useState([]);

  useEffect(() => {
    fetchMerchants();
  }, []);

  const fetchMerchants = async () => {
    const response = await axios.get("http://localhost:4000/api/merchants");
    setMerchants(response.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:4000/api/merchants/${id}`);
    fetchMerchants();
  };

  return (
    <>
      <div className={styles.main_container}>
        <nav className={styles.navbar}>
          <h1 className={styles.title}>Merchants</h1>
          <div className={styles.actions}>
            <Link to="/merchants/add-merchant" className={styles.create_btn}>
              + Create new Merchant
            </Link>
          </div>
        </nav>
        <div className={styles.tableContainer}>
          <h2 className={styles.merchant_count}>
            {merchants.length} merchants
          </h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Company Name</th>
                <th>Account Number</th>
                <th>Balance</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {merchants.map((item) => (
                <tr key={item._id}>
                  <td>{item._id}</td>
                  <td>{item.companyName}</td>
                  <td>{item.accountNumber}</td>
                  <td>{item.balance}</td>
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

export default Merchants;

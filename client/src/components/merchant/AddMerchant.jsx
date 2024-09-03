import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./styles.module.css";

function AddMerchant() {
  const [newMerchant, setNewMerchant] = useState({
    companyName: "",
    accountNumber: "",
    balance: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMerchant({ ...newMerchant, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/api/merchants/create", newMerchant);
    setNewMerchant({ companyName: "", accountNumber: "", balance: "" });
    navigate("/merchants");
  };
  const handleExit = () => {
    navigate("/merchants");
  };
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.exit_btn}>
          <button className={styles.close_btn} onClick={handleExit}>
            &times;
          </button>
        </div>
        <h1>Add New Merchant</h1>
        <form className={styles.form_content} onSubmit={handleSubmit}>
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={newMerchant.companyName}
            onChange={handleChange}
            required
          />
          <label htmlFor="accountNumber">Account Number:</label>
          <input
            type="text"
            name="accountNumber"
            placeholder="Account Number"
            value={newMerchant.accountNumber}
            onChange={handleChange}
            required
          />
          <label htmlFor="balance">Balance:</label>
          <input
            type="text"
            name="balance"
            placeholder="Balance"
            value={newMerchant.balance}
            onChange={handleChange}
            required
          />
          <button type="submit">Create New Merchant</button>
        </form>
      </div>
    </div>
  );
}

export default AddMerchant;

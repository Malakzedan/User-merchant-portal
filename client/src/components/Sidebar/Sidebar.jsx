import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaStore } from "react-icons/fa";
import { ReactComponent as UsersIcon } from "../../assets/images/users.svg";
import { ReactComponent as MerchantsIcon } from "../../assets/images/merchants.svg";
import styles from "./Sidebar.module.css"; // Import the CSS Module

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Nav className="flex-column">
        <Nav.Item className="mb-3">
          <Link to="/users" className={styles.navLink}>
            <div className={styles.navLinkIcon}>
              <UsersIcon size={20} />
              {/* <div className={styles.iconContent}></div> */}
            </div>
            Users
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/merchants" className={styles.navLink}>
            <div className={styles.navLinkIcon}>
              <MerchantsIcon size={20} />
              {/* <div className={styles.iconContent}></div> */}
            </div>
            Merchants
          </Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Sidebar;

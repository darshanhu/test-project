import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Footer.module.css";
import FabButton from "../Fab/Fab";

const Footer = () => {
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <footer>
      <div className={styles.footerText}>
        Streamlining Invoicing Solutions for Small and Medium Businesses
      </div>
      {user && <FabButton />}
    </footer>
  );
};

export default Footer;

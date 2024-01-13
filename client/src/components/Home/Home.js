import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.hero}>
        <h1>Easiest invoicing for freelancers and small businesses</h1>
        <div className={styles.paragraph}>
          <p>
            Unlocking Efficiency, Cipher Invoices Simplify Your Billing
            Experience!
          </p>
        </div>
        <div className={styles.imgContainer}>
          <img
            src="https://res.cloudinary.com/dewfged1q/image/upload/v1703824987/banner_izy4xm-_tupqdc.png"
            alt="invoicing-app"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;

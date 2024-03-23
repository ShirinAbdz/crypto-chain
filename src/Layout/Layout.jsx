import styles from "../Layout/Layout.module.css";
import Bitcoin from "../assets/foot.png";
import Circle from "../assets/Circle.svg";
import Logo from "../assets/cryptochain.png";
import Footer from "../assets/footer.png";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={`container-fluid ${styles.navbar}`}>
          <div className="row">
            <div className="col-12">
              <div className={styles.navbarContent}>
                <div>
                  <img
                    className={styles.Logo}
                    src={Logo}
                    alt=" Crypto Chain's logo "
                  />
                </div>
                <div className={styles.socialLinks}>
                  <ul>
                    <li>
                      <a href="https://github.com/ShirinAbdz" target="_blank">
                        <FontAwesomeIcon
                          icon={faGithub}
                          className={styles.icon}
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/shirin-abdollahzadeh-65b689199/"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faLinkedinIn}
                          className={styles.icon}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="mailto:shiringohariii@gmail.com" target="_blank">
                        <FontAwesomeIcon
                          icon={faGoogle}
                          className={styles.icon}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/Shirin_dev" target="_blank">
                        <FontAwesomeIcon
                          icon={faTwitter}
                          className={styles.icon}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.headerContent}>
          <div className={styles.text}>
            <h1>Simplify Your Crypto Experience</h1>
            <table>
              <thead>
                <tr>
                  <th>ReactJs</th>
                  <th> JavaScript</th>
                </tr>
                <tr>
                  <th>Tailwind</th>
                  <th>CoinGecko</th>
                </tr>
              </thead>
            </table>
          </div>
          <div className={styles.imageBox}>
            <img className={styles.Circle} src={Circle} alt="" />
            <div className={styles.bitcoin}>
              <img src={Bitcoin} />
            </div>
            <div className={styles.blurredCircle1}></div>
            <div className={styles.blurredCircle2}></div>
          </div>
        </div>
      </header>
      {children}
      <footer className={styles.footer}>
        <img src={Footer} alt=" Developer's name's logo" />
      </footer>
    </div>
  );
}

export default Layout;

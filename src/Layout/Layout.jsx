import styles from "../Layout/Layout.module.css";
import Bitcoin from "../assets/cube.png";
import Logo from "../assets/cryptochain.svg";

import React from "react";
import "../global.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Layout({ children }) {
  return (
    <div className={`container-fluid ${styles.container}`}>
      <header className={`container-fluid ${styles.header}`}>
        <div className={`container-fluid ${styles.navbar}`}>
          <div className="row">
            <div className="col-12">
              <div className={styles.navbarContent}>
                <div className={styles.headerLogo}>
                  <h1>CrytoChain</h1>
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

        <div
          className={`flex justify-between xs:flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row ${styles.headerContent}`}
        >
          <div
            className={`2xl:w-8/12 xl:w-6/12 lg:w-6/12 md:w-7/12 sm:w-10/12 xs:w-12/12  ${styles.text}`}
          >
            <ul>
              <li>
                <h1>
                  The Best Platfrom to Analyze <span>Crypto Currency </span> Prices
                  
                </h1>
              </li>
              <li>
                <h3>
                  Discover the ultimate platform for analyzing cryptocurrency
                  prices. Our streamlined interface offers real-time updates,
                  advanced charting, and expert market analysis. Whether you're
                  a seasoned trader or new to crypto, we provide the tools for
                  confident decision-making.
                </h3>
              </li>
            </ul>
          </div>
          <div
            className={` xs:w-4/12 sm:W-4/12 md:w-5/12 lg:w-5/12 xl:w-5/12 2xl:w-3/12 ${styles.bitcoin}`}
          >
            <img src={Bitcoin} />
          </div>
        </div>
      </header>
      {children}
      <div className={`container-fluid ${styles.footer}`}>
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
    </div>
  );
}

export default Layout;

import styles from "../Layout/Layout.module.css";
function Layout({ children }) {
  return (
    <div>
      <header className={styles.header}>
        <h1>Crypto App</h1>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Shirin with ❤ </p>
      </footer>
    </div>
  );
}

export default Layout;

import { useLocation } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className={location.pathname === "/" ? "hidden" : styles.navbar}>
      <div className={styles.box}>
        <div className={styles.left_side}>
          <img className={styles.logo} src="/images/NCPALogo.jpg" alt="logo" />
          <h1 className={styles.title}>NATIONAL CHILD PROTECTION AUTHORITY</h1>
        </div>
        <button className={styles.logout_button}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;

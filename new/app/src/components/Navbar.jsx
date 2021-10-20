import { useLocation } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const history = useHistory();

  const onLogout = async () => {
    history.push("/");
  };

  return (
    <div className={location.pathname === "/" ? "hidden" : styles.navbar}>
      <div className={styles.box}>
        <div className={styles.left_side}>
          <img className={styles.logo} src="/images/NCPALogo.jpg" alt="logo" />
          <h1 className={styles.title}>NATIONAL CHILD PROTECTION AUTHORITY</h1>
        </div>
        <button onClick={onLogout} className={styles.logout_button}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;

import styles from "../styles/Login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <div className={styles.left_side}>
          <img className={styles.logo} src="/images/NCPALogo.jpg" alt="logo" />
          <h2 className={styles.title}>NATIONAL CHILD PROTECTION AUTHORITY</h2>
        </div>
        <div className={styles.right_side}>
          <h1 className={styles.title}>Portal</h1>
          <div className={styles.form}>
            <input
              className={styles.text_box}
              type="text"
              name="username"
              id="username"
              placeholder="Username"
            />
            <input
              className={styles.text_box}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <button className={styles.login_button}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

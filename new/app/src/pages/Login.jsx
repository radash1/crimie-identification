import { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "../styles/Login.module.css";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username,
      password,
    };
    axios.post("http://localhost:5000/api/login", data).then((res) => {
      if (res.data.result != null) {
        history.push("/search");
      } else {
        setErrorMsg("Username or Password is incorrect!");
      }
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <div className={styles.left_side}>
          <img className={styles.logo} src="/images/NCPALogo.jpg" alt="logo" />
          <h2 className={styles.title}>NATIONAL CHILD PROTECTION AUTHORITY</h2>
        </div>
        <div className={styles.right_side}>
          <h1 className={styles.title}>Portal</h1>
          <form className={styles.form}>
            <input
              className={styles.text_box}
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className={styles.text_box}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={onSubmit} className={styles.login_button}>
              Login
            </button>
            <p className={styles.error}>{errorMsg}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

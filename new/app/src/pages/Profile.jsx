import styles from "../styles/Profile.module.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const [actions, setActions] = useState([]);
  const location = useLocation();
  const data = location.data;
  const history = useHistory();

  const getData = () => {
    const value = {
      type: "physical",
    };

    axios.post("http://localhost:5000/api/profile", value).then((res) => {
      if (res.data.result != null) {
        const result = res.data.result;
        setActions(result.actions.split(","));
      } else {
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const onGoBack = async () => {
    history.push("/search");
  };

  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <div className={styles.title_block}>
          <button onClick={onGoBack} className={styles.back_button}>
            Go Back
          </button>
          <h1 className={styles.title}>Criminal Profile</h1>
        </div>
        <div className={styles.data}>
          <div className={styles.row}>
            <p className={styles.text}>Name:</p>
            <p className={styles.value}>{data.name}</p>
          </div>
          <div className={styles.row}>
            <p className={styles.text}>Age:</p>
            <p className={styles.value}>{data.suspect_age}</p>
          </div>
          <div className={styles.row}>
            <p className={styles.text}>History:</p>
            <p className={styles.value}>{data.behavior}</p>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.actions}>
          <h3>Prevent Actions</h3>
          <div className={styles.action_list}>
            {actions.map((a) => (
              <p className={styles.action_item}>• {a}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

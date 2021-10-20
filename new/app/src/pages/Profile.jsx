import styles from "../styles/Profile.module.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Profile = () => {
  const [actions, setActions] = useState([]);
  const location = useLocation();
  const data = location.data;

  useEffect(() => {

  }, [])

  const name = data.name;
  const age = data.suspect_age;
  const history = data.behavior;
  // const actions = [
  //   "Lorem ipsum dolor sit amet consectetur",
  //   "Lorem ipsum dolor sit amet consectetur",
  //   "Lorem ipsum dolor sit amet consectetur",
  //   "Lorem ipsum dolor sit amet consectetur",
  // ];

  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <div className={styles.title_block}>
          <button className={styles.back_button}>Go Back</button>
          <h1 className={styles.title}>Criminal Profile</h1>
        </div>
        <div className={styles.data}>
          <div className={styles.row}>
            <p className={styles.text}>Name:</p>
            <p className={styles.value}>{name}</p>
          </div>
          <div className={styles.row}>
            <p className={styles.text}>Age:</p>
            <p className={styles.value}>{age}</p>
          </div>
          <div className={styles.row}>
            <p className={styles.text}>History:</p>
            <p className={styles.value}>{history}</p>            
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

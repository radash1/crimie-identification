import styles from "../styles/Profile.module.css";

const Profile = () => {
  const name = "gamini";
  const age = 32;
  const history = ["Attempt to "];
  const actions = [
    "Lorem ipsum dolor sit amet consectetur",
    "Lorem ipsum dolor sit amet consectetur",
    "Lorem ipsum dolor sit amet consectetur",
    "Lorem ipsum dolor sit amet consectetur",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <div className={styles.title_block}>
          <button className={styles.back_button}>Go Back</button>
          <h1 className={styles.title}>Criminal Profile</h1>
        </div>
        <div className={styles.data}>
          <div className={styles.row}>
            <p className={styles.text}>Name</p>
            <p className={styles.value}>{name}</p>
          </div>
          <div className={styles.row}>
            <p className={styles.text}>Age</p>
            <p className={styles.value}>{age}</p>
          </div>
          <div className={styles.row}>
            <p className={styles.text}>Name</p>
            <div className={styles.items}>
              {history.map((h) => (
                <p className={styles.item_row}>{h}</p>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.actions}>
          <h1>Prevent Actions</h1>
          <div className={styles.action_list}>
            {actions.map((a) => (
              <p className={styles.action_item}>a</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

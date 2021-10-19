import styles from "../styles/Search.module.css";

const Search = () => {
  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <h1 className={styles.title}>Search From</h1>
        <div className={styles.form}>
          <div className={styles.row}>
            <div className={styles.left_side}>
              <p>Suspect Name</p>
              <input
                className={styles.text_box}
                type="text"
                name="suspect_name"
                id="suspect_name"
              />
            </div>
            <div className={styles.right_side}>
              <p>Suspect Age</p>
              <input
                className={styles.text_box}
                type="text"
                name="suspect_age"
                id="suspect_age"
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.left_side}>
              <p>Victim Name</p>
              <input
                className={styles.text_box}
                type="text"
                name="victim_name"
                id="victim_name"
              />
            </div>
            <div className={styles.right_side}>
              <p>Victim Age</p>
              <input
                className={styles.text_box}
                type="text"
                name="victim_age"
                id="victim_age"
              />
            </div>
          </div>
          <div className={styles.row}>
            <p>Victim Relationship</p>
            <select
              className={styles.select_box}
              name="victim_relationship"
              id="victim_relationship"
            >
              <option value="test">test</option>
            </select>
          </div>
          <div className={styles.row}>
            <p>Behavior</p>
            <textarea
              className={styles.text_area}
              name="behavior"
              id="behavior"
              cols="80"
              rows="10"
            ></textarea>
          </div>
          <div className={styles.row}>
            <p>Evidence</p>
            <textarea
              className={styles.text_area}
              name="evidence"
              id="evidence"
              cols="80"
              rows="10"
            ></textarea>
          </div>
          <div className={styles.buttons}>
            <button className={styles.search_button}>Search</button>
            <button className={styles.clear_button}>Clear</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styles from "../styles/Search.module.css";

const Search = () => {
  const [suspectName, setSuspectName] = useState("");
  const [suspectAge, setSuspectAge] = useState("");
  const [victimName, setVictimName] = useState("");
  const [victimAge, setVictimAge] = useState("");
  const [type, setType] = useState("");

  const history = useHistory();

  const onSearch = async (e) => {
    e.preventDefault();

    const data = {
      suspectName,
      suspectAge,
      victimName,
      victimAge,
      type,
    };
    axios.post("http://localhost:5000/api/search", data).then((res) => {
      if (res.data.result != null) {
        history.push({
          pathname: "/search-result",
          data: res.data.result,
        });
      } else {
      }
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <h1 className={styles.title}>Search From</h1>
        <form className={styles.form}>
          <div className={styles.row}>
            <div className={styles.left_side}>
              <p>Suspect Name</p>
              <input
                className={styles.text_box}
                type="text"
                name="suspect_name"
                id="suspect_name"
                onChange={(e) => setSuspectName(e.target.value)}
              />
            </div>
            <div className={styles.right_side}>
              <p>Suspect Age</p>
              <input
                className={styles.text_box}
                type="text"
                name="suspect_age"
                id="suspect_age"
                onChange={(e) => setSuspectAge(e.target.value)}
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
                onChange={(e) => setVictimName(e.target.value)}
              />
            </div>
            <div className={styles.right_side}>
              <p>Victim Age</p>
              <input
                className={styles.text_box}
                type="text"
                name="victim_age"
                id="victim_age"
                onChange={(e) => setVictimAge(e.target.value)}
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
              <option value="" disabled selected>
                Select your option
              </option>
              <option value="mother">mother</option>
              <option value="father">father</option>
              <option value="mother's boyfriend">mother's boy friend</option>
              <option value=""></option>
            </select>
          </div>
          <div className={styles.row}>
            <p>Type</p>
            <select
              style={{ width: "530px" }}
              onChange={(e) => setType(e.target.value)}
              className={styles.select_box}
              name="type"
              id="type"
            >
              <option value="" disabled selected>
                Select your option
              </option>
              <option value="physical">physical</option>
              <option value="mental">mental</option>
              <option value="sexual">sexual</option>
              <option value="neglect">neglect</option>
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
            <button onClick={onSearch} className={styles.search_button}>
              Search
            </button>
            <button className={styles.clear_button}>Clear</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;

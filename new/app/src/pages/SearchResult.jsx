import SearchItem from "../components/SearchItem";
import styles from "../styles/SearchResult.module.css";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

const SearchResult = () => {
  const location = useLocation();
  const data = location.data;
  const history = useHistory();

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
          <h1 className={styles.title}>Search Result</h1>
        </div>
        <div className={styles.result_count}>
          <p>{data.length} records found</p>
        </div>
        <div className={styles.result}>
          {data.map((item) => (
            <SearchItem key={item._id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;

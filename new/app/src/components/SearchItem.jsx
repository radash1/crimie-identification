import styles from "../styles/SearchItem.module.css";
import { useHistory } from "react-router-dom";

const SearchItem = ({ data }) => {
  const history = useHistory();

  const onClick = () => {
    history.push({
      pathname: `/profile/${data._id}`,
      data,
    });
  };

  return (
    <div className={styles.item} onClick={onClick}>
      <p className={styles.name}>{data.name}</p>
      <p className={styles.age}>Age: {data.age}</p>
    </div>
  );
};

export default SearchItem;

import styles from "../styles/SearchItem.module.css";

const SearchItem = ({ name, age }) => {
  return (
    <div className={styles.item}>
      <p className={styles.name}>{name}</p>
      <p className={styles.age}>Age: {age}</p>
    </div>
  );
};

export default SearchItem;

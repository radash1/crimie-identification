import SearchItem from "../components/SearchItem";
import styles from "../styles/SearchResult.module.css";

const SearchResult = () => {
  const data = [
    { name: "john", age: 28 },
    { name: "steve", age: 25 },
    { name: "siri", age: 28 },
    { name: "kolla", age: 35 },
    { name: "aiya", age: 28 },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <div className={styles.title_block}>
          <button className={styles.back_button}>Go Back</button>
          <h1 className={styles.title}>Search Result</h1>
        </div>
        <div className={styles.result_count}>
          <p>{data.length} records found</p>
        </div>
        <div className={styles.result}>
          {data.map((item) => (
            <SearchItem name={item.name} age={item.age} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;

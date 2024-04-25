import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={`${styles.container}`}>
      {" "}
      {/* New class for full-page */}
      <div className={`${styles.panWrapper}`}>
        <div className={`${styles.pan}`}>
          <div className={`${styles.food}`}></div>
          <div className={`${styles.panBase}`}></div>
          <div className={`${styles.panHandle}`}></div>
        </div>
        <div className={`${styles.panShadow}`}></div>
      </div>
    </div>
  );
}

export default Loader;

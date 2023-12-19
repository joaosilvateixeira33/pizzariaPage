import styles from "./recommend.module.scss";

export const Recommend = ({ children }) => {
  return (
    <section className={styles.recommendContainer}>
      <h2>Recommend</h2>
      <div className={styles.recommendList}>{children}</div>
    </section>
  );
};

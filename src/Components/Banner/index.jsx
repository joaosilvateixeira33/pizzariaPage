import styles from "./banner.module.scss";

export const Banner = () => {
  return (
    <section className={styles.bannerContainer}>
      <div className={styles.infoBanner}>
        <h1>Friday pizza!</h1>
        <h2>Time to enjoy our delicious pizza.</h2>
        <button className={styles.btnOrder}>ORDER NOW</button>
      </div>
    </section>
  );
};

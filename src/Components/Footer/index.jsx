import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.credits}>
        <p>&copy; Pizza Time - 2023 </p>
        <p>developed for Js</p>
      </div>
    </footer>
  );
};

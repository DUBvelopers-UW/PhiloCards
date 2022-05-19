import styles from "../styles/Footer.module.scss";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.banner}>
          <h1 className={styles.title}>
            <span>philo</span> <span>cards</span>
          </h1>
          <div className={styles.contact}>
            <p>philo.cards@gmail.com</p>
            <p>206.294.8126</p>
          </div>
        </div>

        <div className={styles["footer-nav"]}>
          <div>
            <h2>explore</h2>
            <ul>
              <li>home</li>
              <li>shop</li>
              <li>about us</li>
            </ul>
          </div>
          <div>
            <h2>shop</h2>
            <ul>
              <li>the game</li>
              <li>reviews</li>
            </ul>
          </div>
          <h2>follow</h2>
        </div>
      </footer>
    </>
  );
}

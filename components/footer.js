import styles from "../styles/Footer.module.scss";
import { IconContext } from "react-icons";
import {
  IoMailOutline,
  IoCallOutline,
  IoLogoFacebook,
  IoLogoInstagram,
} from "react-icons/io5";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.banner}>
          <h1 className={styles.title}>
            <span>philo</span> <span>cards</span>
          </h1>
          <div className={styles.contact}>
            <div>
              <IoMailOutline />
              <a href="mailto:philo.cards@gmail.com">philo.cards@gmail.com</a>
            </div>
            <div>
              <IoCallOutline />
              <a className={styles.call} href="tel:206-294-8126">
                206.294.8126
              </a>
            </div>
          </div>
        </div>

        <div className={styles["footer-nav"]}>
          <div>
            <h2>explore</h2>
            <ul>
              <li>
                <a href="/">home</a>
              </li>
              <li>
                <a href="/shop">shop</a>
              </li>
              <li>
                <a href="/about">about us</a>
              </li>
            </ul>
          </div>
          <div>
            <h2>shop</h2>
            <ul>
              <li>the game</li>
              <li>reviews</li>
            </ul>
          </div>
          <div>
            <h2>follow</h2>
            <IconContext.Provider value={{ className: "react-icons" }}>
              <div className={styles["social-icons"]}>
                <a href="https://www.facebook.com/philocards" target="_blank">
                  <IoLogoFacebook size={24} />
                </a>
                <a
                  href="https://www.instagram.com/philo_cards/"
                  target="_blank"
                >
                  <IoLogoInstagram size={24} />
                </a>
              </div>
            </IconContext.Provider>
          </div>
        </div>

        <img src="image/yellow.svg" className={styles.images}/>
        <img src="image/blue.svg" className={styles.images}/>
      </footer>

    </>
  );
}

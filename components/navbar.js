import ActiveLink from "../components/ActiveLink";
import Image from "next/image";
import styles from "../styles/Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src="/image/logo.svg" height={48} width={48} />
        <span className={styles.title}>philo</span>
      </div>
      <div className={styles.links}>
        <ActiveLink href="/">home</ActiveLink>
        <ActiveLink href="/shop">shop</ActiveLink>
        <ActiveLink href="/about">about us</ActiveLink>
        <div>
          <span>cart</span>
        </div>
      </div>
    </nav>
  );
}

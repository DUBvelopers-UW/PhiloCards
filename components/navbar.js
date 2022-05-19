import Link from "next/link";
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
        <Link href="/">
          <a>home</a>
        </Link>
        <Link href="/shop">
          <a>shop</a>
        </Link>
        <Link href="/about">
          <a>about us</a>
        </Link>
        <div>
          <span>cart</span>
        </div>
      </div>
    </nav>
  );
}

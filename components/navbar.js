import Image from "next/image";
import Link from "next/link";
import ActiveLink from "../components/ActiveLink";
import styles from "../styles/Navbar.module.scss";

export default function Navbar({ toggleCart }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <Image src="/image/logo.svg" height={48} width={48} />
            <span className={styles.title}>philo</span>
          </a>
        </Link>
      </div>
      <div className={styles.links}>
        <ActiveLink href="/">home</ActiveLink>
        <ActiveLink href="/shop">shop</ActiveLink>
        <ActiveLink href="/about">about us</ActiveLink>
        <div onClick={() => toggleCart()}>
          <button>cart</button>
        </div>
      </div>
    </nav>
  );
}

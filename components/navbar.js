import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <span className={styles.title}>phillo</span>
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
  )
}

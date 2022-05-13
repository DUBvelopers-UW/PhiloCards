import styles from '../styles/Shop.module.css'

export default function Shop() {
  return (
    <>
      <h1 className={styles.title}>SHOP</h1>
      <div className={styles.top_section}>

        <div>
        <img src="image/card.png" className={styles.sizing} />
        </div>

        <ul className={styles.left}>
          <ul><p className={styles.title}>Lorem ipsum</p></ul>
          <ul><p className={styles.section}>dolor sit amet, consectetur adipiscing elit.</p></ul>
          <ul><a href="#" className={styles.button}>ADD TO CART</a></ul>
        </ul>

      </div>


      <div className={styles.second_section}>
        <div className={styles.right}>
        <p className={styles.title}>Lorem ipsum</p>
        <p className={styles.section}>
          dolor sit amet, consectetur adipiscing elit. dolor sit amet, consectetur adipiscing elit. dolor sit amet, consectetur adipiscing elit. dolor sit amet, consectetur adipiscing elit. dolor sit amet, consectetur adipiscing elit. dolor sit amet, consectetur adipiscing elit.
        </p>
        </div>

        <div>
          <img src="image/card.png" className={styles.small} />
        </div>
      </div>

      <div className={styles.third_section}>
        <h1 className={styles.title}>REVIEWS</h1>
      </div>
    </>
  )
}

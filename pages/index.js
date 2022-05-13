import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.intro}>

        <div className={styles.introTop}>
          <h1 className={styles.philoHead}>
            PHILO
            <br/>
            <span className={styles.shiftLeft}>CARDS</span>
          </h1>
          <p className={styles.philoText}>
            so many things to <i>philo-bout</i>
          </p>
        </div>

        <div className={styles.introBottom}>
          <h3 className={`${styles.coreHeader} ${styles.center}`}>WHAT IS PHILO CARDS?</h3>
          <p>
            If you're looking to get to know someone else better, learn new
            perspectives and ideas, or to be introduced to philosophy, our is for
            you! Philo Card is a student-found card game that transform the way
            you can connect with somebody
          </p>
        </div>

      </div>

      <div className={styles.grey}>
        <h3 className={`${styles.coreHeader} ${styles.shiftRight}`}>HOW TO PLAY</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          dolor quidem vero possimus! Omnis asperiores, fuga quisquam ducimus,
          nisi expedita doloremque vitae quae tempore excepturi possimus eum
          sunt incidunt hic.
        </p>
      </div>

      <div className="">
        <h3>TESTIMONIALS</h3>
      </div>
    </div>
  )
}

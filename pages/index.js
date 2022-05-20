import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.top_section_up}>
        <h1 className={styles.philoCards}>Philo</h1>
        <h1 className={styles.cards}>Cards</h1>
        <p className={styles.text}>so many things to <span className={styles.emp}>&nbsp;philo</span>-bout</p>
        <img src="image/Card.svg" className={styles.cardSVG}/>
        
      </div>

      
        <div className={styles.top_right}>
          <div className={styles.top_right_text}>
            <div><h3 className={styles.title}>What is PhiloCards</h3></div>
            <div><p className={styles.text_size}>If you're looking to get to know someone else better, learn new perspectives and ideas, or to be introduced to philosophy, our product is for you! Philo Card is a student-found card game that transforms the way you can connect with somebody.</p></div>
          </div>
        </div>
      


      <div className={styles.second_section}>
      <div>
        <img src="image/card.png" className={styles.sizing} />
        </div>

        <div className={styles.top_right2}>
          <div className={styles.top_right_text2}>
            <div><h3 className={styles.shift}>How To Play</h3></div>
            <div><p className={styles.section}>1. dolor sit amet, consectetur adipiscing elit.</p></div>
            <div><p className={styles.section}>2. dolor sit amet, consectetur adipiscing elit.</p></div>
          </div>

          <div>
            <button className={styles.button}>I WANT A DECK!</button>
          </div>
        </div>
      </div>

      
      <div className={styles.third_section}>
      <h3 className={styles.title}>REVIEWS</h3>
      <div><p className={styles.section}>This shit sucks ass and is overprices 0/10</p></div>
      </div>
    </>
  )
}

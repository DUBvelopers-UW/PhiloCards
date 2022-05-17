import styles from '../styles/About.module.css'

export default function About() {
  return (
    <>
      <div className={styles.team}>
        <h1 className={styles.title}>ABOUT THE TEAM</h1>
        <ul className={styles.team}>
          <li className={styles.member}>
            <div className={styles.overlay} text-content="placeholder text">
              <img src="image\cloverProfile.JPG" className={styles.image} />
            </div>
            <p className={styles.name}>
              <b>Clover Li</b>
            </p><p>CEO</p>
          </li>
          <li className={styles.member}>
            <div className={styles.overlay} text-content="placeholder text">
              <img src="image/vishankProfile.jpeg" className={styles.image} />
            </div>
            <p className={styles.name}>
              <b>Vishank Rughwani</b></p><p>CFO
            </p>
          </li>
        </ul>
        <ul className={styles.team}>
          <li className={styles.member}>
            <div className={styles.overlay} text-content="placeholder text">
              <img src="image/khanProfile.jpeg" className={styles.image} />
            </div>
            <p className={styles.name}>
              <b>Kahn Wang</b>
            </p><p>CTO</p>
          </li>
          <li className={styles.member}>
            <div className={styles.overlay} text-content="placeholder text">
              <img src="image/scottProfile.PNG" className={styles.image} />
            </div>
            <p className={styles.name}>
              <b>Scott Ni</b>
            </p><p>CMO</p>
          </li>
          <li className={styles.member}>
            <div className={styles.overlay} text-content="placeholder text">
              <img src="image/jasonProfile.JPG" className={styles.image} />
            </div>
            <p className={styles.name}>
              <b>Jason Weng</b>
            </p><p>COO</p>
          </li>
        </ul>
      </div>

      <div className="location-section">
        <h1>LOCATION</h1>

        <p>
          If you lived near the University of Washington, we can deliver the
          product to you! Contact us via Email or by text! Address: 4801 24th NE
          Seattle, WA 98105 Phone #+1 2062948126
        </p>
      </div>
      <div className="social-section">
        <h1>SOCIAL MEDIA</h1>
      </div>
    </>
  )
}

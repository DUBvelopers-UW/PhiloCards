import styles from '../styles/Shop.module.css'

export default function Shop() {
  return (
    <>
      <h1 className={styles.title}>SHOP</h1>
      <div className={styles.top_section}>

        <div>
        <img src="image/card.png" className={styles.sizing} />
        </div>

        <div className={styles.top_right}>
          <div className={styles.top_right_text}>
            <div><p className={styles.title}>Lorem ipsum</p></div>
            <div><p className={styles.section}>dolor sit amet, consectetur adipiscing elit.</p></div>
          </div>

          <div>
            <button className={styles.button}>ADD TO CART</button>
          </div>
        </div>

      </div>


      <div className={styles.second_section}>
        <div className={styles.second_text}>
          <div><p className={styles.title}>Lorem ipsum</p></div>
          <div>
            <p className={styles.section}>
            dolor sit amet, consectetur adipiscing elit. dolor sit amet, consectetur adipiscing elit. dolor sit amet, consectetur adipiscing elit. dolor sit amet, consectetur adipiscing elit. dolor sit amet, consectetur adipiscing elit. dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div>
          <img src="image/card.png" className={styles.sizing} />
        </div>
      </div>

      <h1 className={styles.title}>REVIEWS</h1>
      <div className={styles.third_section}>
        <div className={styles.third_top}>
            <div className={styles.third_top_left}>
              <div className={styles.third_top_text}>
                <div><p className={styles.rating}>5.0</p></div>
                <div><p className={styles.review}>7 reviews</p></div>
              </div>
              <div>
                <img src="image/star.png"/>
              </div>
            </div>

            <div className={styles.third_top_right}>
              <div><img className={styles.review_pic} src="image/card.png"/></div>
              <div><img className={styles.review_pic} src="image/card.png"/></div>
              <div><img className={styles.review_pic} src="image/card.png"/></div>
              <div><img className={styles.review_pic} src="image/card.png"/></div>
              <div><img className={styles.review_pic} src="image/card.png"/></div>
              <div><img className={styles.review_pic} src="image/card.png"/></div>
              <div><img className={styles.review_pic} src="image/card.png"/></div>
              <div><img className={styles.review_pic} src="image/card.png"/></div>
            </div>
        </div>

        <div className={styles.third_bottom}>
          <div className={styles.third_text}>
            <div><p className={styles.name}>David S.</p></div>
            <div><p className={styles.review}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor sit amet consectetur adipiscing elit. dolor sit amet, consectetur adipiscing elit. dolor sit amet</p></div>
          </div>

          <div className={styles.third_text}>
            <div><p className={styles.name}>David S.</p></div>
            <div><p className={styles.review}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor sit amet consectetur adipiscing elit. dolor sit amet, consectetur adipiscing elit. dolor sit amet</p></div>
          </div>

          <div className={styles.third_text}>
            <div><p className={styles.name}>David S.</p></div>
            <div><p className={styles.review}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor sit amet consectetur adipiscing elit. dolor sit amet, consectetur adipiscing elit. dolor sit amet</p></div>
          </div>

        </div>
      </div>
    </>
  )
}

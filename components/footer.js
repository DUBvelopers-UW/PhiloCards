export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__addr">
          <p className="whiteP">PHILO</p>
          <p className="whiteP">CARDS</p>

          <address>
            <span className="whiteB">4801 24th NE Seattle, WA 98105</span>
            <br />
            <span className="whiteB">philo.cards@gmail.com</span> <br />
            <span className="whiteB">206.294.8126</span>
          </address>
        </div>

        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">EXPLORE</h2>

            <ul className="nav__ul">
              <li>
                <a href="#">HOME</a>
              </li>

              <li>
                <a href="#">SHOP</a>
              </li>

              <li>
                <a href="#">ABOUT US</a>
              </li>
            </ul>
          </li>

          <li className="nav__item">
            <h2 className="nav__title">SHOP</h2>

            <ul className="nav__ul">
              <li>
                <a href="#">THE GAME</a>
              </li>

              <li>
                <a href="#">REVIEWS</a>
              </li>
            </ul>
          </li>

          <li className="nav__item">
            <h2 className="nav__title">FOLLOW</h2>

            <ul className="nav__ul nav__ul--extra">
              <li>
                <a href="#">Privacy Policy</a>
              </li>

              <li>
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </li>
        </ul>
      </footer>
    </>
  )
}

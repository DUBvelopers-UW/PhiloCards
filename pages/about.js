export default function About() {
  return (
    <>
      <div className="about-section">
        <h1>ABOUT THE TEAM</h1>
        <ul>
          <li>
            <div className="overlay" text-content="placeholder text">
              <img src="images/placeholder.PNG" className="image" />
            </div>
            <p className="name">
              <b>Clover Li</b>CEO
            </p>
          </li>
          <li>
            <div className="overlay" text-content="placeholder text">
              <img src="images/placeholder.PNG" className="image" />
            </div>
            <p className="name">
              <b>Vishank Rughwani</b>CFO
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <div className="overlay" text-content="placeholder text">
              <img src="images/placeholder.PNG" className="image" />
            </div>
            <p className="name">
              <b>Kahn Wang</b>CTO
            </p>
          </li>
          <li>
            <div className="overlay" text-content="placeholder text">
              <img src="images/placeholder.PNG" className="image" />
            </div>
            <p className="name">
              <b>Scott Ni</b>CMO
            </p>
          </li>
          <li>
            <div className="overlay" text-content="placeholder text">
              <img src="images/placeholder.PNG" className="image" />
            </div>
            <p className="name">
              <b>Jason Weng</b>COO
            </p>
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

export default function Shop() {
  return (
    <>
      <div className="top_section">
        <h1>SHOP</h1>
        <img src="images/card.png" className="left" />
        <div className="shift_right">
          <p className="title">Lorem ipsum</p>
          <p>dolor sit amet, consectetur adipiscing elit.</p>
          <a href="cart.html" className="button">
            ADD TO CART
          </a>
        </div>
      </div>

      <div className="second_section">
        <img src="images/card.png" className="right" />
        <div className="shift_left">
          <p className="title">Lorem ipsum</p>
          <p>
            dolor sit amet, consectetur adipiscing elit. dolor sit amet,
            consectetur adipiscing elit. dolor sit amet, consectetur adipiscing
            elit. dolor sit amet, consectetur adipiscing elit. dolor sit amet,
            consectetur adipiscing elit. dolor sit amet, consectetur adipiscing
            elit.
          </p>
        </div>
      </div>

      <div className="third_section">
        <h1>REVIEWS</h1>
      </div>
    </>
  )
}

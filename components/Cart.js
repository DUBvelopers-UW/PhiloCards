import Image from "next/image";
import cardImage from "../public/image/card.png";
import { MdOutlineCancelPresentation } from "react-icons/md";

function Cart({ isOpen, toggleCart }) {
  return (
    <div className={`cart ${isOpen ? "open" : ""}`}>
      <h1>cart</h1>
      <div className="close" onClick={() => toggleCart()}>
        <MdOutlineCancelPresentation size={32} />
      </div>
      <span className="cart-msg">You have 1 item(s) in your cart</span>
      <div className="cart-content-wrapper">
        <div className="cart-detail">
          <picture>
            <Image
              className="cardImage"
              src={cardImage}
              objectFit="cover"
              alt="Image of the product"
            />
          </picture>
          <div className="item-wrapper">
            <span className="item-name">Philo Cards</span>
            <div className="item-amount">
              <span>-</span>
              <span>1</span>
              <span>+</span>
            </div>
          </div>
        </div>
      </div>
      <div className="cart-bottom">
        <div className="subtotal">
          <span>subtotal</span>
          <span>$ 20.00</span>
        </div>
        <div className="">
          <button className="order-btn">place order</button>
        </div>
      </div>
      <style jsx>{`
        .cart {
          background: beige;
          width: clamp(400px, 40vw, 520px);
          height: 100vh;
          z-index: 1000;
          position: fixed;
          top: 0;
          right: 0;
          display: flex;
          flex-grow: 1;
          min-height: 100%;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          gap: 2rem;
          transition: transform 0.2s linear;
          transform: translate3d(40vw, 0, 0);
          padding: 1rem;
        }

        .cart[class*="open"] {
          transform: translate3d(0, 0, 0);
        }

        h1 {
          text-transform: uppercase;
          margin-bottom: 3rem;
        }

        .cart-msg {
          font-size: var(--font-body-2);
          margin-bottom: 1rem;
        }

        .cart-content-wrapper {
          flex: 1 1 0%;
        }

        .cart-detail {
          display: flex;
          gap: 2rem;
        }

        .item-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          font-family: var(--font-heading);
          font-size: var(--font-body-2);
        }

        .item-amount {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          cursor: pointer;
        }

        .cart .close {
          background-color: var(--color-brand-orange-light);
          padding: 1rem;
          position: fixed;
          display: flex;
          justify-content: center;
          align-items: center;
          top: 0;
          right: 0;
          cursor: pointer;
        }

        picture {
          width: 200px;
        }

        .cart-bottom {
          display: flex;
          gap: 2rem;
          flex-direction: column;
          margin-bottom: 2rem;
        }

        .subtotal {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          font-family: var(--font-body);
          font-size: var(--font-body-3);
          padding: 1.5rem 1rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        }

        .order-btn {
          padding: 1rem 4rem;
          border-radius: 2rem;
          background-color: var(--color-brand-green-dark);
          color: var(--color-font-dark);
          text-transform: uppercase;
          font-family: var(--font-heading);
          font-size: var(--font-body-2);
        }
      `}</style>
    </div>
  );
}

export default Cart;

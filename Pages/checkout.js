import styles from '../styles/checkout.module.css';
import Image from 'next/image';
import cardimg from '../public/image/card.png';

export default function Checkout() {
  return (
  <>
    <h1 className={styles.title}>CHECKOUT</h1>
    <div className={styles.checkout_container}>
      <div className={styles.summary}>
        <h2>Summary</h2>
        <div className={styles.select_cards}>
          <Image
            src={cardimg}
            alt='Image of PhiloCards'
            width={141}
            height={90}
          />
          <div className={styles.select_amount}>
            <p>Philo Cards</p>
            <div>
              <button type="button">-</button>
              <p>1</p>
              <button type="button">+</button>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className={styles.sub_total}>
          <p className={styles.discount}>Discount <span>-$ 4.00</span></p>
          <p className={styles.subtotal}>Subtotal <span>$ 16.00</span></p>
        </div>
      </div>
      <div className={styles.right_side}>
        <div className={styles.shipping_container}>
          <h2>Shipping Method</h2>
          <div>
            <input type='radio' name='shipping-method' id='ups-ground'/>
            <label htmlFor='ups-ground'>UPS Ground<span>$4.99</span></label>
          </div>
          <div>
            <input type='radio' name='shipping-method' id='on-foot'/>
            <label htmlFor='ups-ground'>On-Foot Delivery<span>Free</span></label>
          </div>
          <div>
            <input type='radio' name='shipping-method' id='Pickup'/>
            <label htmlFor='ups-ground'>Pickup<span>Free</span></label>
          </div>
          <hr></hr>
          <p>Total <span>$16.00</span></p>
        </div>
        <div className={styles.payment_container}>
          <h2>Payment Method</h2>
          <p>Credit Card Number</p>
          <input type='text' name='credit-card' id='credit-card'/>
          <div>
            <div>
              <p>Exp Date</p>
              <input type='text' name='exp-date'/>
            </div>
            <div>
              <p>CVV</p>
              <input type='text' name='cvv'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

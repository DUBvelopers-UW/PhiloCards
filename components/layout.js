import { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head";
import Cart from "../components/Cart.js";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Head>
        <title>Philo Cards</title>
      </Head>
      <div className={`cart-overlay ${isOpen ? "open" : ""}`}></div>
      <Navbar toggleCart={toggleCart} />
      <main>{children}</main>
      <Cart isOpen={isOpen} toggleCart={toggleCart} />
      <Footer />
      <style jsx>{`
        .cart-overlay[class*="open"] {
          position: fixed;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.3);
          z-index: 100;
          transition: background-color 0.1s linear;
        }
      `}</style>
    </>
  );
}

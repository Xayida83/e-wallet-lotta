import { Link } from "react-router-dom";
import Card from "../components/Card";
import { useState } from "react";
import styles from './Home.module.css';
import Button from "../components/Button";
import { useSelector } from "react-redux";

const Home = () => {
  const cards = useSelector((state) => state.cards.cards);

  const maxCards = 4;

  return (
    <div className={styles.container}>
      <h1>Your Cards</h1>
      <ul className={styles.cardList}>
        {cards.map((card, index) => (
          <li key={index}>
            <Card
              cardholder={card.cardholder}
              cardNumber={card.cardNumber}
              expireMonth={card.expireMonth}
              expireYear={card.expireYear}
              issuer={card.issuer}
            />
          </li>
        ))}
      </ul>
       {/* Visa "Add New Card"-knappen endast om användaren har färre än 4 kort */}
      {cards.length < maxCards ? (
        <Button label="Add New Card" to="/addcard" type="link" />
      ) : (
        <p>You have reached the maximum number of cards (4).</p>
      )}       
    </div>
  );
};

export default Home;
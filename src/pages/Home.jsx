import { Link } from "react-router-dom";
import Card from "../components/Card";
import { useState } from "react";
import styles from './Home.module.css';
import Button from "../components/Button";

const Home = () => {
  const [cards, setCards] = useState([
    {
      cardholder: "Brandon Duarte Tsegai",
      cardNumber: "5000 0000 0000 0000",
      expireMonth: "12",
      expireYear: "25",
      issuer: "MasterCard"
    },
    {
      cardholder: "Jesper Engdahl",
      cardNumber: "4111 1111 1111 1111",
      expireMonth: "11",
      expireYear: "24",
      issuer: "Visa"
    }
  ]);

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
        <Button label="Add New Card" to="/addcard" />
      ) : (
        <p>You have reached the maximum number of cards (4).</p>
      )}       
    </div>
  );
};

export default Home;
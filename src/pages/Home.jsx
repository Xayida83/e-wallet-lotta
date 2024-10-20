import Card from "../components/Card";
import styles from './Home.module.css';
import Button from "../components/Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import gear from '../assets/images/gear.svg'



const Home = () => {
  const cards = useSelector((state) => state.cards.cards);
  const activeCardId = useSelector((state) => state.cards.activeCardId);
  const navigate = useNavigate();

  //* Sortera så att det aktiva kortet ligger först genom att skapa en kopia av kortlistan och sorterar den baserat på om kortets id är samma som activeCardId
  const sortedCards = [...cards].sort((a, b) => {
    if (a.id === activeCardId) return -1; //* Placera aktivt kort överst
    if (b.id === activeCardId) return 1;
    return 0;
  });

  const maxCards = 4;

  return (
    <div className={styles.container}>
      <div className={styles.settingsIcon}>
        <img src={gear} alt="Settings" onClick={() => navigate('/settings')}/>
      </div>
      <h1>Your Cards</h1>
      <ul className={styles.cardList}>
        {sortedCards.map((card, index) => (
          <li key={index}>
            <div onClick={() => navigate(`/card/${card.id}`)}>
              {card.id === activeCardId && <p>Active Card</p>}
              <Card
                cardholder={card.cardholder}
                cardNumber={card.cardNumber}
                expireMonth={card.expireMonth}
                expireYear={card.expireYear}
                issuer={card.issuer}
              />
            </div>
          </li>
        ))}
      </ul>
       {/* Visa "Add New Card"-knappen endast om användaren har färre än 4 kort */}
      {cards.length < maxCards ? (
        <Button label="Add A Card" to="/addCard" />
      ) : (
        <p>You have reached the maximum number of cards (4).</p>
      )}       
    </div>
  );
};

export default Home;
import styles from './Card.module.css';
import visa from '../assets/images/visa.svg'
import mastercard from '../assets/images/mastercard.svg'
import ankademin from '../assets/images/ankademin.png'
import cardChip from '../assets/images/card-chip.png'

const Card = ({ cardholder, cardNumber, expireMonth, expireYear, issuer }) => {
  
  const formatCardNumber = (cardnumber) => {
    if (!cardNumber) return '';

    // Ta bort befintliga mellanslag
    const cleanNumber = cardNumber.replace(/\s+/g, ''); 
  
    // Visa de första 8 siffrorna och maskera de sista
    const maskedNumber = cleanNumber.slice(0, 8) + ' **** ****';
    
    // Lägg till mellanslag för formatering
    return maskedNumber.replace(/(\d{4})(?=\d)/g, "$1 ");
  };
  const truncatedName = cardholder.length > 19 ? cardholder.slice(0, 19) : cardholder;


  return (
    <div className={`${styles.cardContainer} ${styles[issuer.toLowerCase()]}`}> {/* Dynamisk klass beroende på kortutgivare */} 
      <div className={styles.card}>
        <img className={styles.cardChip} src={cardChip} alt="Card chip" />
        <div className={styles.cardNumber}>
          {formatCardNumber(cardNumber)}
        </div>  
        <div className={styles.cardholder}>
          {truncatedName.toUpperCase()}
        </div>
        <div className={styles.expiryDate}>
          {expireMonth}/{expireYear} 
        </div>
        
        <div className={styles.cardLogo}>
          {issuer === "MasterCard" && <img src={mastercard} alt="MasterCard Logo" />}
          {issuer === "Visa" && <img src={visa} alt="Visa Logo" />}
          {issuer === "Ankademin" && <img src={ankademin} alt="Ankademin Logo" />}
        </div>
      </div>
    </div>
  );
}

export default Card;

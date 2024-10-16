import styles from './Card.module.css';
import visa from '../assets/images/visa.svg'
import mastercard from '../assets/images/mastercard.svg'
import ankademin from '../assets/images/ankademin.png'

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

  return (
    <div className={`${styles.card} ${styles[issuer.toLowerCase()]}`}> {/* Dynamisk klass beroende på kortutgivare */}
      <div className={styles.cardContent}>
        <div className={styles.cardChip}></div>
        <div className={styles.cardDetails}> 
          <div className={styles.cardNumber}>
            {formatCardNumber(cardNumber)}
          </div>
          <div className={styles.cardholder}>
            {cardholder.toUpperCase()}
          </div>
          <div className={styles.expiryDate}>
            VALID THRU: {expireMonth}/{expireYear} 
          </div>
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

import styles from './Card.module.css';
import visa from '../assets/images/visa.svg'
import mastercard from '../assets/images/mastercard.svg'

const Card = ({ cardholder, cardNumber, expireMonth, expireYear, issuer }) => {
  return (
    <div className={`${styles.card} ${styles[issuer.toLowerCase()]}`}> {/* Dynamisk klass beroende på kortutgivare */}
      <div className={styles.cardContent}>
        <div className={styles.cardChip}></div>
        <div className={styles.cardDetails}> 
          <div className={styles.cardNumber}>
            {cardNumber}
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
        </div>
      </div>
    </div>
  );
}

export default Card;

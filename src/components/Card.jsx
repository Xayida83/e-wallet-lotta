import styles from './Card.module.css';
import mastercardLogo from '../assets/images/mastercard-logo.png';
import visaLogo from '../assets/images/visa-logo.png';

const Card = ({ cardholder, cardNumber, expireMonth, expireYear, issuer }) => {
  return (
    <div className={`${styles.card} ${styles[issuer.toLowerCase()]}`}> {/* Dynamisk klass beroende på kortutgivare */}
      <div className={styles.cardContent}>
        <div className={styles.cardChip}></div>
        <div className={styles.cardDetails}> {/* Korrigerat stavfel */}
          <div className={styles.cardNumber}>
            {cardNumber}
          </div>
          <div className={styles.cardholder}>
            {cardholder.toUpperCase()}
          </div>
          <div className={styles.expiryDate}> {/* Korrigerat stavfel */}
            VALID THRU: {expireMonth}/{expireYear} {/* Rättad strängkonkatenering */}
          </div>
        </div>
        <div className={styles.cardLogo}>
          {issuer === "MasterCard" && <img src={mastercardLogo} alt="MasterCard Logo" />}
          {issuer === "Visa" && <img src={visaLogo} alt="Visa Logo" />}
        </div>
      </div>
    </div>
  );
}

export default Card;

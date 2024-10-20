import Button from './Button'; // Din knappkomponent
import styles from './CardForm.module.css';

const CardForm = ({ cardholder, setCardholder, cardNumber, setCardNumber, expiryDate, setExpiryDate, cvc, setCvc, issuer, setIssuer, handleSubmit, errors }) => {

  const handleExpiryDateChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); //* Tar bort alla icke-siffror
    if (value.length >= 2) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    }
    setExpiryDate(value);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      
        <div className={styles.formDiv}>
          <label className={styles.formLabel}>Card Number:</label>
          <input className={styles.formInput}
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
            pattern="\d{16}"  
            maxLength="16" 
            title="Card number must be exactly 16 digits only"
          />
        </div>
        <div className={styles.formDiv}>
          <label className={styles.formLabel}>Cardholder Name:</label>
          <input className={styles.formInput}
            type="text" 
            value={cardholder} 
            onChange={(e) => setCardholder(e.target.value)} 
            required
            pattern="^[A-Za-zÅÄÖåäö\s]+$"   
            title="Cardholder name must only contain letters and spaces"
          />
        </div>    
      <div className={styles.formDiv}>
        <label className={styles.formLabel}>MM/YY</label>
        <input className={styles.formInput}
          type="text"
          value={expiryDate}
          onChange={handleExpiryDateChange}
          required
          placeholder="MM/YY"
          // pattern="^(0[1-9]|1[0-2])\/\d{2}$"  
          title="Expiration date must be in format MM/YY"
          maxLength="5"
        />
        {errors?.expiryDate && <p style={{ color: 'red' }}>{errors.expiryDate}</p>}
      </div>
      <div className={styles.formDiv}>
        <label className={styles.formLabel}>Security Number</label>
        <input className={styles.formInput}
          type="text"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          required
          pattern="\d{3}" 
          maxLength="3"
          placeholder="CVC"
          title="CVC must be 3 digits"
        />
        {errors?.cvc && <p style={{ color: 'red' }}>{errors.cvc}</p>}
      </div>
      <div>
        <label className={styles.formLabel}>Issuer:</label>
        <select className={styles.formSelect}
         value={issuer} 
         onChange={(e) => setIssuer(e.target.value)}>
          <option className={styles.formOption} value="MasterCard">MasterCard</option>
          <option value="Visa">Visa</option>
          <option value="Ankademin">Ankademin</option>
        </select>
      </div>
      <Button className={styles.formButton}  label="Save" type="submit" />
    </form>
  );
};

export default CardForm;

import Button from './Button'; // Din knappkomponent

const CardForm = ({ cardholder, setCardholder, cardNumber, setCardNumber, expiryDate, setExpiryDate, cvc, setCvc, issuer, setIssuer, handleSubmit, errors }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Cardholder Name:</label>
        <input 
          type="text" 
          value={cardholder} 
          onChange={(e) => setCardholder(e.target.value)} 
          required
          pattern="^[A-Za-zÅÄÖåäö\s]+$"   
          title="Cardholder name must only contain letters and spaces"
        />
      </div>
      <div>
        <label>Card Number:</label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
          pattern="\d{16}"  
          maxLength="16" 
          title="Card number must be exactly 16 digits only"
        />
      </div>
      <div>
        <label>MM/ÅÅ</label>
        <input
          type="text"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          required
          placeholder="MM/ÅÅ"
          pattern="^(0[1-9]|1[0-2])\/\d{2}$"  
          title="Expiration date must be in format MM/YY"
          maxLength="5"
        />
        {errors?.expiryDate && <p style={{ color: 'red' }}>{errors.expiryDate}</p>}
      </div>
      <div>
        <label>CVC</label>
        <input
          type="text"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          required
          pattern="\d{3}" 
          maxLength="3"
          placeholder="3 siffror"
          title="CVC must be 3 digits"
        />
        {errors?.cvc && <p style={{ color: 'red' }}>{errors.cvc}</p>}
      </div>
      <div>
        <label>Issuer:</label>
        <select value={issuer} onChange={(e) => setIssuer(e.target.value)}>
          <option value="MasterCard">MasterCard</option>
          <option value="Visa">Visa</option>
          <option value="Ankademin">Ankademin</option>
        </select>
      </div>
      <Button label="Save" type="submit" />
      {/* <Button label="Cancel" to="/" /> */}
    </form>
  );
};

export default CardForm;

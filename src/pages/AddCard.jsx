import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../redux/cardSlice';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';

const AddCard = () => {
  const [cardholder, setCardholder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState(''); 
  const [cvc, setCvc] = useState('');
  const [issuer, setIssuer] = useState('MasterCard');
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

   //* Delar upp MM/ÅÅ i månad och år för lagring
   const parseExpiryDate = (value) => {
    const [month, year] = value.split('/');
    return { month, year };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { month, year } = parseExpiryDate(expiryDate);
    const currentYear = new Date().getFullYear() % 100; //* Tar de två sista siffrorna på året
    const currentMonth = new Date().getMonth() + 1; //* Ger nuvarande månad (1-12)

    const newErrors = {};

    //* Validera att månad är mellan 01-12
    if (parseInt(month, 10) < 1 || parseInt(month, 10) > 12) {
      newErrors.expiryDate = 'Invalid month.';
    }
    
    //* Validera att år inte är tidigare än nuvarande år
    if (parseInt(year, 10) < currentYear) {
      newErrors.expiryDate = 'Year cannot be in the past.';
    }
    
    //* Om året är innevarande år, kontrollera att månaden är minst en månad framåt
    if (parseInt(year, 10) === currentYear && parseInt(month, 10) < currentMonth) {
      newErrors.expiryDate = 'Expiration date cannot be in the past.';
    }

    //* Validera CVC som exakt 3 siffror
    if (!/^\d{3}$/.test(cvc)) {
      newErrors.cvc = 'CVC must be 3 digits.';
    }

    //* Om vi har några fel, stoppa formuläret från att skickas
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newCard = {
      id: Date.now().toString(), //* Generera ett unikt ID baserat på nuvarande tid
      cardholder,
      cardNumber,
      expireMonth: expiryDate.split('/')[0], //* Separera MM från MM/YY
      expireYear: expiryDate.split('/')[1],  
      cvc,
      issuer,
    };

    //* Dispatcha action till Redux för att lägga till kortet
    dispatch(addCard(newCard));

    //* Navigera tillbaka till Home-sidan efter att kortet lagts till
    navigate('/');
  };

  return (
    <div>
      <h1>Add a New Card</h1>

      <Card
        cardholder={cardholder || 'YOUR NAME'}
        cardNumber={cardNumber || '0000 0000 0000 0000'}
        expireMonth={expiryDate ? expiryDate.split('/')[0] : 'MM'}
        expireYear={expiryDate ? expiryDate.split('/')[1] : 'YY'}  
        issuer={issuer}
      />

      <form onSubmit={handleSubmit}>
        <div>
          <label>Cardholder Name:</label>
          <input 
            type="text" 
            value={cardholder} 
            onChange={(e) => setCardholder(e.target.value)} 
            required
            pattern="^[A-Za-zÅÄÖåäö\s]+$"   //* Tillåter endast bokstäver och mellanslag
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
            pattern="\d{16}"  //* Exakt 16 siffror
            maxLength="16"  //* Begränsa inmatning till 16 siffror
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
            pattern="^(0[1-9]|1[0-2])\/\d{2}$"  // Tillåter formatet MM/ÅÅ
            title="Expiration date must be in format MM/YY"
            maxLength="5"
          />
          {errors.expiryDate && <p style={{ color: 'red' }}>{errors.expiryDate}</p>}
        </div>
        <div>
          <label>CVC</label>
          <input
            type="text"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            required
            pattern="\d{3}"  // Exakt 3 siffror
            maxLength="3"
            placeholder="3 siffror"
            title="CVC must be 3 digits"
          />
          {errors.cvc && <p style={{ color: 'red' }}>{errors.cvc}</p>}
        </div>
        <div>
          <label>Issuer:</label>
          <select value={issuer} onChange={(e) => setIssuer(e.target.value)}>
            <option value="MasterCard">MasterCard</option>
            <option value="Visa">Visa</option>
            <option value="AmericanExpress">American Express</option>
          </select>
        </div>
        <Button label="Add Card" type="submit" />
        <Button label="Cancal" type="button" onClick={() => navigate('/')} />
      </form>
    </div>
  );
};

export default AddCard;

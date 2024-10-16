import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../redux/cardSlice';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import CardForm from '../components/CardForm';
import { validateForm } from '../helpers/validateForm';


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
  
    const validationErrors = validateForm({ expiryDate, cvc });
  
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  
    const newCard = {
      id: Date.now().toString(),
      cardholder,
      cardNumber,
      expireMonth: expiryDate.split('/')[0],
      expireYear: expiryDate.split('/')[1],  
      cvc,
      issuer,
    };
  
    dispatch(addCard(newCard));
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

      <CardForm 
        cardholder={cardholder}
        setCardholder={setCardholder}
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
        expiryDate={expiryDate}
        setExpiryDate={setExpiryDate}
        cvc={cvc}
        setCvc={setCvc}
        issuer={issuer}
        setIssuer={setIssuer}
        handleSubmit={handleSubmit}
        errors={errors}
      />
    </div>
  );
};

export default AddCard;

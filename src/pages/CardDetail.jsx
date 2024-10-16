import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateCard, deleteCard, activateCard } from '../redux/cardSlice';
import Button from '../components/Button'; // Importera din Button-komponent
import Card from '../components/Card'; // Använd befintlig Card-komponent
import styles from './CardDetail.module.css'; // Antag att vi använder CSS-moduler för stilar
import { validateForm } from '../helpers/validateForm';
import CardForm from '../components/CardForm';


const CardDetail = () => {
  const { id } = useParams(); // Hämta kortets ID från URL
  const navigate = useNavigate(); // För att navigera tillbaka till startsidan
  const dispatch = useDispatch();

  // Hämta kortet från Redux store
  const card = useSelector((state) => state.cards.cards.find((card) => card.id === id));
  const activeCardId = useSelector((state) => state.cards.activeCardId); // Hämta det aktiva kortets ID

  const [errors, setErrors] = useState({});
  const [editedCard, setEditedCard] = useState({ ...card }); // Lokalt tillstånd för att redigera kortet

  if (!card) {
    return <p>Card not found!</p>; // Om kortet inte finns
  }

  const handleSave = (e) => {
    e.preventDefault();
    const validationErrors = validateForm({
      expiryDate: `${editedCard.expireMonth}/${editedCard.expireYear}`,
      cvc: editedCard.cvc,
    });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Sätt errors om validering misslyckas
      return;
    }
    dispatch(updateCard(editedCard));
    navigate('/');
  };

  const handleActivate = () => {
    dispatch(activateCard(id)); // Aktivera kortet
  };

  const handleDelete = () => {
    dispatch(deleteCard(id)); // Radera kortet
    navigate('/'); // Navigera tillbaka till startsidan efter radering
  };

  // Kontrollera om kortet är aktivt
  const isCardActive = card.id === activeCardId;

  return (
    <div className={styles.cardDetailContainer}>
      {/* Använd Card-komponenten för att visa förhandsvisningen av kortet */}
      <div className={styles.cardPreview}>
        <Card
          cardholder={editedCard.cardholder}
          cardNumber={editedCard.cardNumber}
          expireMonth={editedCard.expireMonth}
          expireYear={editedCard.expireYear}
          issuer={editedCard.issuer}
        />
      </div>

      {/* Redigeringsformulär */}
      {!isCardActive && (
        <CardForm
          cardholder={editedCard.cardholder}
          setCardholder={(val) => setEditedCard({ ...editedCard, cardholder: val })}
          cardNumber={editedCard.cardNumber}
          setCardNumber={(val) => setEditedCard({ ...editedCard, cardNumber: val })}
          expiryDate={`${editedCard.expireMonth}/${editedCard.expireYear}`}
          setExpiryDate={(val) => {
            const [month, year] = val.split('/');
            setEditedCard({ ...editedCard, expireMonth: month, expireYear: year });
          }}
          cvc={editedCard.cvc}
          setCvc={(val) => setEditedCard({ ...editedCard, cvc: val })}
          issuer={editedCard.issuer}
          setIssuer={(val) => setEditedCard({ ...editedCard, issuer: val })}
          handleSubmit={handleSave}
          errors={errors}
        />
      )}
      

      {/* Aktivera och radera knappar */}
      <div className={styles.actions}>
        {/* Aktivera-knappen visas om kortet är inaktivt */}
        {!isCardActive && <Button label="Activate card" type="button" onClick={handleActivate} />}

        {/* Radera-knappen visas om kortet är inaktivt */}
        {!isCardActive && <Button label="Delete card" type="button" onClick={handleDelete} />}

        {/* Om kortet är aktivt, visa ett meddelande */}
        {isCardActive && <p>This card is active and cannot be edited or deleted.</p>}
        <Button label="Back" to="/" />
      </div>
    </div>
  );
};

export default CardDetail;

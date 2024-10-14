import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateCard, deleteCard, activateCard } from '../redux/cardSlice';
import Button from '../components/Button'; // Importera din Button-komponent
import Card from '../components/Card'; // Använd befintlig Card-komponent
import styles from './CardDetail.module.css'; // Antag att vi använder CSS-moduler för stilar

const CardDetail = () => {
  const { id } = useParams(); // Hämta kortets ID från URL
  const navigate = useNavigate(); // För att navigera tillbaka till startsidan
  const dispatch = useDispatch();

  // Hämta kortet från Redux store
  const card = useSelector((state) => state.cards.cards.find((card) => card.id === id));
  const activeCardId = useSelector((state) => state.cards.activeCardId); // Hämta det aktiva kortets ID

  const [editedCard, setEditedCard] = useState({ ...card }); // Lokalt tillstånd för att redigera kortet

  if (!card) {
    return <p>Card not found!</p>; // Om kortet inte finns
  }

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(updateCard(editedCard)); // Uppdatera kortet i Redux
    navigate('/'); // Navigera till startsidan efter att kortet har sparats
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
      <form className={styles.cardForm} onSubmit={handleSave}>
        <div>
          <label>Card Number:</label>
          <input
            type="text"
            value={editedCard.cardNumber}
            onChange={(e) => setEditedCard({ ...editedCard, cardNumber: e.target.value })}
            pattern="\d{16}"
            maxLength="16"
            title="16 digits required"
            required
            disabled={isCardActive} // Förhindra redigering om kortet är aktivt
          />
        </div>

        <div>
          <label>Cardholder Name:</label>
          <input
            type="text"
            value={editedCard.cardholder}
            onChange={(e) => setEditedCard({ ...editedCard, cardholder: e.target.value })}
            required
            disabled={isCardActive} // Förhindra redigering om kortet är aktivt
          />
        </div>

        <div className={styles.row}>
          <div>
            <label>Expiry Date (MM/YY):</label>
            <input
              type="text"
              value={`${editedCard.expireMonth}/${editedCard.expireYear}`}
              onChange={(e) => {
                const [month, year] = e.target.value.split('/');
                setEditedCard({ ...editedCard, expireMonth: month, expireYear: year });
              }}
              pattern="^(0[1-9]|1[0-2])\/\d{2}$"
              title="MM/YY format required"
              required
              disabled={isCardActive} // Förhindra redigering om kortet är aktivt
            />
          </div>

          <div>
            <label>CVC:</label>
            <input
              type="text"
              value={editedCard.cvc}
              onChange={(e) => setEditedCard({ ...editedCard, cvc: e.target.value })}
              maxLength="3"
              pattern="\d{3}"
              title="3 digits required"
              required
              disabled={isCardActive} // Förhindra redigering om kortet är aktivt
            />
          </div>
        </div>

        <div>
          <label>Vendor:</label>
          <select
            value={editedCard.issuer}
            onChange={(e) => setEditedCard({ ...editedCard, issuer: e.target.value })}
            disabled={isCardActive} // Förhindra redigering om kortet är aktivt
          >
            <option value="MasterCard">MasterCard</option>
            <option value="Visa">Visa</option>
            <option value="AmericanExpress">American Express</option>
            <option value="Nordea">Nordea</option>
          </select>
        </div>

        {isCardActive ? (
          <Button label="Back" type="button" onClick={() => navigate('/')} />
        ) : (
          <Button label="Save changes" type="submit" />
        )}
      </form>

      {/* Aktivera och radera knappar */}
      <div className={styles.actions}>
        {/* Aktivera-knappen visas om kortet är inaktivt */}
        {!isCardActive && <Button label="Activate card" type="button" onClick={handleActivate} />}

        {/* Radera-knappen visas om kortet är inaktivt */}
        {!isCardActive && <Button label="Delete card" type="button" onClick={handleDelete} />}

        {/* Om kortet är aktivt, visa ett meddelande */}
        {isCardActive && <p>This card is active and cannot be edited or deleted.</p>}
      </div>
    </div>
  );
};

export default CardDetail;

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { activateCard, deleteCard, updateCard } from "../redux/cardSlice";
import Button from "../components/Button";

const CardDetail = () => {
  const { id } = useParams(); //*Id från URL
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //* Hämta kort från Redux store
  const card = useSelector((state) => state.cards.cards.find((card) => card.id === id));
  const activeCardId = useSelector((state) => state.cards.activeCardId);

  const [isEditing, setIsEditing] = useState(false); //* Hantera redigeringsläga
  const [editedCard, setEditedCard] = useState({ ...card });

  if (!card) {
    return <p>Card not found!</p>
  }

  const handleSave = () => {
    dispatch(updateCard(editedCard)); 
    setIsEditing(false); 
  };

  const handleActivate = () => {
    dispatch(activateCard(id)); 
  };

  const handleDelete = () => {
    dispatch(deleteCard(id)); 
    navigate('/'); 
  };

  return (
    <div>
      <div>Card Detail</div>

      <div>
        <label>Cardholder Name:</label>
        {isEditing ? (
          <input
          type="text"
          value={editedCard.cardholder}
          onChange={(e) => setEditedCard({ ...editedCard, cardholder: e.target.value })}
          />
        ) : (
          <p>{card.cardholder}</p>
        )}
      </div>

      <div>
        <label>Expiry Date</label>
        {isEditing ? (
          <input
            type="text"
            value={`${editedCard.expireMonth}/${editedCard.expireYear}`}
            onChange={(e) => {
              const [month, year] = e.target.value.split('/');
              setEditedCard({ ...editedCard, expireMonth: month, expireYear: year });
            }}
          />
        ) : (
          <p>{card.expireMonth}/{card.expireYear}</p>
        )}
      </div>

      <div>
        <label>Issuer:</label>
        {isEditing ? (
          <select
            value={editedCard.issuer}
            onChange={(e) => setEditedCard({ ...editedCard, issuer: e.target.value })}
          >
            <option value="MasterCard">MasterCard</option>
            <option value="Visa">Visa</option>
            <option value="AmericanExpress">American Express</option>
          </select>
        ) : (
          <p>{card.issuer}</p>
        )}
      </div>

      {/* Visa endast redigeringskontroller om kortet är inaktivt */}
      {card.id !== activeCardId && (
        <>
          {isEditing ? (
            <>
               <Button label="Save" type="button" onClick={handleSave} />
               <Button label="Cancel" type="button" onClick={() => setIsEditing(false)} />
            </>
          ) : (
            <Button label="Edit" type="button" onClick={() => setIsEditing(true)} />
          )}

          <Button label="Activate" type="button" onClick={handleActivate} />
          <Button label="Delete" type="button" onClick={handleDelete} />
        </>
      )}
      {card.id === activeCardId && <p>This card is active and cannot be edited or deleted.</p>}
      
      {/* Om kortet är aktivt, visa meddelande */}
      <Button label="Back to Home" type="button" onClick={() => navigate('/')} />
    </div>
  );
};

export default CardDetail;
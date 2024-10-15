import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import { setTheme } from "../redux/settingsSlice";
import { deleteInactiveCards } from "../redux/cardSlice";
import styles from './Settings.module.css';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react"; // Lägg till useEffect

const Settings = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.settings.theme); // Hämta nuvarande tema
  const cards = useSelector((state) => state.cards.cards); // Hämta alla kort
  const navigate = useNavigate();

  const handleThemeChange = (e) => {
    dispatch(setTheme(e.target.value)); // Ändra temat i Redux
  };

  const handleDeleteInactive = () => {
    dispatch(deleteInactiveCards()); // Radera alla inaktiva kort
    navigate('/');
  };

  // useEffect för att logga temat när det ändras
  useEffect(() => {
    console.log("New theme selected:", theme);
  }, [theme]); // Körs när temat ändras

  return (
    <div className={styles.settingsContainer}>
      <h1>Settings</h1>

      {/* Temaväljare */}
      <div className={styles.themeSelector}>
        <h2>Choose a theme:</h2>
        <select value={theme} onChange={handleThemeChange}>
          <option value="dark">Dark</option>
          <option value="light">Light</option>
          <option value="season">Season / Holiday</option>
        </select>
      </div>

      {/* Radera inaktiva kort */}
      <div className={styles.deleteInactive}>
        <h2>Delete all inactive cards:</h2>
        <Button label="Delete Inactive Cards" type="button" onClick={handleDeleteInactive} />
      </div>

      <Button label="Back" type="button" onClick={() => navigate('/')} />
    </div>
  );
};

export default Settings;

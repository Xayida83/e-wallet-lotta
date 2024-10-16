import { useDispatch } from "react-redux";
import Button from "../components/Button";
import { setTheme } from "../redux/settingsSlice";
import { deleteInactiveCards } from "../redux/cardSlice";
import styles from './Settings.module.css';
import { useNavigate } from "react-router-dom";
import { darkTheme, lightTheme, seasonTheme } from "../theme/theme";

const Settings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleThemeChange = (newTheme) => {
    dispatch(setTheme(newTheme)); //* Skicka action till Redux för att ändra temat
  };

  const handleDeleteInactive = () => {
    dispatch(deleteInactiveCards()); //* Radera alla inaktiva kort
    navigate('/');
  };

  return (
    <div className={styles.settingsContainer}>
      <h1>Settings</h1>

      {/* Temaväljare */}
      <div>
        <h2>Choose a theme:</h2>
        <Button label="Light"  onClick={() => handleThemeChange(lightTheme)} />
        <Button label="Dark" onClick={() => handleThemeChange(darkTheme)} />
        <Button label="Season/Holiday" onClick={() => handleThemeChange(seasonTheme)} />
      </div>
     
      {/* Radera inaktiva kort */}
      <div className={styles.deleteInactive}>
        <h2>Delete all inactive cards:</h2>
        <Button label="Delete Inactive Cards" onClick={handleDeleteInactive} />
      </div>

      <Button label="Back" to="/" />
    </div>
  );
};

export default Settings;

import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({ label, to, type, onClick }) => {
  if (type === 'link') {
    // Returnera länk-knapp om type är "link"
    return (
      <Link to={to} className={styles.button}>
        {label}
      </Link>
    );
  }

  // Annars returnera vanlig knapp
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;

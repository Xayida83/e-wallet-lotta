import { Link } from 'react-router-dom'; 
import styles from './Button.module.css';

const Button = ({ label, to }) => {
  return (
    <Link to={to} className={styles.button}>
      {label}
    </Link>
  );
};

export default Button;
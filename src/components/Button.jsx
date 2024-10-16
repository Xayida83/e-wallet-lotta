import styled from 'styled-components';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';
import { darken } from 'polished';

// Styled component för att hantera temabaserad styling
const ThemedButton = styled.button`
  background-color: ${({ theme }) => theme.buttonBg}; /* Dynamiskt tema */
  color: ${({ theme }) => theme.buttonText}; /* Dynamiskt tema */
  border: ${({ theme }) => theme.buttonBorder};
  box-shadow: ${({ theme }) => theme.buttonShadow};
  &:hover {
    background-color: ${({ theme }) => darken(0.1, theme.buttonBg)};
  }
  & span:hover {
     background-color: ${({ theme }) => darken(0.2, theme.buttonBg)};
  }
`;

// Din befintliga Button-komponent
const Button = ({ label, to, onClick }) => {
  if (to) {
    return (
      <Link to={to} className={`${styles.button}`}> 
        <ThemedButton as="span">{label}</ThemedButton> {/* Temadelen hanteras här */}
      </Link>
    );
  }
 
  return (
    <ThemedButton className={styles.button} onClick={onClick}>
      {label}
    </ThemedButton>
  );
};

export default Button;

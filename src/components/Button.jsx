import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

// Styled component för att hantera temabaserad styling
const ThemedButton = styled.button`
  background-color: ${({ theme }) => theme.buttonBg}; /* Dynamiskt tema */
  color: ${({ danger, theme }) => danger ? 'red' : theme.buttonText}; /* Kontrollera om danger prop finns */
  border: ${({ theme }) => theme.buttonBorder};
  box-shadow: ${({ theme }) => theme.buttonShadow};
  width: var(--button-width);
  padding: var(--button-padding);
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-fat);
  text-align: center;
  text-decoration: none; 
  cursor: pointer;
  border-radius: var(--border-radius);
    &:hover {
      background-color: ${({ theme }) => darken(0.1, theme.buttonBg)};
    }
`;

// Din befintliga Button-komponent
const Button = ({ label, to, onClick, danger = false }) => {
  if (to) {
    return (
      <Link to={to}> 
        <ThemedButton as="button" danger={danger}>{label}</ThemedButton> {/* Temadelen hanteras här */}
      </Link>
    );
  }
 
  return (
    <ThemedButton onClick={onClick} danger={danger}>
      {label}
    </ThemedButton>
  );
};

export default Button;

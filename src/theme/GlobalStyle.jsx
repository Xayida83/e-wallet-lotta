import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
:root {
  // background-color: ${({ theme }) => theme.bgColor};
  background: linear-gradient(
    ${({ theme }) => theme.angle}, 
    ${({ theme }) => theme.color1}, 
    ${({ theme }) => theme.color2}, 
    ${({ theme }) => theme.color3}
  );
  color: ${({ theme }) => theme.textColor};
}
`;

export default GlobalStyle;
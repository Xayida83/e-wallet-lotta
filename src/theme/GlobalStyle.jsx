import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.textColor};
}
`;

export default GlobalStyle;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddCard from "./pages/AddCard";
import CardDetail from "./pages/CardDetail";
import Settings from "./pages/Settings";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import applyTheme from "./utils/themeUtils";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/GlobalStyle";

function App() {
  const theme = useSelector((state) => state.settings.theme); // Hämta det valda temat från Redux

  useEffect(() => {
    applyTheme(theme); 
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addcard" element={<AddCard />} />
            <Route path="/card/:id" element={<CardDetail />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App

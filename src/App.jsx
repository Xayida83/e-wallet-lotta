import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddCard from "./pages/AddCard";
import CardDetail from "./pages/CardDetail";
import Settings from "./pages/Settings";
import { useEffect } from "react";
import { useSelector } from "react-redux";
// import './App.css';

function App() {
  const theme = useSelector((state) => state.settings.theme); // Hämta valt tema från Redux

  useEffect(() => {
    // Ändra färgvariabler baserat på valt tema
    if (theme === 'dark') {
      document.documentElement.style.setProperty('--text-color', '#ffffff');
      document.documentElement.style.setProperty('--bg-color', '#242424');
    } else if (theme === 'light') {
      document.documentElement.style.setProperty('--text-color', '#000000');
      document.documentElement.style.setProperty('--bg-color', '#ffffff');
    } else if (theme === 'season') {
      document.documentElement.style.setProperty('--text-color', '#07043f');
      document.documentElement.style.setProperty('--bg-color', '#e0960d');
    }
  }, [theme]); // Uppdatera variabler när temat ändras


  return (
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
  )
}

export default App

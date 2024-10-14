import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddCard from "./pages/AddCard";
import NotFound from "./pages/NotFound";
import CardDetail from "./pages/CardDetail";

function App() {
  

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addcard" element={<AddCard />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/card/:id" element={<CardDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

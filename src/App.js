import React from 'react'
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/homepage";
import Promo from "./components/promo"

function App() {
  return (
    <Router className="app">
      <Header />
      <Routes>
          <Route exact path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;

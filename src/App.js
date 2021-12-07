import React from 'react'
import Header from "./components/header"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import Promo from "./components/promo";
import HomePage from './pages/homepage/HomePage';


function App() {

  return (
    <Router className="app">
      <Header />
      <Promo />
      <Routes>
          <Route exact path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;

import React, { useState } from 'react'
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/homepage";
import { getCurrentUser } from "./services/authentication";

function App() {

    const [user, setUser] = useState(getCurrentUser())

    const handleUserChange = () => {
        const currentUser = getCurrentUser()
        setUser(currentUser)
    }

    return (
        <Router className="app">
          <Header user={user} setUser={handleUserChange} />
          <Routes>
              <Route exact path="/" element={<HomePage user={user} />} />
          </Routes>
        </Router>
    );
}

export default App;

import React, { useState } from 'react'
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/homepage";
import { getCurrentUser } from "./services/authentication";
import ManagerPage from "./pages/managerpage";
import ProfilePage from "./pages/ProfilePage";
import ClerkPage from "./pages/clerkpage";

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
              <Route exact path="/managers" element={<ManagerPage />} />
              <Route exact path="/profile" element={<ProfilePage />} />
              <Route exact path="/clerk" element={<ClerkPage />} />
          </Routes>
        </Router>
    );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Home from './pages/Home';
import ProfilePage from "./pages/ProfilePage";
import Network from "./pages/Network";
import GroupsPage from "./pages/GroupsPage";
import HowItWorks from "./pages/HowItWorks";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/network" element={<Network />} />
      <Route path="/groups" element={<GroupsPage />} />
      <Route path="/howitworks" element={< HowItWorks/>} />
    </Routes>
  );
}

export default App;

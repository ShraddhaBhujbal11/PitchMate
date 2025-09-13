import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Home from './pages/Home';
import ProfilePage from "./pages/ProfilePage";
import Network from "./pages/Network";
import GroupsPage from "./pages/GroupsPage";
import HowItWorks from "./pages/HowItWorks";
import Events from "./pages/Events";
import About from "./pages/About";
import Landing from "./pages/Landing";
import Startup from "./pages/Startup";
import Homef from "./pages/Homef";
import FounderProfile from "./pages/FounderProfile";
import MyIdea from "./pages/MyIdea";


function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/homef" element={<Homef />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/founderprofile" element={<FounderProfile />} />
      <Route path="/network" element={<Network />} />
      <Route path="/groups" element={<GroupsPage />} />
      <Route path="/howitworks" element={< HowItWorks />} />
      <Route path="/Events" element={<Events />} />
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Landing />} />
      <Route path="/Startup" element={<Startup />} />
      <Route path="/MyIdea" element={<MyIdea />} />

    </Routes>
  );
}

export default App;

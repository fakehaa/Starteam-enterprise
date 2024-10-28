import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import LoginSignup from './components/Auth/Auth';
import EventForm from './components/EventsForm/EventsForm';
import LandingPage from './components/LandingPage/LandingPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< LandingPage/>} />
        <Route path="/events" element={< EventForm/>} />
        <Route path="/auth" element={< LoginSignup/>}/>
      </Routes>
    </Router>
  );
}

export default App;

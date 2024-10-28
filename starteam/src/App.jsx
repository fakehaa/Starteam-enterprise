import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import LoginSignup from './components/Auth/Auth';
import EventForm from './components/EventsForm/EventsForm';
import Homepage from './Pages/homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Homepage/>} />
        <Route path="/events" element={< EventForm/>} />
        <Route path="/auth" element={< LoginSignup/>}/>
      </Routes>
    </Router>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import LandingPage from './components/pages/LandingPage';
import Main from './components/Main';
import { Route, Routes } from 'react-router-dom';
import BookingForm from './components/booking/BookingForm';
import ConfirmedBooking from './components/booking/ConfirmedBooking.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/reservation" element={<Main />} />
        <Route path="/confirmation" element={<ConfirmedBooking />} />
      </Routes>
      <Main />
    </div>
  );
}

export default App;

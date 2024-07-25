import React, { useReducer } from 'react'
import { fetchAPI, submitAPI } from "../utilities/BookingAPI";
import BookingPage from './booking/BookingPage.js';
import { useNavigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage.js';

    const updateTimes = (availableTimes, date) => {
      return fetchAPI(new Date(date)) ;
    };

    function Main() {
        const navigate = useNavigate();


    const initializeTimes =  fetchAPI(new Date()) ;
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
    const submitForm = (formData) => {
      console.log(formData)
      submitAPI(formData);
            navigate("/confirmation");
    };

  return (
    <main>
      {/* <BookingPage
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatch}
        handleSubmitForm={submitForm}
      /> */}
      <LandingPage/>
      {/* <h1>Avaliable Time : {availableTimes}</h1>
      <input
        type="date"
        className="btn btn-primary"
        onChange={(e) => dispatch({ date: e.target.value })}
      /> */}
    </main>
  );
}

export default Main
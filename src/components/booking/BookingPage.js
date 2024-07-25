import React, { useState } from "react";
import BookingForm from "./BookingForm.js";
function BookingPage({ availableTimes, dispatchOnDateChange,handleSubmitForm }) {
  return (
    <div>
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        handleSubmitForm={handleSubmitForm}
      />
    </div>
  );
}

export default BookingPage
import React, { useState } from "react";

function BookingForm({
  availableTimes,
  dispatchOnDateChange,
  handleSubmitForm,
}) {
  const [occasion, setOccasion] = useState();
  const [guests, setGuests] = useState();
  const [date, setDate] = useState();
  const [times, setTime] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitForm(occasion);
  };
  const handleDateChange = (e) => {
    dispatchOnDateChange(e.target.value);
  };
  return (
    <section>
      <h2>Booking Form</h2>
      <p>
        Note: You cannot edit your reservation after submission. Please
        double-check your answer before submitting your reservation request.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">
            First Name
            <input
              type="text"
              className="form-input"
              aria-describedby="firstName"
              placeholder="First Name"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="lastName">
            Last Name
            <input
              type="text"
              className="form-input"
              aria-describedby="lastName"
              placeholder="Last Name"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="NumberOfGuests">
            Number of guests
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              className="form-input"
              aria-describedby="NumberOfGuests"
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="date">
            Choose date
            <input
              onChange={handleDateChange}
              type="date"
              className="form-input"
              aria-describedby="date"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="time">
            Choose time
            <select name="time" className="form-input">
              {availableTimes.map((time) => (
                <option key={time}>{time}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="occasion">
            Occasion
            <select name="occasion" className="form-input">
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
            </select>
          </label>
        </div>
        <input className="btn btn-secondary" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default BookingForm;

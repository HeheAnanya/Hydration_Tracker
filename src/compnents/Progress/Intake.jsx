// Intake.jsx
import React from 'react';
import './Intake.css';

const Intake = ({ selectedDate, intakeHistory, setIntakeHistory, onIntakeChange }) => {
  const dateKey = selectedDate.toISOString().split('T')[0];
  const intake = intakeHistory[dateKey] || 0;

  function handleChange(e) {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      const updated = { ...intakeHistory, [dateKey]: value };
      setIntakeHistory(updated);
      if (onIntakeChange) {
        onIntakeChange(value); // <-- This updates global intake and localStorage
      }
    }
  }

  return (
    <div>
      <input
        type="number"
        value={intake}
        onChange={handleChange}
        placeholder="Enter water intake in ml"
      />
      <p>{intake} ml of water you drank on {dateKey}</p>
    </div>
  );
};

export default Intake;

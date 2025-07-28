// import React from 'react'
// import './Intake.css'

// const Intake = ({intake, setIntake}) => {
//   return (
//     <div>
//         <input typeof='number' value={intake} onChange={(e)=>(setIntake(Number(e.target.value)))}/>

//         <p>{intake} ml of water U drank</p>
//     </div>
//   )
// }

// export default Intake


import React from 'react';
import './Intake.css';

const Intake = ({ selectedDate, intakeHistory, setIntakeHistory }) => {
  const dateKey = selectedDate.toISOString().split('T')[0];
  const intake = intakeHistory[dateKey] || 0;

  function handleChange(e) {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      setIntakeHistory((prev) => ({
        ...prev,
        [dateKey]: value,
      }));
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

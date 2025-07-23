import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarP.css';

const CalendarP = ({ intakeHistory, goal, selectedDate, setSelectedDate }) => {
  function getProgressClass(date) {
    const key = date.toISOString().split('T')[0];
    const intake = intakeHistory[key] || 0;
    const percentage = (intake / goal) * 100;

    if (percentage >= 100) return 'progress-full';
    if (percentage >= 50) return 'progress-half';
    if (percentage > 0) return 'progress-low';
    return null;
  }

  return (
    <div className='calendar'>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileClassName={({ date }) => getProgressClass(date)}
      />
    </div>
  );
};

export default CalendarP;

// ProgressPage.jsx
import React, { useEffect, useState } from 'react';
import Footer from '../compnents/Footer';
import Prog from '../compnents/Progress/Prog';
import LoginForm from '../compnents/Progress/LoginForm';
import Calendar from '../compnents/Progress/Calendar';
import Alarm from '../compnents/Progress/Alarm';
import World from '../compnents/Progress/World';
import './ProgressPage.css';

const ProgressPage = ({ user, setUser }) => {
  const [intake, setIntake] = useState(0);
  const [goal, setGoal] = useState(750); // Default goal
  const [intakeHistory, setIntakeHistory] = useState({});
  const [goalsHistory, setGoalsHistory] = useState({}); // NEW STATE for per-day goals
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formattedDate = selectedDate.toISOString().split('T')[0];
  const today = new Date().toISOString().split('T')[0];

  // Effect to load user-specific data (intake and goals) when user or selected date changes
  useEffect(() => {
    if (user && user.email) {
      // Load intake history for the specific user
      const storedIntakeHistory = JSON.parse(localStorage.getItem(`intake_${user.email}`)) || {};
      setIntakeHistory(storedIntakeHistory);

      // Load goals history for the specific user
      const storedGoalsHistory = JSON.parse(localStorage.getItem(`goals_${user.email}`)) || {};
      setGoalsHistory(storedGoalsHistory);

      // Set intake for the currently selected date
      const currentDayIntake = storedIntakeHistory[formattedDate] || 0;
      setIntake(currentDayIntake);

      // Set goal for the currently selected date (fallback to user's dailyGoal or default)
      const currentDayGoal = storedGoalsHistory[formattedDate] || user.dailyGoal || 750;
      setGoal(currentDayGoal);

    } else {
      // If no user, reset all states to default/empty
      setIntake(0);
      setGoal(750);
      setIntakeHistory({});
      setGoalsHistory({});
    }
  }, [user, formattedDate]); // Dependency array: re-run if user or selected date changes


  // --- Goal Update Function ---
  // This function now updates the goal specifically for the selected date
  function GoalUpdate(newGoal) {
    const parsedNewGoal = Number(newGoal);
    if (isNaN(parsedNewGoal) || parsedNewGoal < 0) return; // Basic validation

    // Update the local goal state for the current day
    setGoal(parsedNewGoal);

    // Save this goal specifically for the selected date in localStorage
    if (user && user.email) {
      const updatedGoalsHistory = { ...goalsHistory, [formattedDate]: parsedNewGoal };
      setGoalsHistory(updatedGoalsHistory); // Update local state
      localStorage.setItem(`goals_${user.email}`, JSON.stringify(updatedGoalsHistory));
    }
  }

  // --- Intake Update Function ---
  function updateIntake(newIntake) {
    const parsedNewIntake = Number(newIntake);
    if (isNaN(parsedNewIntake) || parsedNewIntake < 0) return; // Basic validation

    setIntake(parsedNewIntake);
    if (user && user.email) {
      const updatedHistory = { ...intakeHistory, [formattedDate]: parsedNewIntake };
      setIntakeHistory(updatedHistory); // Update local state
      localStorage.setItem(`intake_${user.email}`, JSON.stringify(updatedHistory));
    }
  }

  return (
    <>
      {user ? (
        <div className="progress-page">
          <div className="dashboard-container">
            <div className="dashboard-left">
              <div className="dashboard-card">
                <Prog intake={intake} goal={goal} setGoal={GoalUpdate} />
              </div>
            </div>
            <div className="dashboard-right">
              <div className="dashboard-card">
                <Calendar
                  intakeHistory={intakeHistory}
                  goal={goal}
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                />
              </div>
              <div className="time-widgets">
                <World />
                {/* <--- REMOVED CONDITIONAL RENDERING HERE */}
<Alarm
  selectedDate={selectedDate}
  intakeHistory={intakeHistory}
  setIntakeHistory={setIntakeHistory}
  updateIntake={updateIntake}
/>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <LoginForm success={setUser} />
      )}
      <Footer />
    </>
  );
};

export default ProgressPage;
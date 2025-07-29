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
  const [goal, setGoal] = useState(750);
  const [intakeHistory, setIntakeHistory] = useState({});
  const [goalsHistory, setGoalsHistory] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formattedDate = selectedDate.toISOString().split('T')[0];

  useEffect(() => {
    if (user && user.email) {
      try {
        const storedIntakeHistory = JSON.parse(localStorage.getItem(`intake_${user.email}`)) || {};
        setIntakeHistory(storedIntakeHistory);

        const storedGoalsHistory = JSON.parse(localStorage.getItem(`goals_${user.email}`)) || {};
        setGoalsHistory(storedGoalsHistory);

        const currentDayIntake = storedIntakeHistory[formattedDate] || 0;
        setIntake(currentDayIntake);

        const currentDayGoal = storedGoalsHistory[formattedDate] || user.dailyGoal || 750;
        setGoal(currentDayGoal);
      } catch (err) {
        console.error('💥 Error reading localStorage:', err);
      }
    } else {
      setIntake(0);
      setGoal(750);
      setIntakeHistory({});
      setGoalsHistory({});
    }
  }, [user, formattedDate]);

  function GoalUpdate(newGoal) {
    const parsedNewGoal = Number(newGoal);
    if (isNaN(parsedNewGoal) || parsedNewGoal < 0) return;

    setGoal(parsedNewGoal);
    if (user && user.email) {
      const updatedGoalsHistory = { ...goalsHistory, [formattedDate]: parsedNewGoal };
      setGoalsHistory(updatedGoalsHistory);
      localStorage.setItem(`goals_${user.email}`, JSON.stringify(updatedGoalsHistory));
    }
  }

function updateIntake(newIntake) {
  const parsedNewIntake = Number(newIntake);
  if (isNaN(parsedNewIntake) || parsedNewIntake < 0) return;

  const updatedValue = intake + parsedNewIntake;

  setIntake(updatedValue);

  if (user && user.email) {
    const updatedHistory = { ...intakeHistory, [formattedDate]: updatedValue };
    setIntakeHistory(updatedHistory);
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

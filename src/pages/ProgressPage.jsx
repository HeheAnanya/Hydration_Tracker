// import React, { useEffect, useState } from 'react';
// import Navbar from '../compnents/Navbar';
// import Footer from '../compnents/Footer';
// import Prog from '../compnents/Progress/Prog';
// import LoginForm from '../compnents/Progress/LoginForm';
// import Calendar from '../compnents/Progress/Calendar';
// import Alarm from '../compnents/Progress/Alarm';
// import World from '../compnents/Progress/World';

// const ProgressPage = () => {
//   const [intake, setIntake] = useState(0);
//   const [user, setUser] = useState(null);
//   const [goal, setGoal] = useState(750);
//   const [intakeHistory, setIntakeHistory] = useState({});
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   const formattedDate = selectedDate.toISOString().split('T')[0];
//   const today = new Date().toISOString().split('T')[0];

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem('user'));
//     if (storedUser) {
//       setUser(storedUser);
//       if (storedUser.dailyGoal) setGoal(storedUser.dailyGoal);

//       const history = JSON.parse(localStorage.getItem(`intake_${storedUser.email}`)) || {};
//       setIntakeHistory(history);

//       const selectedDayIntake = history[formattedDate] || 0;
//       setIntake(selectedDayIntake);
//     }
//   }, []);

//   useEffect(() => {
//     if (user) {
//       const history = JSON.parse(localStorage.getItem(`intake_${user.email}`)) || {};
//       const selectedDayIntake = history[formattedDate] || 0;
//       setIntakeHistory(history);
//       setIntake(selectedDayIntake);
//     }
//   }, [selectedDate]);

//   function GoalUpdate(newGoal) {
//     setGoal(newGoal);
//     if (user) {
//       const updatedUser = { ...user, dailyGoal: newGoal };
//       localStorage.setItem('user', JSON.stringify(updatedUser));
//       setUser(updatedUser);
//     }
//   }

//   function updateIntake(newIntake) {
//     setIntake(newIntake);
//     if (user) {
//       const updatedHistory = { ...intakeHistory, [formattedDate]: newIntake };
//       setIntakeHistory(updatedHistory);
//       localStorage.setItem(`intake_${user.email}`, JSON.stringify(updatedHistory));
//     }
//   }

//   return (
//     <>
//       {user ? (
//         <>
//           <Navbar />
//           <Calendar
//             intakeHistory={intakeHistory}
//             goal={goal}
//             selectedDate={selectedDate}
//             setSelectedDate={setSelectedDate}
//           />
//           <Prog intake={intake} goal={goal} setGoal={GoalUpdate} />
//           <World />
//           {formattedDate === today && <Alarm intake={intake} setIntake={updateIntake} />}
//           <Footer />
//         </>
//       ) : (
//         <>
//           <Navbar />
//           <LoginForm success={(user) => setUser(user)} />
//           <Footer />
//         </>
//       )}
//     </>
//   );
// };

// export default ProgressPage;



// ProgressPage.jsx
import React, { useEffect, useState } from 'react';
import Navbar from '../compnents/Navbar';
import Footer from '../compnents/Footer';
import Prog from '../compnents/Progress/Prog';
import LoginForm from '../compnents/Progress/LoginForm';
import Calendar from '../compnents/Progress/Calendar';
import Alarm from '../compnents/Progress/Alarm';
import World from '../compnents/Progress/World';
import './ProgressPage.css';

const ProgressPage = () => {
  const [intake, setIntake] = useState(0);
  const [user, setUser] = useState(null);
  const [goal, setGoal] = useState(750);
  const [intakeHistory, setIntakeHistory] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formattedDate = selectedDate.toISOString().split('T')[0];
  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
      if (storedUser.dailyGoal) setGoal(storedUser.dailyGoal);

      const history = JSON.parse(localStorage.getItem(`intake_${storedUser.email}`)) || {};
      setIntakeHistory(history);

      const selectedDayIntake = history[formattedDate] || 0;
      setIntake(selectedDayIntake);
    }
  }, []);

  useEffect(() => {
    if (user) {
      const history = JSON.parse(localStorage.getItem(`intake_${user.email}`)) || {};
      const selectedDayIntake = history[formattedDate] || 0;
      setIntakeHistory(history);
      setIntake(selectedDayIntake);
    }
  }, [selectedDate]);

  function GoalUpdate(newGoal) {
    setGoal(newGoal);
    if (user) {
      const updatedUser = { ...user, dailyGoal: newGoal };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
    }
  }

  function updateIntake(newIntake) {
    setIntake(newIntake);
    if (user) {
      const updatedHistory = { ...intakeHistory, [formattedDate]: newIntake };
      setIntakeHistory(updatedHistory);
      localStorage.setItem(`intake_${user.email}`, JSON.stringify(updatedHistory));
    }
  }

  return (
    <>
      <Navbar />
      {user ? (
        <div className="progress-page">
          <div className="dashboard-container">
            <div className="dashboard-left">
              <div className="dashboard-card"><Prog intake={intake} goal={goal} setGoal={GoalUpdate} /></div>
            </div>
            <div className="dashboard-right">
              <div className="dashboard-card"><Calendar intakeHistory={intakeHistory} goal={goal} selectedDate={selectedDate} setSelectedDate={setSelectedDate} /></div>
            <div className="time-widgets">
              <World />
              {formattedDate === today && <Alarm intake={intake} setIntake={updateIntake} />}
            </div>
            </div>
          </div>
        </div>
      ) : (
        <LoginForm success={(user) => setUser(user)} />
      )}
      <Footer />
    </>
  );
};

export default ProgressPage;

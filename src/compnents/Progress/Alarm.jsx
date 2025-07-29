import React, { useState, useRef, useEffect } from 'react';
import Intake from './Intake';
import './Alarm.css';

const Alarm = ({ selectedDate, intakeHistory, setIntakeHistory, updateIntake }) => {
  const [alarmTime, setAlarmTime] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [lastResetDay, setLastResetDay] = useState(new Date().getDate());
  const [reminder, setReminder] = useState(true);

  const initialTimeoutRef = useRef(null);
  const repeatIntervalRef = useRef(null);
  const snoozeTimeoutRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio('/alarm.mp3');
  }, []);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  };

  const getDelayUntilAlarm = (targetTime) => {
    const now = new Date();
    const [hours, minutes] = targetTime.split(':');
    const alarmDate = new Date();
    alarmDate.setHours(Number(hours));
    alarmDate.setMinutes(Number(minutes));
    alarmDate.setSeconds(0);
    if (alarmDate <= now) alarmDate.setDate(alarmDate.getDate() + 1);
    return alarmDate - now;
  };

  const setAlarm = () => {
    if (!alarmTime) return alert('Please select a valid time.');
    clearTimeout(initialTimeoutRef.current);
    clearInterval(repeatIntervalRef.current);
    clearTimeout(snoozeTimeoutRef.current);

    const delay = getDelayUntilAlarm(alarmTime);
    initialTimeoutRef.current = setTimeout(triggerAlarm, delay);

    alert(`Alarm set for ${alarmTime}`);
  };

  const triggerAlarm = () => {
    setShowAlert(true);
    playSound();
    repeatIntervalRef.current = setInterval(() => {
      setShowAlert(true);
      playSound();
    }, 2 * 60 * 60 * 1000);
  };

  const dismiss = () => {
    clearTimeout(initialTimeoutRef.current);
    clearInterval(repeatIntervalRef.current);
    clearTimeout(snoozeTimeoutRef.current);
    setShowAlert(false);
  };

  const hide = () => {
    setShowAlert(false);
    clearTimeout(snoozeTimeoutRef.current);
  };

  const handleSnooze = () => {
    setShowAlert(false);
    clearTimeout(snoozeTimeoutRef.current);
    snoozeTimeoutRef.current = setTimeout(() => {
      setShowAlert(true);
      playSound();
    }, 10 * 60 * 1000);
  };

  useEffect(() => {
    const checkForNewDay = setInterval(() => {
      const now = new Date();
      if (now.getDate() !== lastResetDay) {
        setLastResetDay(now.getDate());
        setShowAlert(false);
      }
    }, 60 * 1000);

    return () => clearInterval(checkForNewDay);
  }, [lastResetDay]);

  useEffect(() => {
    if (!reminder) return;
    const interval = setInterval(() => {
      alert('Time to drink water! 🥤');
      playSound();
    }, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, [reminder]);

  return (
    <div style={{ marginTop: '20px' }}>
      <h3>💧 Set Your Hydration Alarm</h3>

      <input
        type="time"
        value={alarmTime}
        onChange={(e) => setAlarmTime(e.target.value)}
      />
      <button onClick={setAlarm}>Set Alarm</button>
      <button onClick={dismiss} style={{ marginLeft: '10px' }}>
        Dismiss
      </button>

      {showAlert && (
        <>
          <p style={{ color: 'red', fontWeight: 'bold' }}>
            🚨 It's time to drink water!
          </p>

          <Intake
            selectedDate={selectedDate}
            intakeHistory={intakeHistory}
            setIntakeHistory={setIntakeHistory}
            onIntakeChange={updateIntake}
          />

          <button onClick={hide}>Submit</button>
          <button onClick={handleSnooze} style={{ marginLeft: '10px' }}>
            Snooze 10 min
          </button>
        </>
      )}

      <label style={{ display: 'block', marginTop: '15px' }}>
        <input
          type="checkbox"
          checked={reminder}
          onChange={(e) => setReminder(e.target.checked)}
        />{' '}
        Enable Reminder
      </label>
    </div>
  );
};

export default Alarm;

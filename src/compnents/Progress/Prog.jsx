import React, { useEffect, useState } from 'react';
import './Prog.css';
import LiquidFillGauge from 'react-liquid-gauge';
import { color } from 'd3-color';
import { interpolateRgb } from 'd3-interpolate';
import gallonPic from '../../assets/gallon.png';
import cupPic from '../../assets/cup.png';
import litrePic from '../../assets/litre.png';
import ouncesPic from '../../assets/ounces.png';

const Prog = ({ intake, goal, setGoal }) => {
  const [litre, setLitre] = useState(0);
  const [cup, setCup] = useState(0);
  const [gallon, setGallon] = useState(0);
  const [ounce, setOunce] = useState(0);

  useEffect(() => {
    setLitre((intake / 1000).toFixed(2));
    setGallon((intake / 3785).toFixed(2));
    setCup((intake / 236.6).toFixed(2));
    setOunce((intake / 29.574).toFixed(2));
  }, [intake]);
const rawPercentage = (intake / goal) * 100;
const percentage = Math.min(rawPercentage, 100).toFixed(0);
  const fillColor = interpolateRgb('#dc143c', '#6495ed')(percentage / 100);

  function increment() {
    if (goal >= 750) setGoal(goal + 5);
  }

  function decrement() {
    if (goal > 755) setGoal(goal - 5);
  }

  function GoalChange(e) {
    const newValue = Number(e.target.value);
    if (!isNaN(newValue) && newValue >= 750) {
      setGoal(newValue);
    }
  }

  return (
    <div className='level'>
      <div style={{ width: 200, margin: '0 auto' }}>
        <LiquidFillGauge
          width={200}
          height={200}
          value={percentage}
          percent="%"
          riseAnimation
          waveAnimation
          waveFrequency={2}
          waveAmplitude={1}
          gradient
          circleStyle={{ fill: fillColor }}
          waveStyle={{ fill: fillColor }}
          textStyle={{ fill: color('#444').toString(), fontFamily: 'Arial' }}
          waveTextStyle={{ fill: color('#fff').toString(), fontFamily: 'Arial' }}
        />
      </div>
      <div className='input'>
        <button onClick={increment}>+</button>
        <input value={goal} onChange={GoalChange} min={750} type='number' />
        <button onClick={decrement}>-</button>
      </div>
      <div className='conversion'>
        <div className='gallon'>
          <img src={gallonPic} />
          {gallon} Gallons of water
        </div>
        <div className='ounce'>
          <img src={ouncesPic} />
          {ounce} Ounces of water
        </div>
        <div className='cup'>
          <img src={cupPic} />
          {cup} Cups of water
        </div>
        <div className='litre'>
          <img src={litrePic} />
          {litre} Litres of water
        </div>
      </div>
      <h1>Goal of the day: {goal} ml</h1>
    </div>
  );
};

export default Prog;





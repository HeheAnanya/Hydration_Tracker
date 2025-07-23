import React from 'react'
import './Intake.css'

const Intake = ({intake, setIntake}) => {
  return (
    <div>
        <input typeof='number' value={intake} onChange={(e)=>(setIntake(Number(e.target.value)))}/>

        <p>{intake} ml of water U drank</p>
    </div>
  )
}

export default Intake
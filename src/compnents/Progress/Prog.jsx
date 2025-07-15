import React, {useState, useEffect} from 'react'
import Calendar from 'react-calendar'
import './Prog.css'
import 'react-calendar/dist/Calendar.css'


const Prog = () => {
    const [seleectDate, setSelectDate] = useState(new Date())
    const [intake, setIntake] = useState(0)
    const [user, setUser] = useState(null)

    useEffect(()=>{
        const logged = JSON.parse(localStorage.getItem("user"))
        if (logged){
            setUser(logged)
        }
    },[])
    useEffect(()=>{
        if (user){
            const key = `${user.email}_${seleectDate.toDateString()}`
        const saved = parseInt(localStorage.getItem(key)|| 0)
        setIntake(saved)
        }
    },[seleectDate, user])

    function AddWater(amount){
        if (!user) return 
        else{
            const key = `${user.email}_${seleectDate.toDateString()}`
            const updated = intake + amount;
            localStorage.setItem(key, updated);
            setIntake(updated);
        }
          const goal = 3000
            const progressPercent = Math.min((intake / goal) * 100, 100)


    }
  return (
    <div className='prog'>
      <h1>Hello {user?.displayName || "Guest"} </h1>
      <div className='calendar'>
        <Calendar onChange={setSelectDate} value={seleectDate} style={{ border: '2px dashed orange', borderRadius: '10px' }}/>

      </div>
      {/* <div className='progressStat'>
        <div className='filled' style={{width : `${progressPercent}%`}}></div>
      </div> */}
    </div>
  )
}

export default Prog
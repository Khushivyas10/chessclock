import React, { useState, useContext, createContext } from 'react'
import './input.css';
import { useNavigate } from 'react-router-dom';
import Countdown from '../home/Countdown';


const Input = (props) => {

  const navigate = useNavigate()
  const [hour, setHour] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)



  const submitHandler = () => {

    props.onSaveTimeData({hour,minutes,seconds})
    if (hour != 0 || minutes != 0 || seconds != 0) {
     navigate('/home')
    }
  }
  return (
 <div>
      <div className='time'>
        <div className='format'>
          <label>Enter Time: </label>

        
          <span className='format1'> (hh/mm/dd) </span>
        </div>
        <input type='text' value={hour} placeholder='Enter time here...' onChange={e => setHour(e.target.value)} />

        <input type='text' value={minutes} placeholder='Enter time here...' onChange={e => setMinutes(e.target.value)} />

        <input type='text' value={seconds} placeholder='Enter time here...' onChange={e => setSeconds(e.target.value)} />


      

       

      </div>
        <button onClick={submitHandler}>Submit</button>
 </div>
 
  )
}

export default Input

import { useState } from 'react';
import './App.css';
import Home from './components/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Input from './components/input/Input';
function App() {

  const [person1, setPerson1] = useState("person1")
  const [person2, setPerson2] = useState("person2")
  const [hour, setHour] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)


  const timeHandler = (enteredTimeData) => {
    setHour(enteredTimeData.hour)
    setMinutes(enteredTimeData.minutes)
    setSeconds(enteredTimeData.seconds)
  }

  return (
    <div className="App">



      {/* <Countdown person={person1} />
        <Countdown person={person2} /> */}
      {/* <Input/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Input onSaveTimeData={timeHandler} />} />
          <Route path='/home' element={<Home hour={hour} minutes={minutes} seconds={seconds}/>} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

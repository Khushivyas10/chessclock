import React, { useState, useEffect } from 'react'
import Timer from './Timer'
import { BsFillPlayFill, BsPauseFill, BsStopFill } from 'react-icons/bs'


const Countdown = ({ person }) => {

    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [isStart, setIsStarting] = useState(null)
    const [result, setResult] = useState({
        show: false,
        message1: 'Person 1 wins',
        message2: 'Person 2 wins'
    })


    //Functions
    function startTimer() {
        if (hours !== 0 || minutes !== 0 || seconds !== 0) {
            setIsStarting(true)
            setResult({ ...result, show: false })
        } else {
            window.alert("Add Time")
        }
    }

    function pauseTimer() {
        setIsStarting(false)
    }

    function stopTimer() {
        resetTimer()
        setResult({ ...result, show: true })
    }

    function resetTimer() {
        setIsStarting(false)
        setSeconds(0)
        setHours(0)
        setMinutes(0)
    }

    useEffect(() => {
        let interval

        if (isStart) {
            interval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds((seconds) => seconds - 1)
                } else if (minutes > 0) {
                    setMinutes((minutes) => minutes - 1)
                    setSeconds(59)
                }
                else if (hours > 0) {
                    setHours((hours) => hours - 1)
                    setMinutes(59)
                    setSeconds(59)
                }
            }, 1000)
        }

        if (hours === 0 && minutes === 0 && seconds === 1) {
            setResult({ ...result, show: true })
            resetTimer()
        }
        return () => {
            clearInterval(interval)
        }
    }, [seconds, minutes, hours, isStart, result.show])

    //changeHandler
    const changeSeconds = (e) => {
        setSeconds(e.target.value)
    }
    const changeHours = (e) => {
        setHours(e.target.value)
    }
    const changeMinutes = (e) => {
        setMinutes(e.target.value)
    }




    return (

        <div style={{ display: "flex", margin: "10px", alignItems: "center", height: "100vh", width: "100wh", justifyContent: "center" }}>

            <div className='p1'>
                {console.log(person)}
                {person == "person1" && result.show && <h1 className='title'>{result.message1}</h1>}
                {person == "person2" && result.show && <h1 className='title'>{result.message2}</h1>}

                <Timer seconds={seconds} minutes={minutes} hours={hours} changeSeconds={changeSeconds} changeHours={changeHours} changeMinutes={changeMinutes} />
                <br />
                {!isStart && (
                    <button className='btn btn-accept btnlg' onClick={startTimer}><BsFillPlayFill /></button>
                )}
                {isStart && (
                    <button className='btn btn-warning btnlg' onClick={pauseTimer}><BsPauseFill /></button>
                )}{" "}
                <button className='btn btn-danger btnlg' onClick={stopTimer}><BsStopFill /></button>

            </div>

        </div>
    )
}

export default Countdown
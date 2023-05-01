import React, { useState } from 'react'
import Countdown from './Countdown';
const Home = (props) => {

    const [person1, setPerson1] = useState("person1")
    const [person2, setPerson2] = useState("person2")

    return (
     
        <div>
       {console.log(props)}
            <div className="timers">
                <Countdown person={person1} hour={props.hour} minutes={props.minutes} seconds={props.seconds} />
                <Countdown person={person2} hour={props.hour} minutes={props.minutes} seconds={props.seconds} />
            </div>
        </div>
    )
}

export default Home
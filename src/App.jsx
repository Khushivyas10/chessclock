
import { useState } from 'react';
import './App.css';

import Countdown from './components/Countdown';
function App() {

  const [person1, setPerson1] = useState("person1")
  const [person2, setPerson2] = useState("person2")

  return (
    <div className="App">
     
      <div className="timers">
        
        <Countdown person={person1} />
        <Countdown person={person2} />

      </div>
    </div>
  );
}

export default App;

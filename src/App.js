import "./App.css";
import { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState (0)
  const [bmi, setBmi] = useState ('')

  function calculate(e){
    e.preventDefault()
    let calc = (weight/(height/100*height/100))
    setBmi(calc)
  }

  function reset(){
    setWeight(0)
    setHeight(0)
    setBmi("")
  }

  return (
    <div className="app">
      <div className="container">
        <h2>BMI CALCULATOR</h2>
        <form onSubmit={calculate}>
          <div className="labels">
            <label>Weight (kg)</label>
            <input type="text" placeholder="Enter Your Weight" onChange={(e)=> setWeight(e.target.value)}/>
          </div>
          <div className="labels">
            <label>Height (cm)</label>
            <input type="text" placeholder="Enter Your Height" onChange={(e)=> setHeight(e.target.value)}/>
          </div>
          <div>
            <button className="btn" type="submit">Submit</button>
            <button className="btn btn-outline" onClick={reset}>Reset</button>
          </div>
          <div className="center">
            {bmi  && 
            <h3>Your BMI is {bmi}</h3>
          }
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

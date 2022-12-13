import "./App.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react"

function App() {
  const [inputh, setInputh] = useState()
  const [inputw, setinputw] = useState()
  const [bmi, setBmi] = useState()

  // function calculation
  function calculate() {
    let finalCal = inputw / (inputh * inputh)
    setBmi(finalCal)

  }
  return (
    <div>
      <div class="container">
        <div class="child">
          <h1 class="header"> Calculate Your BMI </h1>
          <div class="inputs">
            <label class="label-height">Enter Your height :-
              <input type="number" placeholder="Enter Here" onChange={(e) => setInputh(e.target.value)} />
            </label>
            <br />
            <label class="label-weight">Enter Your weight :-
              <input type="number" placeholder="Enter Here" onChange={(e) => setinputw(e.target.value)} />
            </label>
            <br />
            <button class="btn" onClick={calculate}><span>Calculate</span></button>

            <h2 class="result">YOUR BMI IS : <span>{bmi}</span></h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

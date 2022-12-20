import "./App.css";
import React from "react";
import { useState } from "react";
import { ReactDOM } from "react";


function App() {

  const [input,setInput] = useState("")
  const [inputtwo, setInputtwo] = useState("")
  const [result,setResult] = useState("")
 function check(){
     let BMI = input / inputtwo ** 2;
     setResult(BMI);

 }

  return (
    <div className="bmi">
      <h1>BMI Calculator</h1>
      <label>Enter your Weight</label>
      <input type="number" placeholder="Weight" onChange={(e) => setInput(e.target.value) }/>
      <label>Enter your Height</label>
      <input type="number" placeholder="Height"  onChange={(e) => setInputtwo(e.target.value) } />
         <button onClick={check}>CHECK BMI</button>

         <h4>Your BMI🏋️‍♂️ is {result}</h4>
    </div>
  );
}

export default App;

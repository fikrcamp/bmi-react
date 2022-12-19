import React from 'react';
import {useState} from 'react';
import ReactDOM from "react-dom/client";
import App from "./App";

      // creating states 

function Apps() {
  const[inputh, setInputh]=useState()
  const[inputw, setInputw]= useState()
  const[bmi, setBmi]= useState()


        // calculatin function 

  function calculateBmi(){
    let bim= (inputw)/ (inputh* inputh)
    setBmi(bmi)
  }

  return (
    <div>
        <div class="container">
          <div class="child">
          <h1> CALCULATE  YOUR BMI</h1>
            <div class="input">
              <label class="hieght">
               <input type="number" placeholder="enter your hieght" onChange={(e)=> setInputh(e.target.value)}>input your hight</input>
              </label>
              <br/>
              <label  class="wieght">
               <input  type="number" placeholder="enter your wieght" onChange={(e)=> setInputw(e.target.value)}>input your hight</input>
              </label>
              <br/>
               <button  class="btn" onClick={calculateBmi}><span>Calculate</span> </button>
                <h2 class="result">YOUR BMI IS : <span>{bmi}</span></h2>
            </div>
      </div>  
      </div>
    </div>
  );
}

    export default App;


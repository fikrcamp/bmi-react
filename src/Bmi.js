import { useState } from "react";
import "./Bmi.css";

function Bmi() {
  const [height,setHeight]=useState("");
  const [mass,setMass]=useState("");
  const [BMI ,setBMI]=useState("")
  function calculate(){
     let newBMI = mass/(height*height);
     setBMI(newBMI)
     
  }
  return (
    <div className="header">
       <h1 className="header-tittle">BMI Calculator🧮</h1>
       <div className="header-bmi">
         <label className="header-bmi-label ">height</label>
         <input className="header-bmi-input" onChange={(e)=>{ setHeight(e.target.value) }}></input>
         <label className="header-bmi-label ">Mass</label>
         <input className="header-bmi-input" onChange={(e)=>{ setMass(e.target.value) }}></input>
   
        <button onClick={calculate} className="header-bmi-btn">calculate</button>
          
       </div>
      {BMI && <h4  className="header-result">Your BMI is <span className="header-result-value">  {BMI}</span> </h4>  }
    </div>
  );
}

export default Bmi;

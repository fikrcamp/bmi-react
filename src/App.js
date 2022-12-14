import "./App.css";
import {useState} from 'react'

function App() {
  const [weight,setWeight] = useState(0);
   const [height,setHeight] = useState(0);
   const [bmi,setBMI] = useState(0);
   
function calc(){
  
  setBMI(Math.round(weight/(height*height)));
  
}

  return (
    <div className='main'>
    <div className="container">
      <h1>BMI Calculator</h1>
     <div className="inp"> <input type='text'  className="weight" onChange={(e)=>{
       setWeight(+e.target.value);
     }}    placeholder="Enter your Weight"/>
      <input type='text' className="height"  onChange={(e)=>{
       setHeight(+e.target.value);}} placeholder="Enter your Height"/>
       <button onClick={calc}>Calculate</button>
      <h3>Your BMI is</h3>
      <div className="ans"><h3>{bmi}</h3></div>
      </div>
    </div>
    </div>
  );
}

export default App;

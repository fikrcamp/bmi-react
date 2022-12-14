import "./App.css";
import {useState} from 'react'

function App() {
  const [weight,setWeight] = useState(0);
   const [height,setHeight] = useState(0);
    const [name,setName] = useState('');
   const [bmi,setBMI] = useState(0);
   
function calc(){
  
  setBMI(Math.round(weight/(height*height)));
  
}

  return (
    <div className='main'>
    <div className="container">
      <h1>BMI Calculator</h1>
     <div className="inp"> <input type='text'   onChange={(e)=>{
       setName(e.target.value);}} placeholder="Enter your Name"/>
     <input type='text'  className="weight" onChange={(e)=>{
       setWeight(+e.target.value);
     }}    placeholder="Enter your Weight"/>
      <input type='text' className="height"  onChange={(e)=>{
       setHeight(+e.target.value);}} placeholder="Enter your Height"/>
       <button onClick={calc}>Calculate Your BMI</button>
       <p>your Name is {name}, your weight is {weight}kg, your height is {height}m</p>
      <p>and Your BMI is</p>
      <div className="ans">{bmi}</div>
      </div>
    </div>
    </div>
  );
}

export default App;

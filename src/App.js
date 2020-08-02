import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Calculate from "./components/Calculate";
import InputArea from './components/InputArea';
import Header from './components/Header';
import { render } from '@testing-library/react';


function App() {
  const heights = "Enter your height (in cm)";
  const weights = "Enter your weight (in kg)";
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBMI] = useState(0);
  function heightChange(newHeight){
    setHeight(newHeight);
  }
  function weightChange(newWeight){
    setWeight(newWeight);
  }
  function calculateBMI(){
    let newValue = weight/((height/100)*(height/100));
    setBMI(newValue);
  }
  return (
    <div className="App">
      <Header />
      <div className="content">
        <InputArea labelName ={heights} onChange = {heightChange}/>
        <InputArea labelName ={weights} onChange = {weightChange}/>
        <Calculate onClick = {calculateBMI}/>
      </div>
      <div className = "renderBMI">
        <h3>Your BMI is {bmi.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default App;

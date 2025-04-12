import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setbmi] = useState("");
  const [message, setmessage] = useState("");

  //Logics
let calbmi = (e) => {
  e.preventDefault();
  if (!weight || !height) {
    alert("Please enter valid weight and height.");
  } else {
    let bmi = (weight / (height * height)) * 703;
    setbmi(bmi.toFixed(1));

    if (bmi < 18.5) {
      setmessage("You are underweight");
    } else if (bmi >= 18.5 && bmi < 25) {
      setmessage("You are healthy weight");
    } else if (bmi >= 25 && bmi < 30) {
      setmessage("You are overweight");
    } else {
      setmessage("You are obese");
    }
  }
};


let Reload=()=>{
  window.location.reload();
}


  return (
    <>
      <div className="container">
        <h1>BMI Calculator</h1>
        <form onSubmit={calbmi}>
          <div>
            <label>Weight (ibs):</label>
            <input
              type="text"
              value={weight}
              placeholder="Enter Your Weight in ibs:"
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (in):  </label>
            <input
              type="text"
              value={height}
              placeholder="Enter Your Height in inches:"
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
            <button type="submit" onClick={Reload}>
              Reload
            </button>
          </div>
          <div>
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;

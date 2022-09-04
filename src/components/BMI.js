import React, { useState } from "react";

const BMI = () => {
  const [bmi, setBmi] = useState();
  const [info, setInfo] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const handleBmi = () => {
    let val = (
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1);
    setBmi(val);
    if (val < 18.5) {
      setInfo("Under Weight");
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("Healthy");
    } else if (val > 24.9 && val < 30) {
      setInfo("Overweight");
    } else {
      setInfo("Obese");
    }
  };
  return (
    <div>
      <h1 className="text-xxl bg-blue-300">BMI Calculator</h1>
      <input className="boder p-3"
        type="text"
        onChange={(e) => setHeight(e.target.value)}
        placeholder="Height in cm"
      />
      <input className="border p-3"
        type="text"
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Weight in kg"
      />
      <button className="border bg-primary text-white p-2 mx-2" onClick={handleBmi}>Calculate</button>
      <h1>{bmi}</h1>
      <h2>{info}</h2>
    </div>
  );
};

export default BMI;
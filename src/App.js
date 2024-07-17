import "./App.css";
import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [currentDate, setDate] = useState(new Date());

  function decreaseStep() {
    setStep(step - 1);
  }

  function increaseStep() {
    setStep(step + 1);
  }

  function decreaseCount() {
    setCount(count - step);
    setDate((currentDate) => {
      const newDate = new Date(currentDate);
      newDate.setDate(newDate.getDate() + step);
      return newDate;
    });
  }

  function increaseCount() {
    setCount(count + step);
    setDate((currentDate) => {
      const newDate = new Date(currentDate);
      newDate.setDate(newDate.getDate() + step);
      return newDate;
    });
  }
  return (
    <>
      <div className='container-app'>
        <div className='step-container'>
          <button onClick={decreaseStep}>-</button>
          <p> Step : {step} </p>
          <button onClick={increaseStep}>+</button>
        </div>
        <div className='count-container'>
          <button onClick={decreaseCount}>-</button>
          <p> count : {count} </p>
          <button onClick={increaseCount}>+</button>
        </div>

        <p className='date'>
          {count === 0 ? (
            <p> current date is {currentDate.toDateString()} </p>
          ) : (
            <p>
              {count} days from today is {currentDate.toDateString()}
            </p>
          )}
        </p>
      </div>
    </>
  );
}

export default App;

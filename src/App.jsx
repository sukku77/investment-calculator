import Header from "./comonents/Header.jsx";
import Result from "./comonents/Result.jsx";
import UserInput from "./comonents/UserInput.jsx";
import { useState } from 'react';

function App() {
  const [ userInputs, setUserInputs ] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
});

const inputIsValid = userInputs.duration >= 1;

function handleChange(inputIdentifier, newValue){
    setUserInputs((prevUserInputs) => {
        return {
            ...prevUserInputs,
            [inputIdentifier]: +newValue,
        };
    });
}
return (
    <>
      <Header/>
      <UserInput userInputs={userInputs} onChangeUserInput={handleChange} />
      {!inputIsValid && <p className="center">Please enter duration greater than zero.</p>}
      {inputIsValid && <Result userInputs={userInputs}/> }
    </>
  );
}
export default App;

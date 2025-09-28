import React , { useState } from "react";



const App = () => {

    const [errorMessage, setErrorMessage] = useState("")
    const validate = (value) => {
    
    const    minLength = value.length >= 8;
    const    hasLower = /[a-z]/.test(value);
    const    hasUpper = /[A-Z]/.test(value);
    const    hasNumber = /[0-9]/.test(value);
    const    hasSymbol = /[^A-Za-z0-9]/.test(value);
      
      
      if (minLength && hasLower && hasUpper && hasNumber && hasSymbol) {
        setErrorMessage("strong password"); }
        else{
        setErrorMessage("not strong password");
    }
  };
  
  
    return (
      <div style={{marginLeft :'200px',}}>
          <h2>Password Strength Checking with React</h2>
          <label>
          Enter Password:{" "}
              <input type="password" onChange = {(e) => validate(e.target.value)}/>
          </label>
            <br/>
            {errorMessage && (<span style= {{fontWeight: 'bold', color: errorMessage.includes("not strong") ? "red" : "green",}}>
            {errorMessage}
          </span>)}
      </div>
      );
 };
 
 export default App
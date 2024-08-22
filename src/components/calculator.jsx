import React, { useState } from 'react'
import './calculator.css'

function Calculator() {
   let [result, setResult] = useState("");

   function handleClick(e) {
      if(result.length >= 16) {
         setResult('!So Much Big Input');
         return;
      }
      if(result.charAt(0) === '0') {
         result = result.slice(1, result.length);
      }
      setResult(result.concat(e.target.name));
   }

   function clear() {
      setResult("");
   }

   function backSpace() {
      setResult(result.slice(0, result.length - 1));
   }

   function calculate() {
      try {
         setResult(eval(result).toString());

      } catch(err) {
         setResult("Error");

      }
   }

   return (
      <>
         <h3 class="title">Calculator</h3>
         <div className="calculator-grid">
            <form className="output" action="">
               <input type="text" value={result} />
            </form>
            <button onClick={clear}>AC</button>
            <button onClick={backSpace}>CE</button>
            <button name="/" onClick={handleClick}>/</button>
            <button name="*" onClick={handleClick}>*</button>

            <button name="7" onClick={handleClick}>7</button>
            <button name="8" onClick={handleClick}>8</button>
            <button name="9" onClick={handleClick}>9</button>
            <button name="-" onClick={handleClick}>-</button>

            <button name="4" onClick={handleClick}>4</button>
            <button name="5" onClick={handleClick}>5</button>
            <button name="6" onClick={handleClick}>6</button>
            <button name="+" onClick={handleClick}>+</button>

            <button name="1" onClick={handleClick}>1</button>
            <button name="2" onClick={handleClick}>2</button>
            <button name="3" onClick={handleClick}>3</button>
            <button onClick={calculate} className="span-two-row">=</button>

            <button name="0" onClick={handleClick} className="span-two-col">0</button>
            <button name="." onClick={handleClick}>.</button>
         </div>
      </>
   );
}

export default Calculator
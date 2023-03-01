import React, { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import { evaluate } from "mathjs";
import './App.css';
import Brand from "./components/Brand";

const App = () => {

  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const addToText = (e) => {
    setText((text) => [...text, e + ""])
  }

  const calculateResult = () => {
    const input = text.join("")
    setResult(evaluate(input))
  }

  const resetVal = () => {
    setText('');
    setResult('');
  }


  return (
    <div className="calc-app">

      <div className="calc-wrapper">
        <Brand />
        <Input text={text} result={result} />
        <div className="button-align">
          <div className="row">
            <Button symbol='(' handleClick={addToText} textColor='wheat' bgcolor='#021f2a' />
            <Button symbol=')' handleClick={addToText} textColor='wheat' bgcolor='#021f2a' />
            <Button symbol='%' handleClick={addToText} textColor='wheat' bgcolor='#021f2a' />
            <Button symbol='A/C' handleClick={resetVal} textColor='black' bgcolor='red' />
          </div>
          <div className="row">
            <Button symbol='7' handleClick={addToText} />
            <Button symbol='8' handleClick={addToText} />
            <Button symbol='9' handleClick={addToText} />
            <Button symbol='/' handleClick={addToText} textColor='wheat' bgcolor='#021f2a' />
          </div>
          <div className="row">
            <Button symbol='4' handleClick={addToText} />
            <Button symbol='5' handleClick={addToText} />
            <Button symbol='6' handleClick={addToText} />
            <Button symbol='*' handleClick={addToText} textColor='wheat' bgcolor='#021f2a' />
          </div>
          <div className="row">
            <Button symbol='1' handleClick={addToText} />
            <Button symbol='2' handleClick={addToText} />
            <Button symbol='3' handleClick={addToText} />
            <Button symbol='+' handleClick={addToText} textColor='wheat' bgcolor='#021f2a' />
          </div>
          <div className="row">
            <Button symbol='0' handleClick={addToText} />
            <Button symbol='.' handleClick={addToText} />
            <Button symbol='=' handleClick={calculateResult} />
            <Button symbol='-' handleClick={addToText} textColor='wheat' bgcolor='#021f2a' />
          </div>
        </div>
      </div>
    </div>

  )

}

export default App;

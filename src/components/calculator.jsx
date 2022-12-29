import '../calc.css';
import React from "react";
import { useState } from "react";
const Calculator = () => {
    const [result, setResult] = useState("");
    const [calc, setCalc] = useState("");

    const updateCalc = (e) => {
        setCalc(calc + e);
    }
    const clear = () => {
        setCalc("");
    }

    return (
        <div className='panel'>
            <div className='panel-child'>
                <div className='display'>
                    {calc || "0"}
                </div>
                <div className='buttons'>
                    <button className='button' onClick={clear}>C</button>
                    <button className='button'>()</button>
                    <button className='button'>%</button>
                    <button className='button button__orange'>/</button>
                    <button className='button' onClick={() => updateCalc(7)}>7</button>
                    <button className='button' onClick={() => updateCalc(8)}>8</button>
                    <button className='button' onClick={() => updateCalc(9)}>9</button>
                    <button className='button button__orange'>*</button>
                    <button className='button' onClick={() => updateCalc(4)}>4</button>
                    <button className='button' onClick={() => updateCalc(5)}>5</button>
                    <button className='button' onClick={() => updateCalc(6)}>6</button>
                    <button className='button button__orange'>-</button>
                    <button className='button' onClick={() => updateCalc(1)}>1</button>
                    <button className='button' onClick={() => updateCalc(2)}>2</button>
                    <button className='button' onClick={() => updateCalc(3)}>3</button>
                    <button className='button button__orange'>+</button>
                    <button className='button button__big'>0</button>
                    <button className='button' onClick={() => updateCalc(".")}>.</button>
                    <button className='button button__orange'>=</button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
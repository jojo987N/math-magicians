import { useState } from 'react';
import calculate from '../../logic/calculate';
import './calculator.css';
import Display from '../display/Display';

export default function Calculator() {
  const [obj, setObj] = useState({ total: '0' });
  const [inputs, setInputs] = useState('');
  function handleClick(e) {
    const input = e.target.textContent;
    setObj({ ...obj, ...calculate(obj, input) });
    setInputs((val) => {
      const inputs = val + (/\+\/-/.test(input) ? '' : input);
      if (input.match(/\+\/-/)) return `${-1 * parseFloat(obj.total || val)}`;
      if (/(AC|=)/.test(inputs)) { return ''; }
      if (/^$/.test(val) && /[+\-÷x%]/.test(input)) { return `${obj.total}${input}`; }
      return /[+\-÷x%]{2}/.test(inputs.slice(-2)) ? inputs.slice(0, -2) + inputs.slice(-1) : inputs;
    });
  }
  return (
    <div className="container">
      <div className="item">
        <div>
          <Display inputs={inputs.replace(/\+\/-/, '')} />
          <div>

            {(/(\d+\.?\d*)[+\-÷x%](\d+\.?\d*)[+\-÷x%=]/.test(inputs) && (
            <div className="result">
              <span className="equal">=</span>
              <span className="total">{obj.total}</span>
            </div>
            )) || (/^$/.test(inputs) && (obj.total || '0'))}
          </div>
        </div>
      </div>
      <button type="button" className="item" onClick={handleClick}>AC</button>
      <button type="button" className="item" onClick={handleClick}>+/-</button>
      <button type="button" className="item" onClick={handleClick}>%</button>
      <button type="button" className="item" onClick={handleClick}>÷</button>
      <button type="button" className="item" onClick={handleClick}>7</button>
      <button type="button" className="item" onClick={handleClick}>8</button>
      <button type="button" className="item" onClick={handleClick}>9</button>
      <button type="button" className="item" onClick={handleClick}>x</button>
      <button type="button" className="item" onClick={handleClick}>4</button>
      <button type="button" className="item" onClick={handleClick}>5</button>
      <button type="button" className="item" onClick={handleClick}>6</button>
      <button type="button" className="item" onClick={handleClick}>-</button>
      <button type="button" className="item" onClick={handleClick}>1</button>
      <button type="button" className="item" onClick={handleClick}>2</button>
      <button type="button" className="item" onClick={handleClick}>3</button>
      <button type="button" className="item" onClick={handleClick}>+</button>
      <button type="button" className="item" onClick={handleClick}>0</button>
      <button type="button" className="item" onClick={handleClick}>.</button>
      <button type="button" className="item" onClick={handleClick}>=</button>
    </div>
  );
}

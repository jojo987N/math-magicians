import { useState } from 'react';
import calculate from '../../logic/calculate';
import './calculator.css';
import './calculator.scss';

export default function Calculator() {
  const [obj, setObj] = useState({ total: 0 });
  function handleClick(e) {
    setObj({ ...obj, ...calculate(obj, e.target.textContent) });
  }
  return (
    <div className="container">
      <p>Let&apos;s do some math!</p>
      <div className="calculator">
        <input className="item total" readOnly value={(obj.total && obj.next) || obj.next ? obj.next : obj.total || 0} />
        {/* <div className="item">{(obj.total && obj.next) || obj.next ? obj.next : obj.total || 0}</div> */}
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
    </div>
  );
}

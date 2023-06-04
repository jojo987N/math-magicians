// import { useEffect } from 'react';

export default function Display({ inputs, setInputs }) {
  // console.log('ddgd', inputs.replace(/^[+\-÷x]$/, (input) => `${obj.total}${input}`));

  // useEffect(() => {
  //   setInputs(inputs.replace(/^[+\-÷x]$/, (input) => `${obj.total}${input}`));
  // }, []);
  // setInputs(inputs.replace(/^[+\-÷x]$/, (input) => `${obj.total}${input}`));
  if (/(AC|=)/.test(inputs)) { setInputs(''); }

  // setInputs(inputs.replace(/^[+\-÷x]$/, (input) => `0${input}`));
  // if (/^[+\-÷x]$/.test(inputs)) { setInputs(inputs.replace(/[+\-÷x]/g,
  // (input) => ` ${input} `)); }
  return (
    <div>{inputs.replace(/[+\-÷x]/g, (input) => ` ${input} `)}</div>
  );
}

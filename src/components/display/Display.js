export default function Display({ inputs }) {
  return (
    <div>{inputs.replace(/[+\-÷x%]/g, (input) => ` ${input} `)}</div>
  );
}

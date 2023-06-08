import operate from '../logic/operate';

describe('Tests for operate function ', () => {
  it('Check addition operation of two numbers', () => {
    const numberOne = Math.floor(Math.random() * 10);
    const numberTwo = Math.floor(Math.random() * 10);
    const total = operate(numberOne, numberTwo, '+');
    expect((numberOne + numberTwo).toString()).toBe(total);
  });
  it('Check substraction operation of two numbers', () => {
    const numberOne = Math.floor(Math.random() * 10);
    const numberTwo = Math.floor(Math.random() * 10);
    const total = operate(numberOne, numberTwo, '-');
    expect((numberOne - numberTwo).toString()).toBe(total);
  });
  it('Check multiply operation of two numbers', () => {
    const numberOne = Math.floor(Math.random() * 10);
    const numberTwo = Math.floor(Math.random() * 10);
    const total = operate(numberOne, numberTwo, 'x');
    expect((numberOne * numberTwo).toString()).toBe(total);
  });
  it('Check divide operation of two numbers', () => {
    const numberOne = 125;
    const numberTwo = 5;
    const total = operate(numberOne, numberTwo, '÷');
    expect((numberOne / numberTwo).toString()).toBe(total);
  });
  it('Check divide operation of number with 0', () => {
    const numberOne = 125;
    const numberTwo = 0;
    const total = operate(numberOne, numberTwo, '÷');
    expect(total).toBe("Can't divide by 0.");
  });
  it('Check modulo operation of two numbers', () => {
    const numberOne = 125;
    const numberTwo = 4;
    const total = operate(numberOne, numberTwo, '%');
    expect((numberOne % numberTwo).toString()).toBe(total);
  });
  it('Check modulo operation of number with 0', () => {
    const numberOne = 125;
    const numberTwo = 0;
    const total = operate(numberOne, numberTwo, '%');
    expect(total).toBe("Can't find modulo as can't divide by 0.");
  });
});

import calculate from '../logic/calculate';

describe('Tests for calculate function ', () => {
  it('Check if button name is number, next property is equal number', () => {
    let obj = { total: 0 };
    const buttonName = Math.floor(Math.random() * 10).toString();
    obj = { ...obj, ...calculate(obj, buttonName) };
    expect(obj.next).toBe(buttonName);
  });

  it('Check if button name is AC, all property is equal null', () => {
    let obj = { total: 0 };
    const buttonName = 'AC';
    obj = { ...obj, ...calculate(obj, buttonName) };
    expect(obj).toEqual({ total: null, next: null, operation: null });
  });

  it('Check if button name is ".", next property is equal 0.', () => {
    let obj = { total: 0 };
    const buttonName = '.';
    obj = { ...obj, ...calculate(obj, buttonName) };
    expect(obj.next).toEqual('0.');
  });

  it('Check when total ≠ 0, if button name is ".", next property is follow by "."', () => {
    let obj = { total: 0 };
    const randomNumber = Math.floor(Math.random() * 10).toString();
    obj = { ...obj, ...calculate(obj, randomNumber) };
    const buttonName = '.';
    obj = { ...obj, ...calculate(obj, buttonName) };
    expect(obj.next).toEqual(`${randomNumber}.`);
  });

  it('Check if button name is "=", and operation is "+" , result is equal total + next property', () => {
    let obj = { total: 0 };
    const randomNumber1 = Math.floor(Math.random() * 10).toString();
    obj = { ...obj, ...calculate(obj, randomNumber1) };
    obj = { ...obj, ...calculate(obj, '+') };
    const randomNumber2 = Math.floor(Math.random() * 10).toString();
    obj = { ...obj, ...calculate(obj, randomNumber2) };
    obj = { ...obj, ...calculate(obj, '=') };
    expect((parseInt(randomNumber1, 10) + parseInt(randomNumber2, 10)).toString()).toEqual(obj.total);
  });
  it('Check if button name is "+/-", next property is equal opposite of number', () => {
    let obj = { total: 0, next: 2 };
    const buttonName = '+/-';
    obj = { ...obj, ...calculate(obj, buttonName) };
    expect(obj.next).toEqual('-2');
  });
});

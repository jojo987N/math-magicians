import calculate from '../logic/calculate';


describe('Tests for calculate function ', () => {
 it('Check if button name is number, next property is equal number', () => {
   let obj = { total: 0 };
   const buttonName = Math.floor(Math.random() * 10).toString();
   obj = { ...obj, ...calculate(obj, buttonName) };
   expect(obj.next).toBe(buttonName);
 });
})
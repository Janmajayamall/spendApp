import getTotalExpenses from './../../selectors/expensesTotal.js';
import expenses from './../fixtures/expenses.js'

test('Should return 0 if no expenses passed in', ()=>{
    const sum = getTotalExpenses([]);
    expect(sum).toBe(0);
});


test('Should return amount of one if only one object is present in the array', ()=>{
    const sum = getTotalExpenses([expenses[0]]);
    expect(sum).toBe(2);
});




test('Should return the total value of the expenses passed in', ()=>{
    const sum = getTotalExpenses(expenses);
    expect(sum).toBe(3);
});
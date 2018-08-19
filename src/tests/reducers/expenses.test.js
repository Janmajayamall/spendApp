import expenses from './../fixtures/expenses';
import expensesReducer from './../../reducers/expenses';
import moment from 'moment'

test('should set the state to default values', ()=>{
    const state = expensesReducer(undefined, {type:'@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense using the ID', ()=>{
    const state = expensesReducer(expenses, {type:'REMOVE_EXPENSE', id:2});
    expect(state).toEqual([expenses[0], expenses[2]])
});

test('should not remove expense if ID does not match', ()=>{
    const state = expensesReducer(expenses, {type:'REMOVE_EXPENSE', id:-2});
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]])
});


test('should add expense', ()=>{
    const newExpense = {
        id: 4,
        description: 'bell',
        note:'',
        amount: 1,
        createdAt: moment(0).add(4, 'days').valueOf()
    }
    const state = expensesReducer(expenses, {type: 'ADD_EXPENSE', expense:newExpense});
    expect(state[3]).toEqual(newExpense);
});



test('should edit expense', ()=>{
    const newExpense = {
        description: 'gas',
        note:'',
        amount: 1,
        createdAt: moment(0).add(4, 'days').valueOf()
    }
    const state = expensesReducer(expenses, {type: 'EDIT_EXPENSE', id:3, update: newExpense});
    expect(state[2]).toEqual({
        ...newExpense,
        id: 3});
});

test('should not edit expense when ID not found', ()=>{
    const newExpense = {
        description: 'gas',
        note:'',
        amount: 1,
        createdAt: moment(0).add(4, 'days').valueOf()
    }
    const state = expensesReducer(expenses, {type: 'EDIT_EXPENSE', id:5, update: newExpense});
    expect(state).toEqual(expenses);
});

test('should set expenses', ()=>{
    const expensesSet = {
        type: 'SET_EXPENSES', 
        expenses: [expenses[1]]
    }
    const state = expensesReducer(expenses, expensesSet );

    expect(state).toEqual([expenses[1]]);
});
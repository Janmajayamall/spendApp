import {addExpense, editExpense, removeExpense} from './../../actions/expenses';

test('should setup remove expense actions object', ()=>{
    const action = removeExpense('id123');

    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'id123'
    })
});

test('should edit the passed expense id', ()=>{
    const action = editExpense('id123',{note:"edited"});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id:'id123',
        update:{note:"edited"}
    })
})  


test('should setup an expense with the data provided', ()=>{
    const expense = {
        description:'newTest',
        amount: 1200,
        note:'this is for test',
        createdAt: 100
    }

    const action = addExpense(expense);
    
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            ...expense, 
            id: expect.any(String)
        }
    })
});

test('should setup expense using the default values',()=>{
    const action = addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            description:'',
            amount:0,
            note:'',
            createdAt:0,
            id: expect.any(String)
        }
    })
})
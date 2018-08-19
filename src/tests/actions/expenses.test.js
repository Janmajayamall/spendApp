import {startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense, startEditExpense} from './../../actions/expenses';
import expenses from './../fixtures/expenses.js';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from './../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);


beforeEach((done)=>{
    const expensesData = {};
    expenses.forEach(({id, description, amount, note, createdAt})=>{
        expensesData[id]={description, amount, note, createdAt}
    });

    database.ref('expenses').set(expensesData).then(()=>done());
})

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
 
    const action = addExpense(expenses[0]);
    
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:expenses[0]
    });
});

test('should add expense to database and store', (done)=>{
 
    const store = createMockStore({});

    const expense = {
        description: 'cell',
        note:'',
        amount: 0,
        createdAt: 0  
    };

    store.dispatch(startAddExpense(expense)).then(()=>{
        const actions  = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense:{
                id: expect.any(String), 
                ...expense
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');})
            
        .then((snapshot)=>{
            expect(snapshot.val()).toEqual(expense);
            done();
        });
        
    });



test('should add expense with defaults to database and store', ()=>{
    
    const store = createMockStore({});

    const expense = {
        description: '',
        note:'',
        amount: 0,
        createdAt: 0  
    };

    store.dispatch(startAddExpense({})).then(()=>{
        const actions  = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense:{
                id: expect.any(String), 
                ...expense
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');})
            
        .then((snapshot)=>{
            expect(snapshot.val()).toEqual(expense);
            done();
        });
        
  
});


test('should setup expense action object with data', ()=>{
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses: expenses
    });
});


test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type:'SET_EXPENSES',
        expenses
      });
      done();
    });
  });


test('should remove expense from the firebase',(done)=>{
    const store = createMockStore({});
    const id = expenses[1].id;
    store.dispatch(startRemoveExpense(id)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'REMOVE_EXPENSE',
            id:id
        });
        return database.ref(`expenses/${id}`).once('value');
    }).then((snapshot)=>{
            expect(snapshot.val()).toBeFalsy();
            done();
    })
});



test('should edit expense on the firebase',(done)=>{
    const store = createMockStore({});
    const id = expenses[1].id;
    const update = {
        note: 'hello'
    };
    const exp = {
        description: 'cell',
        note:'',
        amount: 0,
        createdAt: 0
    }
    store.dispatch(startEditExpense(id, update)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'EDIT_EXPENSE',
            id:id,
            update: update
        });
        return database.ref(`expenses/${id}`).once('value');
    }).then((snapshot)=>{
            expect(snapshot.val().note).toBe(update.note);
            done();
    })
})
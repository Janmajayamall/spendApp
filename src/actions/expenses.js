import uuid from 'uuid';
import database from './../firebase/firebase.js';

//Actions for Expenses 
export const addExpense = (expense) => ({
    type:'ADD_EXPENSE',
    expense: expense
});

export const startAddExpense = (expenseData = {}) =>{
    return (dispatch) =>{
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
            } = expenseData;
   
   const expense = {description, note, amount, createdAt};
          
   return database.ref('expenses').push(expense).then((ref)=>{
     dispatch(addExpense({
         id: ref.key,
         ...expense
     }));
   });
    };
};

export const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id: id
});

export const startRemoveExpense = (id) =>{
    return (dispatch) =>{
        return database.ref(`expenses/${id}`).remove().then(()=>{
            dispatch(removeExpense(id));
        });
    }
}

export const editExpense = (id, update)=>({
    type: 'EDIT_EXPENSE',
    id:id,
    update: update
});

export const startEditExpense = (id, update) =>{
    return (dispatch) =>{
        return database.ref(`expenses/${id}`).update(update).then(()=>{
            dispatch(editExpense(id, update));
        });
    }
};



export const setExpenses = (expenses) =>({
    type: 'SET_EXPENSES',
    expenses: expenses
})

export const startSetExpenses = () => {
    return (dispatch) =>{

       return database.ref('expenses').once("value").then((snapshot)=>{
            const expenses = [];

            snapshot.forEach((childSnapshot)=>{
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setExpenses(expenses));
        });
    };
};
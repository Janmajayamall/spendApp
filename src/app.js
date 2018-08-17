import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import 'normalize.css/normalize.css'
import AppRouter from './routers/AppRouter.js'
import configureStore from './store/configureStore.js';
import {addExpense, editExpense, removeExpense} from './actions/expenses.js';
import {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from './actions/filters.js';
import expensesReducer from './reducers/expenses.js';
import filtersReducer from './reducers/filters.js';
import getVisibleExpenses from './selectors/expenses.js';
import { Provider } from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';



const store = configureStore();

store.subscribe(()=>{
    const state = store.getState();
    const filteredExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(filteredExpenses);
});

store.dispatch(addExpense({description: 'water bill', amount: 75}));
store.dispatch(addExpense({description: 'gas bill', amount: 50, createdAt:1000}));
store.dispatch(addExpense({description: 'rent', amount: 100}));


const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));


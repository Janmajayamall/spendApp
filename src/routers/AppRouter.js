import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom'
import AddExpensePage from './../components/AddExpense';
import EditExpensePage from './../components/EditExpense';
import ExpensifyDashboardPage from './../components/ExpensifyDashboardPage';
import NotFoundPage from './../components/NotFoundPage';
import LoginPage from './../components/Login.js'
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute.js'
import PublicRoute from './PublicRoute.js';

export const history = createHistory();

const AppRouter = ()=>(
    <Router history={history}>
    <div>
        <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true} />
            <PrivateRoute path="/create" component={AddExpensePage}/>
            <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
            <PrivateRoute path="/dashboard" component={ExpensifyDashboardPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </div>
    </Router>

);

export default AppRouter;

import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom'
import AddExpensePage from './../components/AddExpense';
import EditExpensePage from './../components/EditExpense';
import ExpensifyDashboardPage from './../components/ExpensifyDashboardPage';
import Header from './../components/Header';
import HelpPage from './../components/HelpPage';
import NotFoundPage from './../components/NotFoundPage';
import LoginPage from './../components/Login.js'
import createHistory from 'history/createBrowserHistory';
import PivateRoute from './PrivateRoute.js'


export const history = createHistory();

const AppRouter = ()=>(
    <Router history={history}>
    <div>
        <Switch>
            <Route path="/" component={LoginPage} exact={true}/>
            <PivateRoute path="/create" component={AddExpensePage}/>
            <PivateRoute path="/edit/:id" component={EditExpensePage}/>
            <Route path="/help" component={HelpPage}/>
            <PivateRoute path="/dashboard" component={ExpensifyDashboardPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </div>
    </Router>

);

export default AppRouter;

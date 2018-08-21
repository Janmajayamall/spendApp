import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from './../actions/auth';

   

export const Header = (props)=>(
    <header>
        <h1>Expensify</h1>
        <NavLink to="/dashboard" activeClassName = "is-active"> Go Home </NavLink>
        <NavLink to="/create" activeClassName = "is-active"> Add Expense</NavLink>
        <button onClick={props.startLogout}>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch) =>{
    return {
        startLogout: () =>{dispatch(startLogout())}
    }
}

export default connect(undefined, mapDispatchToProps)(Header);
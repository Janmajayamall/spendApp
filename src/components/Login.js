import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from './../actions/auth.js'

export const LoginPage = (props) =>{
    return(
        <div className = 'box-layout'>
            <div className = 'box-layout__box'>
                <h1 className='box-layout__title'>SpendAdd</h1>
                <p>Don't worry for expenses from now onwards</p>
                <button className = 'button' onClick={props.startLogin}>Google Login</button>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) =>{
    return {
        startLogin: () =>{dispatch(startLogin())}
    }
}

export default connect(undefined, mapDispatchToProps)(LoginPage);

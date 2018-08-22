import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from './../actions/auth.js'

export const LoginPage = (props) =>{
    return(
        <div className = 'box-layout'>
            <div className = 'box-layout__box'>
                <h1 className='box-layout__title'>Expensify</h1>
                <p>A new way to have your expenses under control</p>
                <button className = 'button' onClick={props.startLogin}>Login in with Google</button>
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

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) =>(
    <div>
        <h1>hello {props.name}</h1>
    </div>
); 

const RequireAuthentication = (WrapperComponent) =>{
    return((props)=>{
        return (<div>
            {props.isAutheticated ? <div><p> You have been authenticated </p>
                                    <WrapperComponent {...props}/></div>
                : <p>Pleae authenticate for viewing the info</p>}   
            </div>  );  
    });
}

const AuthInfo = RequireAuthentication(Info);

ReactDOM.render(<AuthInfo isAutheticated={false} name='Hello'/>, document.getElementById('app'));
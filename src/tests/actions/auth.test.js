import {login, logout} from './../../actions/auth';


test('should setup login objects properly', ()=>{
    const action = login('123');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: '123'
    });
});

test('should setup logout objects properly', ()=>{
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});
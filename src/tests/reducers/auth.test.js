import authReducer from './../../reducers/auth';

test('should add UID property to the auth state', ()=>{
    const state = authReducer({},{
                    type:'LOGIN',
                    uid:'123'
                         });
    expect(state).toEqual({
        uid:'123'
    });
});


test('should empty the auth state', ()=>{
    const state = authReducer({},{
                    type:'LOGOUT'
                         });
    expect(state).toEqual({});
});
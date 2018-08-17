import { createStore } from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrementBy = ({decrementBy = 1}={}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
});

const setCount = ({count}={}) => ({
    type: 'SET',
    count: count
});


const resetCount = ()=>({
    type: 'RESET'
}); 

const store = createStore((state = {count:0}, action)=>{
    switch(action.type){
        case 'INCREMENT':{
            return {
                count: state.count + action.incrementBy
            }
        };
        case 'DECREMENT':{
            return{
                count: state.count - action.decrementBy
            }
        }
        case 'RESET':{
            return{
                count: 0
            }
        }
        case 'SET':{
            return{
                count: action.count
            }
        }
        default:{
            return state
        }
        }
});

const unsuscribe = store.subscribe(()=>{
    console.log(store.getState());    
});

store.dispatch(incrementCount({incrementBy: 5}));


store.dispatch(resetCount());


store.dispatch(decrementBy({decrementBy: 4}));

store.dispatch(setCount({count:100}));





import filtersReducer from './../../reducers/filters.js';
import moment from 'moment';


test('should setup default filter values', ()=>{
    const state = filtersReducer(undefined, {type:'@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
        
    }); 
});

test('sortBy to amount', ()=>{
    const state = filtersReducer(undefined, {type:'SORT_BY_AMOUNT'});
    expect(state).toEqual({
        text:'',
        sortBy:'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('sortBy to date', ()=>{
    const currentState = {
        text:'',
        sortBy:'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const state = filtersReducer(currentState, {type:'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});

test('should set text filter', ()=>{
    const state = filtersReducer(undefined, {type:'SET_TEXT_FILTER', text: '123'});
    expect(state.text).toBe('123');
});

test('should set start date', ()=>{
    const state = filtersReducer(undefined, {type:'SET_START_DATE', startDate:moment(0)});
    expect(state.startDate).toEqual(moment(0));
});

test('should set end date', ()=>{
    const state = filtersReducer(undefined, {type:'SET_END_DATE', endDate:moment(0)});
    expect(state.endDate).toEqual(moment(0));
});
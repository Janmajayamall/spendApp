import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from './../../components/ExpenseListFilters.js';
import {filters, altFilters} from './../fixtures/filters.js';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(()=>{

    setTextFilter = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setEndDate = jest.fn();
    setStartDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters
                        setTextFilter = {setTextFilter}
                        sortByAmount = {sortByAmount}
                        sortByDate = {sortByDate}
                        setEndDate = {setEndDate}
                        setStartDate = {setStartDate}
                        filters = {filters}
                        />);
});


test('should render ExpenseListFilters Page properly with default filters', ()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters Page properly with default filters', ()=>{
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot();
});

test('should handle changing text filter', ()=>{
    const value = "bill";
    wrapper.find('input').simulate('change', {
        target: {value}
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);

});

test('should sort by date', ()=>{
    const value = "date";
    wrapper.find('select').simulate('change', {
        target: {value}
    });
    expect(sortByDate).toHaveBeenCalled();

});

test('should sort by amount', ()=>{
    const value = "amount";
    wrapper.find('select').simulate('change', {
        target: {value}
    });
    expect(sortByAmount).toHaveBeenCalled();

});

test('should handle date changes', ()=>{

    wrapper.find('DateRangePicker').prop('onDatesChange')({
                                                            startDate: altFilters.startDate,
                                                            endDate: altFilters.endDate
                                                            });
    expect(setStartDate).toHaveBeenCalledWith(altFilters.startDate);
    expect(setEndDate).toHaveBeenCalledWith(altFilters.endDate);                                                            

});

test('should handle date focus change', ()=>{
    const focusedInput = "startDate"
    wrapper.find('DateRangePicker').prop('onFocusChange')(focusedInput);
    expect(wrapper.state('calenderFocused')).toBe(focusedInput);
                                                                

});
import moment from 'moment';

export default [{
    id: 1,
    description: 'gum',
    note:'',
    amount: 2,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},{
    id: 2,
    description: 'cell',
    note:'',
    amount: 0,
    createdAt: 0  
},{
    id: 3,
    description: 'bell',
    note:'',
    amount: 1,
    createdAt: moment(0).add(4, 'days').valueOf()
}];


const expenseSingle = [{
    id: 1,
    description: 'gum',
    note:'',
    amount: 2,
    createdAt: moment(0).subtract(4, 'days').valueOf()}]

export {expenseSingle}
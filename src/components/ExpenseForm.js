import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';


export default class ExpenseForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note:props.expense ? props.expense.note : '',
            amount:props.expense ? (props.expense.amount/100).toString() : '',
            createdAt:props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: ''
        };

    }
    
  

    onDescriptionChange = (e) =>{
        const description = e.target.value;
        this.setState(()=>{
            return {
                description: description
            }
        })
    }

    onNoteChange = (e) =>{
        const note = e.target.value;
        this.setState(()=>{
            return{
                note: note
            }
        })
    }

    onAmountChange = (e) =>{
        const amount = e.target.value;

    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>{
                return{
                    amount: amount
                }
            })
        }
       
    }

    onDateChange = (createdAt) =>{
        if(createdAt){
            this.setState(()=>({createdAt:createdAt}));

        }
    }

    onFocusChange = ({focused}) =>{
        this.setState(()=>({calenderFocused:focused}));
    }

    onSubmit = (e) =>{
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(()=>{
                return{
                    error: 'Description and Amount of the expense are required fields'
                }
            });
        }else{
            this.setState(()=>{
                return{
                    error:''
                }
            });
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount)*100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }

    render(){
        return(
             <form className='form' onSubmit = {this.onSubmit}>
                    {this.state.error && <p className='form__error'>{this.state.error}</p>}
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value = {this.state.description}
                        className = "text-input"
                        onChange = {this.onDescriptionChange}

                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value = {this.state.amount}
                        className = "text-input"
                        onChange = {this.onAmountChange}

                    />
                    <textarea
                        className='text-area'
                        placeholder="If you want to add any notes on the expense, add them here!"
                        value = {this.state.note}
                        onChange={this.onNoteChange}>
                    </textarea>
                    <SingleDatePicker
                        date= {this.state.createdAt}
                        onDateChange = {this.onDateChange}
                        focused = {this.state.calenderFocused}
                        onFocusChange = {this.onFocusChange}
                        numberOfMonths= {1}
                        isOutsideRange= {()=>(false)}
                    />
                    <div>
                    <button className='button'>
                        Add Expense
                    </button>
                    </div>
                </form>
        );
    }
}
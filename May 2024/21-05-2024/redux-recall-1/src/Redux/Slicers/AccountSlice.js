import { createSlice } from "@reduxjs/toolkit"

const initialState={
    mainBalance:0.00,
    loanBalance:0.00,
    totalIncome:0.00,
    totalExpense:0.00,
    transactions:[]
}

const accountSlice=createSlice({
    name:'account',
    initialState,
    reducers:{
        addIncome:(state,action)=>{
            state.mainBalance+=parseFloat(action.payload);
            state.totalIncome+=parseFloat(action.payload);
            state.transactions.push(`Income Added: ${action.payload}`);
        },
        addExpence:(state,action)=>{
            if(parseFloat(action.payload)>state.mainBalance){
                alert(`You can't Spent more then your main balance:${state.mainBalance} !`);
                return;
            }
            else{
                state.totalExpense+=parseFloat(action.payload);
                state.mainBalance-=parseFloat(action.payload);
                state.transactions.push(`Expense Added: ${action.payload}`);
            }
        },
        getLoan:(state,action)=>{
            state.mainBalance+=parseFloat(action.payload);
            state.loanBalance+=parseFloat(action.payload);
            state.transactions.push(`Loan received: ${action.payload}`);
        },
        repayLoan:(state,action)=>{
            if(state.mainBalance<parseFloat(action.payload)){
                alert(`You can't repay loan as your main balance is low:${state.mainBalance} !`);
                return;
            }
            else if(state.loanBalance<parseFloat(action.payload)){
                alert(`Your Pending Loan is ${state.loanBalance} which is lower then amount you paying ${action.payload} !`);
                return;
            }
            else{
                state.loanBalance-=parseFloat(action.payload);
                state.mainBalance-=parseFloat(action.payload);
                state.transactions.push(`Loan Repaid: ${action.payload}`);
            }
        }

    }
})

export const {addIncome,addExpence,getLoan,repayLoan}=accountSlice.actions;
export default accountSlice.reducer;
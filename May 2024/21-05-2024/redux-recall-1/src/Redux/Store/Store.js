import {configureStore} from '@reduxjs/toolkit';
import accountReducer from '../Slicers/AccountSlice';
const store=configureStore({
    reducer:{
        account: accountReducer
    }
})

export default store;
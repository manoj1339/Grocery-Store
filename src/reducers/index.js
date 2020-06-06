import { combineReducers } from 'redux';
import cartReducer from './cartReducer';

const all_reducers = combineReducers({
    cartReducer
});

export default cartReducer;
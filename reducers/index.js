import { combineReducers } from 'redux';
import todos from './todos';
import orderTable from './OrderTable';

const rootReducer = combineReducers({
  todos,
  orderTable
});

export default rootReducer;

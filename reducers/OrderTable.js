import { SELECT_POSITION, SELECT_NAME } from '../constants/OrderTableActionTypes';

const initialState = [];
for(let i = 0; i < 10; i++) {
    initialState.push({
       position: '',
       name: '',
       id: i
    });
}

export default function orderTable(state = initialState, action) {
  switch (action.type) {
  case SELECT_POSITION:
    return state.map(row =>
      row.id === action.id ?
        { ...row, position: action.index } :
        row
    );

  case SELECT_NAME:
    return state.map(row =>
      row.id === action.id ?
        { ...row, name: action.index } :
        row
    );

  default:
    return state;
  }
}

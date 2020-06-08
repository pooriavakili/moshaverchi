import {ADD_DATA} from './ActionType';

export const reducer=(state={data:null},action)=> {
  switch (action.type) {
    case ADD_DATA:
      console.log(state)
      return {
        ...state,
        data: action.payload
      }
      break;
    default:
      return state
  }
}

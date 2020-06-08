import {ADD_DATA} from './ActionType';

export const addData = (props) => {
  return {
    type: ADD_DATA,
    payload: props
  };
};

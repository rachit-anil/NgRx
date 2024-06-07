import { createReducer, on } from '@ngrx/store';
import { decrement, increment, multiplyByNumber } from './counter.actions';

const initialState = 3;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return state + 1;
  }),
  on(decrement, (state) => {
    return state - 1;
  }),
  on(multiplyByNumber, (state, action) => {
    return state * action.value;
  })
);


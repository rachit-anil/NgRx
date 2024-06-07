import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');

export const decrement = createAction('[Counter] Decrement');

export const multiplyByNumber = createAction(
  '[Counter] Multiply by Number',
  props<{ value: number }>()
);

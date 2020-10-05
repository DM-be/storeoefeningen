import { ActionType, createAction } from '@ngrx/store';
import { Action } from '@ngrx/store';
export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');




export class IncrementCounterAction implements Action  {
  public type = "[Counter Component] Increment";
  constructor(payload?: string) {
  }
}

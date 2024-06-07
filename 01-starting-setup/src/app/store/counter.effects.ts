import { Actions, createEffect, ofType } from '@ngrx/effects';
import { decrement, increment } from './counter.actions';
import {
  concatMap,
  flatMap,
  mergeMap,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCount } from './counter.selectors';
import { DataService } from '../services/DataService';

@Injectable()
export class CounterEffects {
  saveCount = createEffect(
    () =>
      this.actions$.pipe(
        ofType(increment, decrement),
        withLatestFrom(this.store.select(selectCount)),
        tap(([action, counter]) => {
          console.log(action);
          console.log(counter);
          localStorage.setItem('counter', counter.toString()); // async task
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store<{ counter: number }>,
    private dataService: DataService
  ) {}
}

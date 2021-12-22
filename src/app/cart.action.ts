import { createAction, props } from "@ngrx/store";
import {Item} from './item';

export const addProd = createAction(
    '[Cart List] Add Cart',
    props<{prod:Item}>()
);

export const delProd = createAction(
    '[Cart List] Del Cart',
    props<{prod:Item}>()
);
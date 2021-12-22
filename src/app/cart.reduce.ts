import { createReducer, on } from "@ngrx/store";
import { addProd, delProd } from "./cart.action";
import { Item } from "./item";

export const initialState:Array<Item> = []

export const cartReducer = createReducer(
    initialState,
    on(addProd, (state, {prod})=>{
        return [...state, prod]
    }),
    on(delProd, (state, {prod})=>state.filter(p => p.name !== prod.name))
)

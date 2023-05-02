/* eslint-disable indent */
import { ActionTypes, CartItem } from "../coffees/actions";
import { produce } from "immer";

function coffeesReducer(state: CartItem[], action: any){
  switch(action.type){
    case ActionTypes.ADD_COFFEE_TO_CART: 
      return produce(state, (draft) => {
        const isCoffeeAlreadyInCart = state.findIndex(
          coffee => coffee.id == action.payload.coffee.id
        );
        if(isCoffeeAlreadyInCart < 0){
          draft.push(action.payload.coffee);
        }else{
          draft[isCoffeeAlreadyInCart].quantity += action.payload.coffee.quantity;
        }
      });

    case ActionTypes.UPDATE_COFFEE_QUANTITY:
      console.log("Update Coffee Quantity");
        return produce(state, (draft) => {
          const isCoffeeAlreadyInCart = state.findIndex(
            (coffee) => coffee.id === action.payload.coffeeId
          );
          console.log(isCoffeeAlreadyInCart);
          if(isCoffeeAlreadyInCart >= 0){
            const item = draft[isCoffeeAlreadyInCart];
            draft[isCoffeeAlreadyInCart].quantity = action.payload.type === "increase" ? item.quantity + 1 : item.quantity - 1;
          }
        });

    case ActionTypes.REMOVE_COFFEE_FROM_CART:
      return produce(state, (draft) => {
        return draft.filter((coffee) => coffee.id !== action.payload.coffeeId);
      });
    default:
      return state;
  }
}


export { coffeesReducer };
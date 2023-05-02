export enum ActionTypes {
  ADD_COFFEE_TO_CART = "ADD_COFFEE_TO_CART",
  REMOVE_COFFEE_FROM_CART = "REMOVE_COFFEE_FROM_CART",
  UPDATE_COFFEE_QUANTITY = "UPDATE_COFFEE_QUANTITY"
}

export interface Coffee {
  name: string;
  description: string;
  tags: string[];
  price: number;
  photo: string;
  id: number;
}

export interface CartItem extends Coffee{
  quantity: number;
}

function addCoffeeToCartAction(coffee: CartItem){
  return {
    type: ActionTypes.ADD_COFFEE_TO_CART,
    payload: {
      coffee
    }
  };
}

function removeCoffeeFromCartAction(coffeeId: number){
  return {
    type: ActionTypes.REMOVE_COFFEE_FROM_CART,
    payload: {
      coffeeId
    }
  };
}

function updateCoffeeQuantityFromCartAction(coffeeId: number, type: "increase" | "decrease"){
  return {
    type: ActionTypes.UPDATE_COFFEE_QUANTITY,
    payload: {
      coffeeId,
      type
    }
  };
}

export { 
  addCoffeeToCartAction,
  removeCoffeeFromCartAction,
  updateCoffeeQuantityFromCartAction
};
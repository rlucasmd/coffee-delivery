import { ReactNode, createContext, useEffect, useReducer } from "react";
import { coffeesReducer } from "../reducers/coffees/reducer";
import { 
  CartItem, 
  addCoffeeToCartAction,
  removeCoffeeFromCartAction,
  updateCoffeeQuantityFromCartAction
} from "../reducers/coffees/actions";

interface coffeeCartContextProps {
  addCoffeeToCart : (coffee: CartItem) => void;
  cartQuantity: number;
  cart: CartItem[];
  updateCoffeeCartQuantity: (coffeeId: number, type: "increase"|"decrease") => void;
  removeCoffeeFromCart: (coffeeId: number) => void;
}

interface coffeeCartContextProviderProps {
  children: ReactNode;
}

export const CoffeeCartContext = createContext({} as coffeeCartContextProps);

function CoffeeCartContextProvider({children} : coffeeCartContextProviderProps){

  const [cart, dispatch] = useReducer(
    coffeesReducer,
    [] as CartItem[]
  );

  useEffect(() => {
    console.log(cart);
  },[cart]);

  function addCoffeeToCart(coffee: CartItem){
    console.log("Store coffee");
    dispatch(addCoffeeToCartAction(coffee));
  }

  function updateCoffeeCartQuantity(coffeeId: number, type: "increase" | "decrease"){
    dispatch(updateCoffeeQuantityFromCartAction(coffeeId, type));
  }

  function removeCoffeeFromCart(coffeeId: number){
    dispatch(removeCoffeeFromCartAction(coffeeId));
  }

  const cartQuantity = cart.reduce((acc, coffee) => {
    acc += coffee.quantity;
    return acc;
  }, 0);
  return (
    <CoffeeCartContext.Provider 
      value={{
        addCoffeeToCart,
        updateCoffeeCartQuantity,
        removeCoffeeFromCart,
        cartQuantity,
        cart,
      }}
    >
      {children}
    </CoffeeCartContext.Provider>
  );
}

export { CoffeeCartContextProvider };




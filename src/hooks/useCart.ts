import { useContext } from "react";
import { CoffeeCartContext } from "../contexts/CoffeeCartContext";

function useCart(){
  const value = useContext(CoffeeCartContext);
  return value;
}

export { useCart };
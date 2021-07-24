import { ADD_CART_ITEM, REMOVE_CART_ITEM } from "../constants";
import cartsService from "../services/carts.service";
import { ActionI, ProductI } from "../../interfaces";
  const initialState = {
    carts: [],
    type: null,
  };
  
  const carts = (state = initialState, action: ActionI) => {
   
    let carts:Array<ProductI>=[]
    switch (action.type) {
      case ADD_CART_ITEM:
        carts = cartsService.addItem(action.payload, [...state.carts]);
        return { ...state, carts, type: ADD_CART_ITEM };
      case REMOVE_CART_ITEM:
        carts = cartsService.removeItem(action.payload, [...state.carts]);
        return { ...state, carts: carts, type: REMOVE_CART_ITEM };
      default:
        return state;
    }
  };
  
  export default carts;
  
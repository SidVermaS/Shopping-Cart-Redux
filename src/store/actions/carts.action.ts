
import { ProductI } from "../../interfaces"; 
import { ADD_CART_ITEM, REMOVE_CART_ITEM } from "../constants";
const addItem = (product: ProductI) => async (dispatch: Function) => {
 
  dispatch({ payload: product, type: ADD_CART_ITEM });
};
const removeItem = (product: ProductI) => async (dispatch: Function) => {
  
  if(product.count>0) {
    dispatch({ payload: product, type: REMOVE_CART_ITEM });
  }
};
export { addItem,removeItem };

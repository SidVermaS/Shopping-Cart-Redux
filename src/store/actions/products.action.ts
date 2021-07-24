import productsService from "../services/products.service";
import { ProductI } from "../../interfaces"; 
import { INCREASE_QUANTITY, DECREASE_QUANTITY} from "../constants";
const fetch = (values: any) => async (dispatch: Function) => {
  const result = await productsService.fetch(values);
  dispatch(result);
};
const increaseQuantity = (product: ProductI,) => async (dispatch: Function) => {
  dispatch({ payload: product, type: INCREASE_QUANTITY });
};
const decreaseQuantity = (product: ProductI) => async (dispatch: Function) => {
    dispatch({ payload: product, type: DECREASE_QUANTITY });
};
export { fetch, increaseQuantity, decreaseQuantity };

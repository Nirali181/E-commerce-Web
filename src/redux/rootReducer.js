import { combineReducers } from "redux";
import productReducer from "../redux/slice/productSlice";

const rootReducer = combineReducers({
  Product: productReducer,
});
export default rootReducer;

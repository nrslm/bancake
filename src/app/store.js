import { configureStore } from "@reduxjs/toolkit";
import CheckReducer from "../features/check/CheckSlice";
import Basket from "../features/basket/BasketSlice";

const store = configureStore({
  reducer: {
    stories: CheckReducer,
    bas: Basket
  },
});

export default store;
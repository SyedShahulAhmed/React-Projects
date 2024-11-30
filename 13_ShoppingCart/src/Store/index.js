import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cart";

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Add more reducers here if needed
  },
});

export default store; // Export the store for use in your app

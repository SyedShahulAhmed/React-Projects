import { createSlice } from "@reduxjs/toolkit";

// Initial state for the cart
const initialState = {
  items: localStorage.getItem("Carts") ? JSON.parse(localStorage.getItem("Carts")) : [],
  tabStatus: false, // Corrected to camelCase
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Reducer to add a product to the cart
    addToCart(state, action) {
      const { productId, quantity } = action.payload;
      const existingItem = state.items.find(item => item.productId === productId);
      
      if (existingItem) {
        // If the item already exists, increase the quantity
        existingItem.quantity += quantity;
      } else {
        // Otherwise, add the new item to the cart
        state.items.push({ productId, quantity });
      }
      localStorage.setItem("Carts",JSON.stringify(state.items))
    },

    // Reducer to change the quantity of a product in the cart
    changeQuantity(state, action) {
      const { productId, quantity } = action.payload;
      const existingItem = state.items.find(item => item.productId === productId);

      if (existingItem) {
        if (quantity > 0) {
          existingItem.quantity = quantity; // Update the quantity
        } else {
          // Remove item when quantity is 0
          state.items = state.items.filter(item => item.productId !== productId);
        }
      }
      localStorage.setItem("Carts",JSON.stringify(state.items))
    },

    // Reducer to toggle the cart's visibility
    toggleStatus(state) {
      state.tabStatus = !state.tabStatus; // Toggle the tabStatus between true and false
    },
  },
});

// Export the actions
export const { addToCart, changeQuantity, toggleStatus } = CartSlice.actions;

// Export the reducer
export default CartSlice.reducer;

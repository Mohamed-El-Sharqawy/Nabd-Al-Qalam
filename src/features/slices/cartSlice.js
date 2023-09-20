import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  cartTotalPrice: localStorage.getItem("total")
    ? JSON.parse(localStorage.getItem("total"))
    : 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //! Add a Book to the Cart
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item?._id == action.payload?._id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      console.log(action.payload);
    },

    //! Delete Book from the Cart
    deleteFromCart: () => {},

    //! Clear the Cart from the Chosen Item
    clearItem: (state, action) => {
      const newCart = state.cartItems.filter(
        (product) => product?._id !== action.payload?._id
      );
      state.cartItems = newCart;

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    //! Clear the Cart
    clearCart: (state) => {
      state.cartItems = [];

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    //! Get the Total Price
    getTotal: (state) => {
      const { total } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          console.log(cartItem);
          const { price, quantity } = cartItem;
          cartTotal.total += +price * +quantity;

          return cartTotal;
        },
        {
          total: 0,
        }
      );

      state.cartTotalPrice = total;
      localStorage.setItem("total", JSON.stringify(state.cartTotalPrice));
    },
  },
});

export const { addToCart, deleteFromCart, clearItem, clearCart, getTotal } =
  cartSlice.actions;

export default cartSlice.reducer;

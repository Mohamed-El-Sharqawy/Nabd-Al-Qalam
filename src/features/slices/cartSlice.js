import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
    },

    //! Clear the Cart from the Chosen Book
    clearItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (product) => product?._id !== action?.payload
      );

      localStorage.setItem("cart", JSON.stringify(state.cartItems));

      toast.error("Deleted from The Cart", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
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

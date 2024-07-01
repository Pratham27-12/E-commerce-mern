import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO,
    CLEAR_CART,
  } from "../constants/cartConstant";
  import axios from "axios";
  
  // Add to Cart
  export const addItemToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/v1/product/${id}`);
    dispatch({
      type: ADD_TO_CART,
      payload: {
        productId: data.Product._id,
        name: data.Product.name,
        price: data.Product.price,
        image: data.Product.images[0].url,
        stock: data.Product.Stock,
        quantity,
      },
    });
  
    // Save cart data to localStorage after dispatching the action
    localStorage.setItem("cartItem", JSON.stringify(getState().cart.cartItems));
  };
  
  // Remove item from Cart
  export const removeItemFromCart = (id) => async (dispatch, getState) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  
    // Save cart data to localStorage after dispatching the action
    localStorage.setItem("cartItem", JSON.stringify(getState().cart.cartItems));
  };

  export const clearCart = () => async (dispatch) => {
    dispatch({ type: CLEAR_CART }); // Dispatch action to clear cart

    // Clear cart data from localStorage
    localStorage.removeItem("cartItem");
  };
  
  
  // Save Shipping Info
  export const saveShippingInfo = (data) => async (dispatch, getState) => {
    dispatch({
      type: SAVE_SHIPPING_INFO,
      payload: data,
    });
  
    // Save shipping info data to localStorage after dispatching the action
    localStorage.setItem("shippingInfo", JSON.stringify(data));
  };
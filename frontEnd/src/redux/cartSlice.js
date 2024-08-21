import { createSlice } from "@reduxjs/toolkit";

// use "useSelector" to get the array
const initialState = {
  selectedProducts: localStorage.getItem("selectedProducts")
    ? JSON.parse(localStorage.getItem("selectedProducts"))
    : [],
  selectedProductsID: localStorage.getItem("selectedProductsID")
    ? JSON.parse(localStorage.getItem("selectedProductsID"))
    : [],
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  // action.payload => product From API => القيمة التى بداخل الاقواس
  reducers: {
    addToCart: (state, action) => {
      // action.payload => product From API => القيمة التى بداخل الاقواس
      const productWithQuantity = {
        ...action.payload,
        quantity: 1,
      };
      state.selectedProducts.push(productWithQuantity);
      state.selectedProductsID.push(action.payload.id);

      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(state.selectedProducts)
      );
      localStorage.setItem(
        "selectedProductsID",
        JSON.stringify(state.selectedProductsID)
      );
    },

    increaseQuantity: (state, action) => {
      // action.payload => product From user, we dh b2a obj selected
      state.selectedProducts.find((item) => {
        item.id === action.payload.id ? item.quantity += 1 : null
      });
      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(state.selectedProducts)
      );
    },

    decreaseQuantity: (state, action) => {
      // action.payload => product From user
      const decreaseProduct = state.selectedProducts.find((item) => {
        return item.id === action.payload.id;
      });

      decreaseProduct.quantity -= 1;
      if (decreaseProduct.quantity === 0) {
        // delete the selected product
        const newArr = state.selectedProducts.filter((item) => {
          return item.id !== action.payload.id;
        });

        const newArr2 = state.selectedProductsID.filter((item) => {
          return item !== action.payload.id;
        });

        state.selectedProducts = newArr;
        state.selectedProductsID = newArr2;

        localStorage.setItem(
          "selectedProductsID",
          JSON.stringify(state.selectedProductsID)
        );
      }

      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(state.selectedProducts)
      );
    },

    deleteProduct: (state, action) => {
      // delete the selected product
      const newArr = state.selectedProducts.filter((item) => {
        return item.id !== action.payload.id;
      });

      const newArr2 = state.selectedProductsID.filter((item) => {
        return item !== action.payload.id;
      });

      state.selectedProducts = newArr;
      state.selectedProductsID = newArr2;

      localStorage.setItem(
        "selectedProductsID",
        JSON.stringify(state.selectedProductsID)
      );

      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(state.selectedProducts)
      );
    },
  },
});

//  دائماً هتنساهااااااااااااااااااااااااااااااااااااااع
export const { deleteProduct, addToCart, increaseQuantity, decreaseQuantity } = counterSlice.actions;

export default counterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    productCount: 0,
    getCartItemsData: [],
    sizeData: [],
    quantity: 0,
    favouriteData:[]
  },
  reducers: {
    increament: (state, action) => {
      state.productCount = state.productCount + 1;
    },

    getCartData: (state, action) => {
      console.log("asa", action.payload);
      let existData = state?.getCartItemsData.find(
        (val, id) => val?.quantityData?.id === action.payload?.quantityData?.id
      );
      if (!existData) {
        state.getCartItemsData.push(action.payload);
        state.sizeData.push(action.payload.size);
      } else {
        existData.quantityData.quantity = existData?.quantityData?.quantity + 1;
      }
    },
    increamentQuantity: (state, action) => {
      let existQuantity = state?.getCartItemsData.find(
        (val, id) => val?.quantityData?.id === action.payload
      );
      if (existQuantity) {
        existQuantity.quantityData.quantity =
          existQuantity?.quantityData?.quantity + 1;
          state.productCount = state.productCount + 1
      }
      console.log("existQuantity", existQuantity?.quantityData);
    },
    decreamentQuantity: (state, action) => {
      console.log("111111",action.payload)
      let existQuantity = state?.getCartItemsData?.find(
        (val, id) => val?.quantityData?.id === action.payload
      );
      console.log("existQuantity",existQuantity?.quantityData)
      if (existQuantity && existQuantity?.quantityData?.quantity > 0) {
        existQuantity.quantityData.quantity =
          existQuantity?.quantityData?.quantity - 1;
        state.productCount = state.productCount - 1;

        if (existQuantity && existQuantity?.quantityData?.quantity < 1) {
          state.getCartItemsData = state.getCartItemsData.filter(
            (val, id) => val?.quantityData?.id !== action.payload
          );
        }
      }
    },
    removeItem: (state, action) => {
      const removedItem = state.getCartItemsData.find(
        (val) => val?.quantityData?.id === action.payload
      );
    console.log("removedItem",removedItem)
      if (removedItem) {
        state.getCartItemsData = state.getCartItemsData.filter(
          (val) => val?.quantityData?.id !== action.payload
        );
    
        // Update the productCount by subtracting the removed item's quantity
        state.productCount -= removedItem?.quantityData?.quantity;
      }
    },
    favouritesItems:(state,action)=>{
      const { data, id } = action.payload;
      console.log("asasasa",data)
      console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",id)
      const existingItem = state?.favouriteData.find((item) => item.id === id);
      console.log("existingItem",existingItem)
      if (!existingItem) {
        state.favouriteData.push(data);
        state.sizeData.push(action.payload.size);
      }
    },
    removeFavouriteItems:(state,action)=>{
      console.log("aaa121212",action.payload)
       const existFav = state.favouriteData.find((val,id)=>val?.id === action.payload)
       console.log("existFav",existFav)
      if(existFav){
        state.favouriteData = state.favouriteData.filter((val,id)=>val?.id !== action.payload)
       
      }}
  },
});
export const {
  increament,
  getCartData,
  increamentQuantity,
  decreamentQuantity,
  removeItem,
  favouritesItems,
  removeFavouriteItems
} = productSlice.actions;

export default productSlice.reducer;

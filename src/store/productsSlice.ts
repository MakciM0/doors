// import { TProducts, TProductsCount } from "./../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import store, { RootState } from "./store";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    CurrentPage: 1 as number,
    CurrentFilterMaterial: '' as string,
    CurrentFilter: 'wood' as string,

    // CurrentCategory: null as string | null,
    
  },

  reducers: {

    // GoToWood: (state, action: PayloadAction<number>) =>{
    
    // },

    // Pagination
    ChangeCurrentPage: (state, action: PayloadAction<number>) => {
      state.CurrentPage = action.payload;
    },
    PrevPage: (state) => {
      state.CurrentPage -= 1;
    },
    NextPage: (state) => {
      state.CurrentPage += 1;
    },
    SetCurrentFilterMaterial:(state, action: PayloadAction<string>) =>{ //???Главный Фильтр(железная или дерев или ламинат...???)
      state.CurrentFilterMaterial = action.payload
    },
    SetCurrentFilter:(state, action: PayloadAction<string>) =>{
      state.CurrentFilter = action.payload
    },


  },
});

export const {
  ChangeCurrentPage,
  NextPage,
  PrevPage,
  SetCurrentFilterMaterial,
  SetCurrentFilter,

} = productsSlice.actions;
export const selectCount = (state: RootState) => state.products;
export default productsSlice.reducer;

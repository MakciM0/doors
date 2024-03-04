
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import store, { RootState } from "./store";
import { TCartItemMetal, TCartItemWood, TItemMetal, TItemWood } from "../const/types";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    CurrentPage: 1 as number,
    CurrentFilterMaterial: '' as string,
    CurrentFilter: 'wood' as string,
    CurrentItem: null as TItemWood | TItemMetal,
    Cart : []  as unknown as [TCartItemMetal | TCartItemWood]  ,


    // CurrentCategory: null as string | null,
    
  },

  reducers: {

    // GoToWood: (state, action: PayloadAction<number>) =>{
    
    // },
    SetCurrentItem :(state, action: PayloadAction<TItemWood | TItemMetal>) =>{
      state.CurrentItem = action.payload
    },

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

    // CART----------------
    AddToCart:(state, action: PayloadAction<string | {name: string; img: string;}>) =>{
      if(state.CurrentItem.kind === "TItemMetal" && typeof(action.payload) !== "string"){
        let currentAmount //-----------
        state.Cart.push(
        {
          id: state.CurrentItem.id,
          kind: state.CurrentItem.kind,
          name: state.CurrentItem.name,
          price: state.CurrentItem.price,
          sizes: state.CurrentItem.sizes,
          currentInsidePanel : action.payload ,
          priceCategory: state.CurrentItem.priceCategory,
          additional: state.CurrentItem.additional,
          insidePanels: state.CurrentItem.insidePanels,
          color: state.CurrentItem.color,
          amount: 1,// -------------------
        }
      )
      }
      if(state.CurrentItem.kind === "TItemWood" && typeof(action.payload) === "string"){
        let translateColor: string = ''
        switch(action.payload) {
          case  'darkNut': translateColor ='Темный орех';break;
          case  'naplesOak': translateColor ='Дуб неаполь';break;
          case  'bleachedOak' : translateColor ='Беленый дуб';break;
          case  'wenge': translateColor = 'Венге' ;break;
          case 'gray': translateColor = 'Серый';break;
          case  'cappuccino': translateColor = 'Капучино';break;
        } 
        // if(action.pa)
        let currentAmount //-----------Проверка на размеры
        state.Cart.push(
        {
          id: state.CurrentItem.id,
          kind: state.CurrentItem.kind,
          name: state.CurrentItem.name,
          price: state.CurrentItem.price,
          sizes: state.CurrentItem.sizes,
          currentColor: action.payload,
          currentColor_translate: translateColor,
          material : state.CurrentItem.material,
          fullPrice : state.CurrentItem.fullPrice,
          colors : state.CurrentItem.colors,
          colors_translate : state.CurrentItem.colors_translate,
          amount: 1,// -------------------
        }
      )
      }
      
    }
  },
});

export const {
  ChangeCurrentPage,
  NextPage,
  PrevPage,
  SetCurrentFilterMaterial,
  SetCurrentFilter,
  SetCurrentItem,
  AddToCart,

} = productsSlice.actions;
export const selectCount = (state: RootState) => state.products;
export default productsSlice.reducer;

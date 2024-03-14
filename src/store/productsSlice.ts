
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

    Cart : []  as unknown as [TCartItemMetal | TCartItemWood],
    TotalPrice : 0 as number,


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
    // AddToCart:(state, action: PayloadAction< | >) =>{
    //   
    //   
    //   }
      
    // },
    AddToCartWood:(state, action: PayloadAction<{currentColor: string, currentSize: string; currentPrice: number}>) =>{
      let checkDublicate = state.Cart.find((item) => 
        (item.kind === 'TItemWood') &&
        (item.id === state.CurrentItem.id) && 
        (item.currentSize === action.payload.currentSize)&&
        (item.currentColor === action.payload.currentColor) &&
        (item.currentPrice === action.payload.currentPrice)

      )
      
      
      if(state.CurrentItem.kind === "TItemWood" && !checkDublicate){


        let translateColor: string = ''
        switch(action.payload.currentColor) {
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
          currentColor: action.payload.currentColor,
          currentColor_translate: translateColor,
          currentSize: action.payload.currentSize,
          currentPrice: action.payload.currentPrice,
          material : state.CurrentItem.material,
          fullPrice : state.CurrentItem.fullPrice,
          colors : state.CurrentItem.colors,
          colors_translate : state.CurrentItem.colors_translate,
          amount: 1,// -------------------
        })
        state.TotalPrice += action.payload.currentPrice
      }
        
      
    },
    AddToCartMetal:(state, action: PayloadAction<{name: string; img: string; currentSize:string}>) =>{
      let checkDublicate = state.Cart.find((item) => 
        (item.kind === 'TItemMetal') &&
        (item.id === state.CurrentItem.id) && 
        (item.currentSize === action.payload.currentSize)&&
        (item.currentInsidePanel.name === action.payload.name) &&
        (item.currentInsidePanel.img === action.payload.img )
      )

      if(state.CurrentItem.kind === "TItemMetal" && !checkDublicate){
          let currentAmount //-----------
          state.Cart.push(
          {
            id: state.CurrentItem.id,
            kind: state.CurrentItem.kind,
            name: state.CurrentItem.name,
            price: state.CurrentItem.price,
            sizes: state.CurrentItem.sizes,
            currentInsidePanel : {name: action.payload.name, img: action.payload.img},
            currentSize: action.payload.currentSize,
            priceCategory: state.CurrentItem.priceCategory,
            additional: state.CurrentItem.additional,
            insidePanels: state.CurrentItem.insidePanels,
            color: state.CurrentItem.color,
            amount: 1,// -------------------
          }
        )
        state.TotalPrice += state.CurrentItem.price
        }
    },

    IncrementItemWood:(state, action: PayloadAction<TCartItemWood>) =>{
      let isFind = state.Cart.find((item) => 
        (item.kind === 'TItemWood') &&
        (item.id === action.payload.id) &&
        (item.currentSize === action.payload.currentSize) &&
        (item.currentColor === action.payload.currentColor) &&
        (item.currentPrice === action.payload.currentPrice)
      )
      if(isFind) {
        isFind.amount++
        state.TotalPrice += action.payload.currentPrice
      }
    },
    DecrementItemWood:(state, action: PayloadAction<TCartItemWood>) =>{
      let isFind = state.Cart.find((item) => 
      (item.kind === 'TItemWood') &&
      (item.id === action.payload.id) &&
      (item.currentSize === action.payload.currentSize) &&
      (item.currentColor === action.payload.currentColor) &&
      (item.currentPrice === action.payload.currentPrice)
    )
      if(isFind && isFind.amount > 1){ 
        isFind.amount--
        state.TotalPrice -= action.payload.currentPrice
      }
    },
    IncrementItemMetal:(state, action: PayloadAction<TCartItemMetal>) =>{ 
      let isFind = state.Cart.find((item) => 
        (item.kind === 'TItemMetal') &&
        (item.id === action.payload.id) &&
        (item.currentSize === action.payload.currentSize) &&
        (item.currentInsidePanel.name === action.payload.currentInsidePanel.name) &&
        (item.currentInsidePanel.img === action.payload.currentInsidePanel.img)
      )
      if(isFind){
        isFind.amount++
        state.TotalPrice += action.payload.price
      }
    },
    DecrementItemMetal:(state, action: PayloadAction<TCartItemMetal>) =>{
      let isFind = state.Cart.find((item) => 
        (item.kind === 'TItemMetal') &&
        (item.id === action.payload.id) &&
        (item.currentSize === action.payload.currentSize) &&
        (item.currentInsidePanel.name === action.payload.currentInsidePanel.name) &&
        (item.currentInsidePanel.img === action.payload.currentInsidePanel.img)
      )
      if(isFind && isFind.amount > 1){
        isFind.amount--
        state.TotalPrice -= action.payload.price
      }
    },
    // DeleteItem ----------------------
    DeleteItemMetal:(state, action: PayloadAction<TCartItemMetal>) =>{
      let isFind = state.Cart.find((item) => 
        (item.kind === 'TItemMetal') &&
        (item.id === action.payload.id) &&
        (item.currentSize === action.payload.currentSize) &&
        (item.currentInsidePanel.name === action.payload.currentInsidePanel.name) &&
        (item.currentInsidePanel.img === action.payload.currentInsidePanel.img)
      )
      if(isFind){
        state.TotalPrice -= isFind.amount * isFind.price;
        let index = state.Cart.indexOf(isFind)
        if(index !== -1){
          state.Cart.splice(index, 1)
        }
      }
    },
    DeleteItemWood:(state, action: PayloadAction<TCartItemWood>) =>{
      let isFind = state.Cart.find((item) => 
        (item.kind === 'TItemWood') &&
        (item.id === action.payload.id) &&
        (item.currentSize === action.payload.currentSize) &&
        (item.currentColor === action.payload.currentColor) &&
        (item.currentPrice === action.payload.currentPrice)
      )
      if(isFind){
        state.TotalPrice -= isFind.amount * isFind.price;
        let index = state.Cart.indexOf(isFind)
        if(index !== -1){
          state.Cart.splice(index, 1)
        }
      }
    },
  
  },
});

export const {
  ChangeCurrentPage,
  NextPage,
  PrevPage,
  SetCurrentFilterMaterial,
  SetCurrentFilter,
  SetCurrentItem,
  // AddToCart,
  AddToCartWood,
  AddToCartMetal,
  IncrementItemWood,
  DecrementItemWood,
  IncrementItemMetal,
  DecrementItemMetal,
  DeleteItemMetal,
  DeleteItemWood,

} = productsSlice.actions;
export const selectCount = (state: RootState) => state.products;
export default productsSlice.reducer;

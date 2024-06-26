export type TItem = 
  {
    name: string,
    id: string,
    type: string,
    style: 'metal' | 'wood',
    priceCategory : '' | 'eco' | 'budget' | 'premium',
    additional: {
      appar: boolean,
      mirror: boolean,
      noise: boolean,
      thermal: boolean,
    },
    material: string,

   

    price: number,
    fullPrice : number,
    sizes: string[],
    color: string,
  }

export type TItemMetal ={
  kind: 'TItemMetal', // Literal type 
  name: string,
  id: string,
  priceCategory : '' | 'eco' | 'budget' | 'premium',
  additional: {
    appar: boolean,
    mirror: boolean,
    noise: boolean,
    thermal: boolean,
  },
  insidePanels: 
    {
      name: string,
      img: string
    }[]
  
  // material: string,
  price: number,
  sizes: string[],
  // color: string,
}

export type TItemWood ={
  kind: 'TItemWood', // Literal type 
  name: string,
  id: string,
  // additional: {
  //   appar: boolean,
  //   mirror: boolean,
  //   noise: boolean,
  //   thermal: boolean,
  // },
  material: string,
  price: number,
  fullPrice : number,
  sizes: string[],
  colors: string[],  
  colors_translate: string[],

}

 export type TPhotoSlides = { //???
  // albumId: number;
  id: number;
  title: string;
  url: string;
  // thumbnailUrl: string;
};

export interface TCartItemMetal extends TItemMetal{
  currentInsidePanel: {
    name: string,
    img: string,
  } 
  amount : number,
  currentSize: string,
}

export interface TCartItemWood extends TItemWood{
  currentColor_translate: string,
  currentColor: string,
  amount : number,
  currentSize: string,
  currentPrice: number,
  
}

export type TAcrhItem ={
  id: number,
  color: string,
  img: string,
  back_text: string,

}

export type TItemSale ={
   id: number,
   kind: 'wood' | 'metal',
   name: string,
   desc: string,
   addit_images: string,
   old_Price: number,
   new_Price: number,
   material: string,
   color: string,
   size: string,

}
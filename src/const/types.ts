


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
    
}

 export type TPhotoSlides = {
  // albumId: number;
  id: number;
  title: string;
  url: string;
  // thumbnailUrl: string;
};

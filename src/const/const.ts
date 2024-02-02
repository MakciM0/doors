import { TItem } from "./types";

export const nullItem : TItem = {
  name: "",
  id: "",
  type: "",
  style: "wood",
  additional : {
    appar: false,
    mirror: false,
    noise: false,
    thermal: false,
  },
  material: "",
  price: 0,
  fullPrice: 0,
  sizes: ['', ''],
  color: ""
}
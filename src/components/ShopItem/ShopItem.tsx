import React, { FC, useEffect, useState } from "react";

import styles from "./ShopItem.module.scss";
import { useMatch } from "react-router-dom";
import { DB } from "../../database";
import { TItem, TItemMetal, TItemWood } from "../../const/types";
import { nullItem, nullItemWood } from "../../const/const";
import { DB_Doors_Wood } from "../../DataBase/DB_Doors_Wood";
import { DB_Doors_Metal } from "../../DataBase/DB_Doors_Metal";

interface ShopItemProps {}

const ShopItem: FC<ShopItemProps> = () => {
  const match = useMatch("/Catalog/:id");
  const idMatch = match?.params.id;
  const [item, setItem] = useState<TItemMetal | TItemWood>(nullItemWood);

  console.log(idMatch.charAt(0));

  const [currentPrice, setCurrentPrice] = useState<number>(item.price);
  const [currentSize, setCurrentSize] = useState<string>(item.sizes[0]);
  const [currentColor, setCurrentColor] = useState<string>('gray') //------------

  const Translate = (color: string) => {
    // switch(color) {
    //   case 'Темный орех': return 'darkNut'
    //   case 'Дуб неаполь': return 'naplesOak'
    //   case 'Беленый дуб': return 'bleachedOak'
    //   case 'Венге': return 'wenge'
    //   case 'Капучино': return 'cappuccino'
    //   case 'Серый': return 'gray'
    // } 
    if(color === 'Серый') return('gray')
  }

  useEffect(() => {
    // setItem(DB.find((item) => item.id === idMatch))
    if (idMatch.charAt(0) === "0") {
      setItem(DB_Doors_Wood.find((item) => item.id === idMatch));
      if(item.kind == "TItemWood"){
        // setCurrentColor(])
      }
      console.log(currentColor)
      // console.log(Translate('Серый'))
    } else if (idMatch.charAt(0) === "1") {
      setItem(DB_Doors_Metal.find((item) => item.id === idMatch)); 
    //  if(item.kind === "TItemMetal") setCurrentColor(item.colors[0]) 
    
    }
  }, [idMatch]);



  if (item.kind === "TItemWood") {
    // setCurrentColor(item.colors[0])
    return (
      <div className={styles.ShopItem_wrapper}>
        <div className={styles.ShopItem}>
          <div className={styles.image}>
            <img src={`/images/doors/wood/items/door${item.id}_${currentColor}.webp` } alt="" />
          </div>
          <div className={styles.info}>
            <div className={styles.name}>
              <p>Дверь межкомнатная {item.name}</p>
            </div>
            <div className={styles.material}>
              <p>Материал: {item.material}</p>
            </div>
            <div className={styles.colors}>
              
              {item.colors.map((el, index) =>( //----------------class Active
                <button onClick={() => setCurrentColor(el)}>
                  {/* <div className={styles.color}> */}
                    <span>{item.colors_translate[index]}</span>
                    <img src={`/images/icons/colors/${el}.webp`} alt="" />
                  {/* </div> */}
                  
                </button>))}
            </div>
            <div className={styles.sizes}>
              Размеры
              {item.sizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSize(item.sizes[index])}
                  className={`${
                    currentSize === item.sizes[index] ? styles.size_active : ""
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            <div className={styles.price}>
              <button
                onClick={() => setCurrentPrice(item.price)}
                className={`${
                  currentPrice === item.price ? styles.price_active : ""
                }`}
              >
                Цена за полотно {item.price} ₽
              </button>
              <button
                onClick={() => setCurrentPrice(item.fullPrice)}
                className={`${
                  currentPrice === item.fullPrice ? styles.price_active : ""
                }`}
              >
                Цена за комплект {item.fullPrice} ₽
              </button>
            </div>
            <div className={styles.price_info}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, optio labore, dolorum enim digniss</p>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <button>Добавить в корзину</button>
          <div className={styles.line}></div>
          <p>
            Заказать замер и проконсультироваться можно по телефону : +7 (910)
            188-24-74
          </p>
        </div>
      </div>
    );
  }
};

export default ShopItem;

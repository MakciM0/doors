import React, { FC, useEffect, useState } from "react";

import styles from "./ShopItem.module.scss";
import { useMatch } from "react-router-dom";
import { DB } from "../../database";
import { TItem, TItemMetal, TItemWood } from "../../const/types";
import { nullItem, nullItemWood } from "../../const/const";
import { DB_Doors_Wood } from "../../DataBase/DB_Doors_Wood";
import { DB_Doors_Metal } from "../../DataBase/DB_Doors_Metal";
import { useAppDispatch, useAppSelector } from "../../store/appHooks";
import Slider from "react-slick";
import { settingsShopItem } from "../../slider/sliderConfig";
import { AddToCartMetal, AddToCartWood } from "../../store/productsSlice";

interface ShopItemProps {}

const ShopItem: FC<ShopItemProps> = () => {
  const dispatch = useAppDispatch();

  const match = useMatch("/Catalog/:id");
  const idMatch = match?.params.id;
  // const [item, setItem] = useState<TItemMetal | TItemWood>();

  console.log(idMatch.charAt(0));

  
  

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

  const CurrentItem = useAppSelector((state) => state.products.CurrentItem)
  const [currentColor, setCurrentColor] = useState<string>(CurrentItem.kind === "TItemWood" ? CurrentItem.colors[0] : '')  //------------
  const [currentPrice, setCurrentPrice] = useState<number>(CurrentItem.price);
  const [currentSize, setCurrentSize] = useState<string>(CurrentItem.sizes[0]);
  const [currentInsidePanel, SetCurrentInsidePanel] = useState<{name:string, img:string}>(CurrentItem.kind === "TItemMetal" ? CurrentItem.insidePanels[0] : {name: '0', img: '01'});


  // useEffect(() => {
  //   // setItem(DB.find((item) => item.id === idMatch))
  //   if (idMatch.charAt(0) === "0") {
  //     setItem(DB_Doors_Wood.find((item) => item.id === idMatch));
  //     if(item.kind == "TItemWood"){
  //       console.log(item)
  //       setCurrentColor(item.colors[0])
  //       console.log(item.colors[0])
  //     }
  //     console.log(currentColor)
  //     // console.log(Translate('Серый'))
  //   } else if (idMatch.charAt(0) === "1") {
  //     setItem(DB_Doors_Metal.find((item) => item.id === idMatch)); 
  //   //  if(item.kind === "TItemMetal") setCurrentColor(item.colors[0]) 
    
  //   }
  // }, [idMatch]);



  if (CurrentItem.kind === "TItemWood") {
    // setCurrentColor(item.colors[0])
    
    return (
      <div className={styles.ShopItem_wrapper}>
        <div className={styles.ShopItem}>
        {/* LOADING------------------------------ */}
          <div className={styles.image}>
            <img src={`/images/doors/wood/items/${CurrentItem.id}/door${CurrentItem.id}_${currentColor}.webp` } alt="" />
          </div>
          <div className={styles.info}>
            <div className={styles.name}>
              <p>Дверь межкомнатная {CurrentItem.name}</p>
            </div>
            <div className={styles.material}>
              <p>Материал: {CurrentItem.material}</p>
            </div>
            <div className={styles.colors}>
              
              {CurrentItem.colors.map((el, index) =>( 
                <button className={`${
                  currentColor === CurrentItem.colors[index] ? styles.color_active : ""
                }`} onClick={() => setCurrentColor(el)}>
                    <span>{CurrentItem.colors_translate[index]}</span>
                    <img src={`/images/icons/colors/${el}.webp`} alt="" />                
                </button>))}
            </div>
            <div className={styles.sizes}>
              Размеры
              {CurrentItem.sizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSize(CurrentItem.sizes[index])}
                  className={`${
                    currentSize === CurrentItem.sizes[index] ? styles.size_active : ""
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            <div className={styles.price}>
              <button
                onClick={() => setCurrentPrice(CurrentItem.price)}
                className={`${
                  currentPrice === CurrentItem.price ? styles.price_active : ""
                }`}
              >
                Цена за полотно {CurrentItem.price} ₽
              </button>
              <button
                onClick={() => setCurrentPrice(CurrentItem.fullPrice)}
                className={`${
                  currentPrice === CurrentItem.fullPrice ? styles.price_active : ""
                }`}
              >
                Цена за комплект {CurrentItem.fullPrice} ₽
              </button>
            </div>
            <div className={styles.price_info}>
              {currentPrice === CurrentItem.price ? 
                <p>Цена за ---------------</p>
                : 
                <p>Цена за ----------------</p> 
              }
              
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <button onClick={() => dispatch(AddToCartWood({currentColor: currentColor, currentSize: currentSize, currentPrice: currentPrice}))}>Добавить в корзину</button>
          <div className={styles.line}></div>
          <p>
            Заказать замер и проконсультироваться можно по телефону : +7 (910)
            188-24-74
          </p>
        </div>
      </div>
    );
  } else

  if (CurrentItem.kind === "TItemMetal") {
    return (
      <div className={styles.ShopItem_wrapper}>
        <div className={styles.ShopItem}>
        {/* LOADING------------------------------ */}
          <div className={styles.images}>{/*--------другой класс--- */}
            <img src={`/images/doors/metal/items/${CurrentItem.id}/door${CurrentItem.id}.webp` } alt="" /> 
            <img src={`/images/doors/metal/items/${CurrentItem.id}/door${CurrentItem.id}_inside${currentInsidePanel.img}.webp` } alt="" />
          </div>
          <div className={styles.info}>
            <div className={styles.name}>
              <p>Дверь {CurrentItem.name}</p>
            </div>
            <div className={styles.material}>
              {/* <p>Материал: {CurrentItem.material}</p> */}
            </div>
            {/* <div className={styles.colors}>
              
              {CurrentItem.colors.map((el, index) =>( //----------------class Active
                <button className={`${
                  currentColor === CurrentItem.colors[index] ? styles.color_active : ""
                }`} onClick={() => setCurrentColor(el)}>
                    <span>{CurrentItem.colors_translate[index]}</span>
                    <img src={`/images/icons/colors/${el}.webp`} alt="" />                
                </button>))}
            </div> */}
            <div className={styles.sizes}>
              Размеры
              {CurrentItem.sizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSize(CurrentItem.sizes[index])}
                  className={`${
                    currentSize === CurrentItem.sizes[index] ? styles.size_active : ""
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            <div className={styles.insidePanels}>
              Внутренние панели:
              <Slider {...settingsShopItem}>
                {CurrentItem.insidePanels.map((el, index) => (
                <div className={`${
                  currentInsidePanel === CurrentItem.insidePanels[index] ? styles.item_active : styles.item
                }`} onClick={() => SetCurrentInsidePanel(el)}>
                  <img src={`/images/doors/metal/items/${CurrentItem.id}/door${CurrentItem.id}_inside${el.img}.webp` } alt="" /> 
                </div>
                ))}
              </Slider>
              <p>{currentInsidePanel.name}</p>
            </div>
            <div className={styles.price}>
              <button
                onClick={() => setCurrentPrice(CurrentItem.price)}
                className={`${
                  currentPrice === CurrentItem.price ? styles.price_active : ""
                }`}
              >
                Цена: {CurrentItem.price} ₽
              </button>
              {/* <button
                onClick={() => setCurrentPrice(CurrentItem.fullPrice)}
                className={`${
                  currentPrice === CurrentItem.fullPrice ? styles.price_active : ""
                }`}
              >
                Цена за комплект {CurrentItem.fullPrice} ₽
              </button> */}
            </div>
            <div className={styles.price_info}>              
              <p>Цена---------------</p>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <button onClick={() => dispatch(AddToCartMetal({name: currentInsidePanel.name, img: currentInsidePanel.img, currentSize: currentSize}))}>Добавить в корзину</button>
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

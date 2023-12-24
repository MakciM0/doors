import React, {FC, useEffect, useState} from "react";

import styles from './ShopItem.module.scss'
import { useMatch } from "react-router-dom";
import { DB } from "../../database";
import { TItem } from "../../const/types";
import { nullItem } from "../../const/const";

interface ShopItemProps {
  
}


 
const ShopItem: FC<ShopItemProps> = () => {
  const match = useMatch("/Catalog/:id");
  const idMatch = match?.params.id;
  const [item, setItem] = useState<TItem>(nullItem)
  

  useEffect (() =>{
    setItem (DB.find((item) => item.id === idMatch))
  }, [])
  const [currentPrice, setCurrentPrice] = useState<number>(item.price)
  const [currentSize, setCurrentSize] = useState<string>(item.sizes[0])

  console.log(item)
  return (
    <div className={styles.ShopItem_wrapper}>
      <div className={styles.ShopItem}>
        <div className={styles.image}>
          <img src={`/images/${item.type}/${item.style}/door${item.id}.jpg` } alt="" />
        </div>
        <div className={styles.info}>
          <div className={styles.name}>
            <p>{item.name}</p>
          </div>
          <div className={styles.material}>
            <p>Материал: {item.material}</p>
          </div>
          <div className={styles.colors}>
            цвета
          </div>
          <div className={styles.sizes}>
            Размеры
            {item.sizes.map((size, index) =>(
              <button key={index}
                onClick={() => setCurrentSize(item.sizes[index])} 
                className={`${currentSize === item.sizes[index] ? styles.size_active : ''}`}
              >{size}</button>
              ))}
          </div>
          <div className={styles.price}>
            <button 
              onClick={() => setCurrentPrice(item.price)} 
              className={`${currentPrice === item.price ? styles.price_active : ''}`}
                >Цена за полотно {item.price} ₽
            </button>
            <button 
              onClick={() => setCurrentPrice(item.fullPrice)}
              className={`${currentPrice === item.fullPrice ? styles.price_active : ''}`}
                >Цена за комплект {item.fullPrice} 
            </button>
            {/* <p>Цена за комплект {item.fullPrice} ₽</p> */}
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <button>Добавить в корзину</button>
        <div className={styles.line}></div>
        <p>Заказать замер и проконсультироваться можно по телефону : +7 (910) 188-24-74</p>
      </div>
    </div>
    );
}
 
export default ShopItem;
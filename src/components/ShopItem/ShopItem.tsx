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

  console.log(item)
  return (
    <div className={styles.ShopItem_wrapper}>
      <div className={styles.ShopItem}>
        <div className={styles.image}>
          <img src={`/images/${item.type}/${item.style}/door${item.id}.jpg` } alt="" />
        </div>
        <div className={styles.info}>
          <span>{item.name}</span>
          <span>{item.material}</span>
          <span>Цена за полотно {item.price} ₽</span>
          <span>Цена за комплект {item.fullPrice} ₽</span>
          <div className={styles.colors}>
            цвета
          </div>
          <div className={styles.sizes}>
            размеры
          </div>
        </div>
      </div>
    </div>
    );
}
 
export default ShopItem;
import React, {FC, useEffect, useState} from "react";

import { useAppDispatch, useAppSelector } from "../../store/appHooks";
import { animateScroll as scroll } from "react-scroll";

import styles from './Cart.module.scss'
import {DecrementItemMetal, DecrementItemWood, DeleteItemMetal, DeleteItemWood, IncrementItemMetal, IncrementItemWood } from "../../store/productsSlice";



interface CartProps {
  
}
 
const Cart: FC<CartProps> = () => {

  const dispatch = useAppDispatch()
  const cart = useAppSelector((state) => state.products.Cart)
  const totalPrice = useAppSelector((state) => state.products.TotalPrice)

  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
};

useEffect(() => {
  window.addEventListener('scroll', handleScroll, { passive: true }); 
  return () => {
      window.removeEventListener('scroll', handleScroll);   
  };
  
}, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return ( //Если корзина не пуста
  <div className={styles.Cart}>
    <h2>Корзина</h2>
    <div className={styles.tab_title}>
      <span>
        Название товара
      </span>
      <span>
        Количество
      </span>
      <span>
        Размер
      </span>
      <span>
        Цена
      </span>
    </div>
    <div className={styles.items}>
        {cart.map((item) =>(item.kind === "TItemWood" 
        ?  
          <div className={styles.item}>
            <div className={styles.info}>
              <div className={styles.imgs}>
                <img src={`/images/doors/wood/items/${item.id}/door${item.id}_${item.currentColor}.webp` } alt="" />
              </div>
              <div className={styles.name}>
                <p>Дверь межкомнатная {item.name}</p>
                <span>{item.currentColor_translate}</span> 
              </div>
            </div>
            
            <div className={styles.numbers}>
              <button onClick={() => dispatch(DecrementItemWood(item))}>-</button>
              <span>{item.amount}</span>
              <button onClick={() => dispatch(IncrementItemWood(item))}>+</button>
            </div>
            <div className={styles.size}>
              <span>{item.currentSize}</span> 
            </div>
            <div className={styles.sum}>
              <span>{item.currentPrice}</span> {/*??выбранная цена умножить на количество??*/}
              <button className={styles.delete} onClick={() => dispatch(DeleteItemWood(item))}>X</button>
            </div>
          </div>
        
        : item.kind === "TItemMetal" ?
        <div className={styles.item}>
            <div className={styles.info}>
              <div className={styles.imgs}>
                <img src={`/images/doors/metal/items/${item.id}/door${item.id}.webp` } alt="" /> 
                <img src={`/images/doors/metal/items/${item.id}/door${item.id}_inside${item.currentInsidePanel.img}.webp` } alt="" />
              </div>
                <div className={styles.name}>
                <p>{item.name}</p>
              </div>
            </div>
            <div className={styles.numbers}>
              <button onClick={() => dispatch(DecrementItemMetal(item))}>-</button>
              <span>{item.amount}</span>
              <button onClick={() => dispatch(IncrementItemMetal(item))}>+</button>
            </div>
            <div className={styles.size}>
              <span>{item.currentSize}</span> 
            </div>
            <div className={styles.sum}>
              <span>{item.price}</span> {/*выбранная цена умножить на количество*/}
              <button className={styles.delete} onClick={() => dispatch(DeleteItemMetal(item))}>X</button>
            </div>
          </div>
              
        : ''))}
          


   
    <div className={styles.result}>
      Итоговая цена {totalPrice}
    </div>
  </div>
 </div>
  );
}
 
export default Cart;
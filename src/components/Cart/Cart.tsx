import React, {FC, useEffect, useState} from "react";

import { useAppSelector } from "../../store/appHooks";
import { animateScroll as scroll } from "react-scroll";

import styles from './Cart.module.scss'



interface CartProps {
  
}
 
const Cart: FC<CartProps> = () => {

    const cart = useAppSelector((state) => state.products.Cart)

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
            <div className={styles.imgs}>
              <img src={`/images/doors/wood/items/${item.id}/door${item.id}_${item.currentColor}.webp` } alt="" />
            </div>
            <div className={styles.info}>
              <p>Дверь межкомнатная {item.name}</p>
              <span>{item.currentColor_translate}</span> 
            </div>
            <div className={styles.numbers}>
              <button>-</button>
              <span>{item.amount}</span>
              <button>+</button>
            </div>
            <div className={styles.size}>
              {/* <span>{item.sizes}</span> выбранный размер */}
            </div>
            <div className={styles.sum}>
              <span>{item.fullPrice}</span> {/*выбранная цена умножить на количество*/}
            </div>
            <div className={styles.delete}>
              <button>X</button>
            </div>  
          </div>
        
        : item.kind === "TItemMetal" ?
        <div className={styles.item}>
            <div className={styles.imgs}>
            <img src={`/images/doors/metal/items/${item.id}/door${item.id}.webp` } alt="" /> 
            <img src={`/images/doors/metal/items/${item.id}/door${item.id}_inside${item.currentInsidePanel.img}.webp` } alt="" />
            </div>
            <div className={styles.info}>
              <p>{item.name}</p>
            </div>
            <div className={styles.numbers}>
              <button>-</button>
              <span>{item.amount}</span>
              <button>+</button>
            </div>
            <div className={styles.sum}>
              <span>{item.price}</span> {/*выбранная цена умножить на количество*/}
            </div>
            <div className={styles.delete}>
              <button>X</button>
            </div>  
          </div>
        : ''))}
          


   
    <div className={styles.result}>
      Итоговая цена....
    </div>
  </div>
 </div>
  );
}
 
export default Cart;
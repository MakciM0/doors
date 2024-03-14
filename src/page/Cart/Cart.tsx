import React, {FC, useEffect, useState, useRef} from "react";
import emailjs from '@emailjs/browser';

import { useAppDispatch, useAppSelector } from "../../store/appHooks";
import { animateScroll as scroll } from "react-scroll";

import styles from './Cart.module.scss'
import {DecrementItemMetal, DecrementItemWood, DeleteItemMetal, DeleteItemWood, IncrementItemMetal, IncrementItemWood } from "../../store/productsSlice";
import { NavLink } from "react-router-dom";



interface CartProps {
  
}
 
const Cart: FC<CartProps> = () => {

  
    const form = useRef();
  
    const sendEmail = (e : any) => {
      e.preventDefault();
      emailjs
        .sendForm('service_eqebxuf', 'template_lk5d4yo', form.current, {
          publicKey: 'SPc-lfJOCs1fz7svo',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

  useEffect(() => { // Заголовок страницы
    document.title = "Мир Дверей - Корзина";
  }, []);


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

  return ( 
  <div className={styles.Cart}>
    {cart.length > 0 ? //Если корзина не пуста
    <div>
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
                <NavLink to={`/Catalog/${item.id}`}>Дверь межкомнатная {item.name}</NavLink>
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
                  <NavLink to={`/Catalog/${item.id}`}>{item.name}</NavLink>
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
          {/* Итоговая цена {totalPrice} */}
          <div className={styles.info}>
            <p>Итоговая цена : {totalPrice}</p>
            <span>*доставка и установка рассчитывается отдельно</span>
          </div>
          <div className={styles.pre_order}>
            <button>Перейти к оформлению заказа</button>
          </div>    
        </div>
        <div className={styles.order_form}>

        </div>
    </div>
    </div>
  : 

    //Если корзина  пуста
    <div className={styles.empty_cart}> 
      <h2>Корзина пуста</h2>
      <NavLink to="/Catalog">Перейти в каталог</NavLink>
    </div>
  }
    
    
    
        
    
 </div>
  );
}
 
export default Cart;


      {/* <div>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div> */}
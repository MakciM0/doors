import React, {FC, useEffect, useState} from "react";

// import { animateScroll as scroll } from "react-scroll";

import styles from './Sale.module.scss'
import { DB_Sale } from "../../DataBase/DB_Sale";


interface SaleProps {
  
}
 
const Sale: FC<SaleProps> = () => {

//   const [scrollPosition, setScrollPosition] = useState<number>(0);
//   const handleScroll = () => {
//     const position = window.scrollY;
//     setScrollPosition(position);
// };

  useEffect(() => { // Заголовок страницы
    document.title = "Мир Дверей - Распродажа";
  }, []);

// useEffect(() => {
//   window.addEventListener('scroll', handleScroll, { passive: true });
  
//   return () => {
//       window.removeEventListener('scroll', handleScroll);
      
//   };
  
// }, []);
//   const scrollToTop = () => {
//     scroll.scrollToTop();
//   };

  return (
  <div className={styles.Sale}>
    <div className={styles.content}>
      <div className={styles.info}>
        <p>Вашему вниманию предлагается распродажа межкомнатных и металлических дверей, когда остаётся 1 дверь из модельного ряда, или с витрины,  или сняли с производства. Все двери в хорошем состоянии,  так же действует гарантия.</p>
      </div>
      <div className={styles.items}>
        {DB_Sale.map((item) =>(
          <div className={styles.item}>
            <div className={styles.item_img}>
              <img src={`images/doors/sale/door${item.id}.jpg`} alt="" />
              <img src={`images/doors/sale/door${item.id}_01.jpg`} alt="" />
            </div>
            <div className={styles.item_info}>
              {/* <h3>желез или межк + название</h3> */}
              <h3>{item.kind === "wood" ? 'Межкомнатная дверь ' + item.name : item.kind === "metal" ? 'Железная дверь ' + item.name : '' }</h3>
              <p>{item.desc}</p>
              <div className={styles.prices}>
                <p className={styles.old}>{item.old_Price} Руб.</p>
                <p className={styles.new}>{item.new_Price} Руб.</p>
              </div>
              <p>{item.material}</p>
              <p>{item.color}</p>
              <p>Размер: {item.size}</p>
              <p>Узнать больше по телефону +7 (910) 188-24-74</p>
            </div>
            <div className={styles.line}></div>
          </div>
        )) 
        }
        {/* <div className={styles.item}>
          <div className={styles.item_img}>
            <img src={`images/doors/sale/door${el.id}.jpg`} alt="" /> 
          </div>
          <div className={styles.item_info}>
            <h3>желез или межк + название</h3>
            <div className={styles.prices}>
              <p>old Price</p>
              <p>New Price</p>
            </div>
            <p>Материал</p>
            <p>Цвет</p>
            <p>Размер</p>
          </div>
        </div> */}
      </div>
      {/* <div className={styles.order}>
        Order
      </div> */}
    </div>
  </div>  
  );
}
 
export default Sale;
import React, {FC} from "react";

import styles from './Ceiling.module.scss'

interface CeilingProps {
  
}
 
const Ceiling: FC<CeilingProps> = () => {
  return (
    <div className={styles.ceiling}>
      <div className={styles.content}>
        <div className={styles.info}>
          <p>Мы изготавливаем натяжные потолки любой сложности, из разного материала, по разным ценам, от разных производителей.</p>
          <p>Мы заботимся о вашем комфорте и предлагаем надёжные и качественные решения для ремонта вашего дома</p>
          <p>Выезд мастера на замер с каталогом по городу бесплатно. От большого объёма скидка. Стоимость от 500 руб. за м2.</p>
        </div>
        <div className={styles.img}>
          <img src="images/Ceiling.jpg" alt="Потолки" />
        </div>
      </div>
      <div className={styles.order}>
        <p>Узнайте больше или закажите по телефону +7 (910) 188-24-74</p>
      </div>
      <div className={styles.images}>
        <img src="images/ceiling/example01.1.jpg" alt="" />
        <img src="images/ceiling/example01.2.jpg" alt="" />
        <img src="images/ceiling/example01.3.jpg" alt="" />
        <img src="images/ceiling/example01.4.jpg" alt="" />
      </div>
    </div> 
  );
}
 
export default Ceiling;
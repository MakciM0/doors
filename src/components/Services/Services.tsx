import React, {FC, useEffect} from "react";

import styles from './Services.module.scss'
import { useLocation } from "react-router-dom";

interface ServicesProps {
  
}
 
const Services: FC<ServicesProps> = () => {

  const location = useLocation()

  useEffect(()=> {
    if (location.hash) {
        let elem = document.getElementById(location.hash.slice(1))
        if (elem) {
            elem.scrollIntoView({behavior: "smooth"})
        }
    } else {
    window.scrollTo({top:0,left:0, behavior: "smooth"})
    }
}, [location,])

  return (
    <div className={styles.Services}>
      <div id='services' className={styles.title}>
        <h2>Услуги</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.item}>
          <img src={"/images/services/services1.jpg"} alt="" />
          <h3>Установка двери</h3>
          <p>В нашем магазине есть услуга при покупке межкомнатной или металлической двери можно заказать установку или врезку фурнитуры.</p>
          <span></span>
        </div>

        <div className={styles.item}>
          <img src={"/images/services/services2.jpg"} alt="" />
          <h3>Замер</h3>
          <p>Если вы решили сделать дома ремонт и не знаете с чего начать, вызовите нашего мастера на замер. Он вам подскажет, что в первую очередь нужно сделать - полы, потолок, обои или двери. Замеряет проёмы ширину, толщину и высоту. Рассчитает стоимость установки. И даже если вы решите поставить двери своими силами, у вас уже будут точные размеры.</p>
          <span></span>
        </div>

        <div className={styles.item}>
          <img src={"/images/services/services3.jpg"} alt="" />
          <h3>Доставка</h3>
          <p>В нашем магазине существует доставка и не только по городу, а по району, рассчитывается при оформлении заказа.</p>
          <span></span>
        </div>
      </div>
    </div>  
  );
}
 
export default Services;
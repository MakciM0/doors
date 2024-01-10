import React, {FC, useEffect} from "react";

import { Element } from "react-scroll";

import styles from './About.module.scss'
import { useLocation } from "react-router-dom";

interface AboutProps {
  
}
 
const About: FC<AboutProps> = () => {

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
    <div id="about" className={styles.About}>

      {/* <Element name="about"></Element> */}
      <div className={styles.title}>
        <h2>О нас</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
           <h3>Добро пожаловать в наш магазин Мир Дверей</h3>
           <p>Который находится по адресу г. Александров Красный переулок д.16, дом со львами</p>
           <p>У нас вы подберёте на свой вкус и любой кошелёк входную и межкомнатные двери, а также у нас в продаже линолиум и ламинат</p>
           <p>Постоянным покупателям предоставляются скидки, в день рождения при предъявлении паспорта на любую покупку 10 процентов скидка</p>
        </div>
        <div className={styles.img}>
            <img src={"/images/main/about.jpg"}  alt=""></img>
        </div>
      </div>
    </div>  
  );
}
 
export default About;
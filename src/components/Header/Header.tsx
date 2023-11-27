import React, { FC } from "react";

import styles from './Header.module.scss'
import metal from '../../imgs/metal.jpg'
import wood from '../../imgs/wood.jpg'
// import Logo from "../Logo/Logo";

interface HeaderProps {
  
}

 
const Header: FC<HeaderProps> = () => {
  return (
    <div className={styles.header_wrapper}>
      <header>
        <div className={styles.header}>
          <h1>Мир дверей</h1>
            <ul>
              <li>Адрес: г. Александров ул. Красный переулок 16</li>
              <li>График работы: Пн-пт: c 9:00 до 19:00,<br></br> Сб-вс: с 9:00 до 17:00</li>
              <li id={styles.number}>+7 (910) 188-24-74</li>
            </ul>
        </div>
        <menu id={styles.links}>
          <ul>
            <li>Каталог</li>
            <li>О нас</li>
            <li>Контакты</li>
            <li>Услуги</li>
          </ul>
        </menu>
        <img className={styles.webpack} src={metal} alt=""/>
        <img className={styles.webpack} src={wood} alt=""/>
        <menu>
          <ul>
            <li>Межкомнатные двери</li>
            <li>Металлические двери</li>
            <li>Арки и порталы</li>
            <li>Ламинат</li>
            <li>Натяжные потолки</li>
          </ul>
        </menu>
        <div className={styles.items_wrapper}>
          <div className={styles.items}>
            <a href="">
              <div className={styles.item} id={styles.wood}>
                <p>Межкомнатные двери</p>
              </div>
            </a>
            <a href="">
              <div className={styles.item} id={styles.metal}>
                <p>Металлические двери</p>
              </div>
            </a>
            <a href="">
              <div className={styles.item} id={styles.portal}>
                <p>Арки и порталы</p>
              </div>
            </a>
            <a href="">
              <div className={styles.item} id={styles.laminat}>
                <p>Ламинат</p>
              </div>
            </a>
            <a href="">
              <div className={styles.item} id={styles.ceiling}>
                <p>Натяжные потолки</p>
              </div>
            </a>
            
          </div>
        </div>
        
      </header>
    </div>
   
  );
}
 
export default Header;
import React, {FC} from "react";
import { Link } from "react-router-dom";

import styles from './HeaderMenu.module.scss'
import { NavLink } from "react-router-dom";

interface HeaderMenuProps {
  
}
 
const HeaderMenu: FC<HeaderMenuProps> = () => {
  return (
    <div>
    <div className={styles.header_wrapper}>
    <div className={styles.header}>
      
        <h1>
          <NavLink to="/">
            Мир дверей
          </NavLink>
        </h1>
          <ul>
            <li>Адрес: г. Александров ул. Красный переулок 16</li>
            <li>График работы: Пн-пт: c 9:00 до 18:00,<br></br> Сб-вс: с 9:00 до 16:00</li>
            <li id={styles.number}>+7 (910) 188-24-74</li>
          </ul>
      </div>
      </div>
      <menu id={styles.links}>
        <ul>
          <li><NavLink to="/Catalog">Каталог</NavLink></li>
          <li>О нас</li>
          <li>Контакты</li>
          <li>Услуги</li>
        </ul>
      </menu>
    
    </div>
  );
}
 
export default HeaderMenu;
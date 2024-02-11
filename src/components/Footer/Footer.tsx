import React, {FC} from "react";
import { useAppDispatch } from "../../store/appHooks";
import { SetCurrentFilter} from "../../store/productsSlice";

import styles from './Footer.module.scss'
import { NavLink } from "react-router-dom";

interface FooterProps {
  
}
 
const Footer: FC<FooterProps> = () => {

  const dispatch = useAppDispatch()

  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.title}>
          <h2>Мир дверей</h2>
          <span>Адрес: г. Александров ул. Красный переулок 16</span>
          <span>График работы: Пн-пт: c 9:00 до 18:00, <br></br> Сб-вс: с 9:00 до 16:00</span>
          <span>+7 (910) 188-24-74</span>
        </div>
        <div className={styles.info}>
          <ul className={styles.main_ul}>
            <li>
              <ul>
                <li><NavLink to="/Catalog">Каталог</NavLink></li>
                <li><NavLink to="/Arch">Межкомнатные двери</NavLink></li>
                <li><NavLink to="/Catalog" onClick={() => dispatch(SetCurrentFilter('metal'))}>Металлические двери</NavLink></li>
                <li><NavLink to="/Arch"> Арки и порталы</NavLink></li>
                <li><NavLink to="/Arch">Ламинат</NavLink></li>
                <li><NavLink to="/Arch">Натяжные потолки</NavLink></li>
              </ul>
            </li>

            <li>
              <ul>
                <li> 
                  <a href="/#about">О нас</a>
                </li>
                <li> 
                  <a href="/#contact">Контакты</a>
                </li>
                <li>
                  <a href="/#services">Услуги</a>
                </li>
                <li>
                  <a href="/#ourworks">Наши работы</a>
                </li>
                <li>
                  <a href="/#promotion">Акции</a>
                </li>
              </ul>
            </li>
            
          </ul>
        </div>
      </div>
    </footer>  
  );
}
 
export default Footer;
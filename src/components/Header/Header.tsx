import React, { FC } from "react";

import styles from './Header.module.scss'
import metal from '../../imgs/metal.jpg'
import wood from '../../imgs/wood.jpg'
import portal from '../../imgs/portal.jpg'
import laminate from '../../imgs/laminate.jpg'
import ceiling from '../../imgs/ceiling.jpg'
import { Link } from "react-router-dom";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
// import Logo from "../Logo/Logo";

interface HeaderProps {
  
}

 
const Header: FC<HeaderProps> = () => {
  return (
    <div className={styles.header_wrapper}>
      <header>
        {/* <HeaderMenu></HeaderMenu> */}
        <img className={styles.webpack} src={metal} alt=""/>
        <img className={styles.webpack} src={wood} alt=""/>
        <img className={styles.webpack} src={portal} alt=""/>
        <img className={styles.webpack} src={laminate} alt=""/>
        <img className={styles.webpack} src={ceiling} alt=""/>
        {/* <menu>
          <ul>
            <li>Межкомнатные двери</li>
            <li>Металлические двери</li>
            <li>Арки и порталы</li>
            <li>Ламинат</li>
            <li>Натяжные потолки</li>
          </ul>
        </menu> */}
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
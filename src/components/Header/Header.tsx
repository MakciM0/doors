import React, { FC } from "react";

import { useAppDispatch } from "../../store/appHooks";
import { SetCurrentFilter} from "../../store/productsSlice";
import { Link } from "react-router-dom";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import { NavLink } from "react-router-dom";
// import Catalog from "../../page/Catalog/Catalog";
// import Logo from "../Logo/Logo";


import metal from '../../imgs/metal.jpg'
import wood from '../../imgs/wood.jpg'
import portal from '../../imgs/portal.jpg'
import laminate from '../../imgs/laminate.jpg'
import ceiling from '../../imgs/ceiling.jpg'

import styles from './Header.module.scss'
interface HeaderProps {
  
}

 
const Header: FC<HeaderProps> = () => {

  const dispatch = useAppDispatch()

  return (
    <div className={styles.header_wrapper}>
      <header>
        {/* <Catalog></Catalog> */}
        {/* <HeaderMenu></HeaderMenu> */}
        {/* Папка images/?/metal.jpg */}
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
            <div className={styles.items_top}>
              <NavLink to="/Catalog" onClick={() => dispatch(SetCurrentFilter('wood'))}>
                <div className={styles.item} id={styles.wood}>
                  <p>Межкомнатные двери</p>
                </div>
              </NavLink>
              <NavLink to="/Catalog" onClick={() => dispatch(SetCurrentFilter('metal'))}>
                <div className={styles.item} id={styles.metal}>
                  <p>Металлические двери</p>
                </div>
              </NavLink>
            </div>
            <div className={styles.items_bottom}>
              <NavLink to="/Arch">
                <div className={styles.item} id={styles.portal}>
                  <p>Арки и порталы</p>
                </div>
              </NavLink>
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
        </div>
        
      </header>
    </div>
   
  );
}
 
export default Header;
import React, {FC, useEffect} from "react";

import styles from './Arch.module.scss'
import Slider from "react-slick";
import { Palermo, Roman } from "../../DataBase/DB_Arch";

interface ArchProps {
  
}
 
const Arch: FC<ArchProps> = () => {

  useEffect(() => { // Заголовок страницы
    document.title = "Мир Дверей - Арки";
  }, []);

  return (
    <div className={styles.arch}>
      <div className={styles.content}>
        <div className={styles.info}>
          <p>Межкомнатные арки отлично подходят для квартиры и частных домов. Они создают особый уют и атмосферу в дому.</p>
          <p>Мы изготавливаем арки по индивидуальным размером, в любом цвете, любой формы.</p>
          <p>У нас также есть услуги: замер, доставка, установка арки.</p>
        </div>
        <div className={styles.img}>
          <img src="images/portal.jpg" alt="Арки и порталы" />
        </div>
      </div>
      <div className={styles.order}>
        <p>Узнайте больше или закажите по телефону +7 (910) 188-24-74</p>
      </div>
      <div className={styles.items}>
        <div className={styles.nav}>
            <a href="#palermo">Арки Палермо</a>
            <a href="#roman">Арки Романские</a>
        </div> 
        <section id="palermo">
          <h2>Арки Палермо</h2>
          <span>8000 руб.</span>
          <div className={styles.images}>
            {/* <div className={styles.item}>
              <h4>Цвет</h4>
              <div className={styles.img_transform}>
                <div className={styles.front}>
                  <img src="images/arch/example01.1.jpg" alt="" />
                </div>
                <div className={styles.back}>
                  <div className={styles.back_content}>
                    <p>
                      ширина обналички — 70 мм
                      высота обналички — 2150 мм
                      толщина стены — 80, 100, 120, 150 мм
                      ширина проема — 1000 мм
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
            {Palermo.map((item) =>(
              <div key={item.id} className={styles.item}>
                <h4>{item.color}</h4>
                <div className={styles.img_transform}>
                  <div className={styles.front}>
                    <img src={item.img} alt='Арка Палермо' />
                  </div>
                  <div className={styles.back}>
                    <div className={styles.back_content}>
                      <p>
                        {item.back_text}
                      </p>
                    </div>
                  </div>
                </div>
              </div> 
            ))}
          </div>
          <div className={styles.info}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, aperiam. Praesentium nostrum iure assumenda illo aliquid tempora porro consequatur tempore in, eius, enim fugiat! Quas ex totam ratione quaerat porro.
          </div>
        </section>

        <section id="roman">
          <h2>Арки Романские</h2>
          <span>8000 руб.</span>
          <div className={styles.images}>
            {/* <div className={styles.item}>
              <h4>Название</h4>
              <div className={styles.img_transform}>
                <div className={styles.front}>
                  <img src="images/arch/example01.1.jpg" alt="" />
                </div>
                <div className={styles.back}>
                  <div className={styles.back_content}>
                    <p>
                      ширина обналички — 70 мм
                      высота обналички — 2150 мм
                      толщина стены — 80, 100, 120, 150 мм
                      ширина проема — 1000 мм
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
            {Roman.map((item) =>(
              <div key={item.id} className={styles.item}>
                <h4>{item.color}</h4>
                <div className={styles.img_transform}>
                  <div className={styles.front}>
                    <img src={item.img} alt='Арка Романская' />
                  </div>
                  <div className={styles.back}>
                    <div className={styles.back_content}>
                      <p>
                        {item.back_text}
                      </p>
                    </div>
                  </div>
                </div>
              </div> 
            ))}


          </div>
          <div className={styles.info}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, aperiam. Praesentium nostrum iure assumenda illo aliquid tempora porro consequatur tempore in, eius, enim fugiat! Quas ex totam ratione quaerat porro.
          </div>
        </section>
          
      </div>
    </div> 
  );
}
 
export default Arch;
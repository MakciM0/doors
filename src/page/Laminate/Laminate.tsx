import React, {FC} from "react";

import styles from './Laminate.module.scss'

interface LaminateProps {
  
}
 
const Laminate: FC<LaminateProps> = () => {
  return (
    
    <div className={styles.laminate}> 
      <div className={styles.content}>
      
        <div className={styles.info}>
          <h3>Ламинат</h3>
          <p>Ламинат входит в число самых популярных напольных покрытий. Широкий выбор расцветок, дизайна и фактуры, можно варьировать рисунок и направление укладки.</p>
          <p>Подходит для укладки почти на любое ровное основание. Простой и быстрый монтаж - покрытие можно уложить самостоятельно с минимумом доступных инструментов.</p>
          <p>Длительный срок службы, особенно при бережной эксплуатации. Не требовательный в уходе. Грязь не пристаёт к поверхности и легко очищается. </p>
          <p>На ламинат не влияют колебания температуры, поэтому его можно использовать для теплых полов, при условии, что температура не превышает 28° градусов.</p>
          <p></p>
        </div>
        <div className={styles.img}>
          <img src="images/laminate.jpg" alt="ламинат" />
        </div>
      </div>
      <div className={styles.order}>
        <p>Узнайте больше или закажите по телефону +7 (910) 188-24-74</p>
      </div>
      <div className={styles.example}>
        <div className={styles.nav}>
            <a href="#bastion">Ламинат «Бастион»</a>
            <a href="#perfect">Ламинат «Imperial Perfect»</a>
        </div> 
        <div id="bastion" className={styles.item}>
          <div className={styles.info}>
            <div className={styles.text}>
              <h3>Ламинат Bastion </h3>
              <p>34 класс 12 мм 1 800 руб.м2</p>
            </div>
            <div className={styles.main}>
              <img src="images/laminate/example01.jpg" alt="Ламинат Bastion" />
            </div> 
          </div>
          
          <div className={styles.images}>
            <img src="images/laminate/example01.1.jpg" alt="" />
            <img src="images/laminate/example01.2.jpg" alt="" />
            <img src="images/laminate/example01.3.jpg" alt="" />
            <img src="images/laminate/example01.4.jpg" alt="" />
            <img src="images/laminate/example01.5.jpg" alt="" />
            <img src="images/laminate/example01.6.jpg" alt="" />
          </div>
        </div>


        <div id="perfect" className={styles.item}>
          <div className={styles.info}>
            <div className={styles.text}>
              <h3>Ламинат «Imperial Perfect»</h3>
              <p>12мм.34класс. цена 1620м2</p>
            </div>
            <div className={styles.main}>
              {/* <img src="images/laminate/example01.jpg" alt="Ламинат Bastion" /> */}
              <p>Ламинат 12 мм IMPERIAL PERFECT — это ламинат, максимально приближенный к естественному дереву. Выделенная структура дерева, повторяющая все контуры древесины, не позволяет отличить ламинат Imperial PERFECT от натурального дерева.  Ламинат 12 мм IMPERIAL PERFECT идеально впишется и дополнит любой интерьер, создав иллюзию использования натуральной древесины. Основное его отличие от всех видов подобного ламината — широкая плашка 300мм, что выделяет его среди стандартного ламината и приближает к естественной доске по ширине.</p>
            </div> 
          </div>
          
          <div className={styles.images}>
            <img src="images/laminate/example02.1.jpg" alt="" />
            <img src="images/laminate/example02.2.jpg" alt="" />
            <img src="images/laminate/example02.3.jpg" alt="" />
            <img src="images/laminate/example02.4.jpg" alt="" />
            <img src="images/laminate/example02.5.jpg" alt="" />
            <img src="images/laminate/example02.6.jpg" alt="" />
            <img src="images/laminate/example02.7.jpg" alt="" />
            <img src="images/laminate/example02.8.jpg" alt="" />
            <img src="images/laminate/example02.9.jpg" alt="" />
          </div>
        </div>
      </div>
    </div> 
  );
}
 
export default Laminate;
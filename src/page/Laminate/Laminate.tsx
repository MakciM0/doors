import React, {FC} from "react";

import styles from './Laminate.module.scss'

interface LaminateProps {
  
}
 
const Laminate: FC<LaminateProps> = () => {
  return (
    <div className={styles.laminate}>
      <div className={styles.content}>
        <div className={styles.info}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A obcaecati corporis totam accusamus, placeat nisi deleniti officiis alias aspernatur perferendis. Eaque ipsum deserunt sit fugit maxime sint aut ducimus hic?</p>
        </div>
        <div className={styles.img}>
          <img src="images/laminate.jpg" alt="ламинат" />
        </div>
      </div>
      <div className={styles.order}>
        <p>Узнайте больше или закажите по телефону +7 (910) 188-24-74</p>
      </div>
    </div> 
  );
}
 
export default Laminate;
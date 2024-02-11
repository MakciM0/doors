import React, {FC} from "react";

import styles from './Ceiling.module.scss'

interface CeilingProps {
  
}
 
const Ceiling: FC<CeilingProps> = () => {
  return (
    <div className={styles.ceiling}>
      <div className={styles.content}>
        <div className={styles.info}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A obcaecati corporis totam accusamus, placeat nisi deleniti officiis alias aspernatur perferendis. Eaque ipsum deserunt sit fugit maxime sint aut ducimus hic?</p>
        </div>
        <div className={styles.img}>
          <img src="images/Ceiling.jpg" alt="Потолки" />
        </div>
      </div>
      <div className={styles.order}>
        <p>Узнайте больше или закажите по телефону +7 (910) 188-24-74</p>
      </div>
    </div> 
  );
}
 
export default Ceiling;
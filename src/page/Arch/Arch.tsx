import React, {FC} from "react";

import styles from './Arch.module.scss'

interface ArchProps {
  
}
 
const Arch: FC<ArchProps> = () => {
  return (
    <div className={styles.arch}>
      <div className={styles.content}>
        <div className={styles.info}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A obcaecati corporis totam accusamus, placeat nisi deleniti officiis alias aspernatur perferendis. Eaque ipsum deserunt sit fugit maxime sint aut ducimus hic?</p>
        </div>
        <div className={styles.img}>
          <img src="images/portal.jpg" alt="Арки и порталы" />
        </div>
      </div>
      <div className={styles.order}>
        <p>Узнайте больше или закажите по телефону +7 (910) 188-24-74</p>
      </div>
    </div> 
  );
}
 
export default Arch;
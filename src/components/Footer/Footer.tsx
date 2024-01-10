import React, {FC} from "react";

import styles from './Footer.module.scss'

interface FooterProps {
  
}
 
const Footer: FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.title}>
        <h2>Мир дверей</h2>
      </div>
      <div className={styles.info}>

      </div>
    </footer>  
  );
}
 
export default Footer;
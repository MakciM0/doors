import React, {FC} from "react";

import styles from './Logo.module.scss'

interface LogoProps {
  
}
 
const Logo: FC<LogoProps> = () => {
  return (
    <div className={styles.Logo}>
      <h1>Мир дверей</h1>
    </div>
  );
}
 
export default Logo;
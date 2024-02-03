import React, {FC, useEffect} from "react";

import styles from './Promotion.module.scss'
import { useLocation } from "react-router-dom";

interface PromotionProps {
  
}
 
const Promotion: FC<PromotionProps> = () => {

  const location = useLocation()

  useEffect(()=> {
    if (location.hash) {
        let elem = document.getElementById(location.hash.slice(1))
        if (elem) {
            elem.scrollIntoView({behavior: "smooth"})
        }
    } else {
    window.scrollTo({top:0,left:0, behavior: "smooth"})
    }
}, [location,])

  return (
    <div className={styles.Promotion}>
      <div id='promotion' className={styles.title}>
        <h2>Акции</h2>
      </div>
      <div className={styles.content}>
        
      </div>
    </div>  
  );
}
 
export default Promotion;
import React, {FC, useEffect} from "react";

import styles from './OurWorks.module.scss'
import { useLocation } from "react-router-dom";

interface OurWorksProps {
  
}
 
const OurWorks: FC<OurWorksProps> = () => {

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
    <div className={styles.OurWorks}>
      <div id='ourworks' className={styles.title}>
        <h2>Наши работы</h2>
      </div>
      <div className={styles.content}>
        
      </div>
    </div>  
  );
}
 
export default OurWorks;
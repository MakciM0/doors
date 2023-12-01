import React, {FC, useEffect} from "react";

import styles from './Contact.module.scss'
import { useLocation } from "react-router-dom";

interface ContactProps {
  
}
 
const Contact: FC<ContactProps> = () => {

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
  <div className={styles.Contact}>
    <div id='contact' className={styles.title}>
          <h2>Контакты</h2>
        </div>
        <div className={styles.content}>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat itaque magnam beatae ea velit dignissimos iste fugit corporis accusantium eius provident exercitationem suscipit qui, ex sequi quidem sed at aspernatur?</p>
        </div>
    </div>  
  );
}
 
export default Contact;
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
          <div className={styles.map}>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A5a15e4b1dc7c4008e7820d6a2b1577a9d478d3f60afb014e51dcf6b527b33460&amp;source=constructor" width="1240" height="720" frameBorder="0"></iframe>
          </div>
          
          {/* <img src="" alt="" /> */}
        </div>
    </div>  
  );
}
 
export default Contact;
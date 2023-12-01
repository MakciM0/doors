import React, {FC, useEffect} from "react";

import { Element } from "react-scroll";

import styles from './About.module.scss'
import { useLocation } from "react-router-dom";

interface AboutProps {
  
}
 
const About: FC<AboutProps> = () => {

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
    <div id="about" className={styles.About}>

      {/* <Element name="about"></Element> */}
      <div className={styles.title}>
        <h2>О нас</h2>
      </div>
      <div className={styles.content}>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat itaque magnam beatae ea velit dignissimos iste fugit corporis accusantium eius provident exercitationem suscipit qui, ex sequi quidem sed at aspernatur?</p>
      </div>
    </div>  
  );
}
 
export default About;
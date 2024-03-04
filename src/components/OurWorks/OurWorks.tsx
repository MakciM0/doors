import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, {FC, useEffect, useState} from "react";

import styles from './OurWorks.module.scss'
import { useLocation } from "react-router-dom";
import { SliderItems } from "../../const/const";

import Slider from 'react-slick';
import { settingsOurWorks } from '../../slider/sliderConfig';


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

        <div className={styles.slider}>
        <Slider {...settingsOurWorks}>
        {SliderItems.map((photo, index) =>(
          <div key={photo.id}>
             <img alt={photo.title} src={photo.url} />
          </div>
        ))}
        </Slider>
        </div>


      </div>
    </div>  
  );
}
 
export default OurWorks;
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, {FC, useEffect, useState} from "react";

import styles from './OurWorks.module.scss'
import { useLocation } from "react-router-dom";
import { SliderItems } from "../../const/const";

import Slider from 'react-slick';


interface OurWorksProps {
  
}


 
const OurWorks: FC<OurWorksProps> = () => {
  
  const settings = {
    dots: true,
    // adaptiveHeight: true,
    variableWidth: true,
    centerMode: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "linear",
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1290,
        settings: {
          centerMode: false,
          // variableWidth: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 530,
        settings: {
          nextArrow: <NoneNextArrow />,
          prevArrow: <NonePrevArrow />,
        }
      },
    ]
  };

  function SampleNextArrow(props : any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red",  }}
        onClick={onClick}
      />
    );
  }

  function NoneNextArrow(props : any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none"}}
        onClick={onClick}
      />
    );
  }
  function NonePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none",}}
        onClick={onClick}
      />
    );
  }

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
        <Slider {...settings}>
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
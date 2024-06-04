import React, {FC, useEffect} from "react";

import styles from './Promotion.module.scss'
import { useLocation } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

import Slider from 'react-slick';
import { NavLink } from "react-router-dom";

interface PromotionProps {
  
}
 
const Promotion: FC<PromotionProps> = () => {

  const settings = {
    dots: true,
    // adaptiveHeight: true,
    // variableWidth: true,
    // centerMode: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    cssEase: "linear",
    speed: 750,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    nextArrow: <NoneNextArrow />,
    prevArrow: <NonePrevArrow />,
    responsive: [
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 1,
          // variableWidth: true,
          // centerMode: true,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
    ]
  };

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

const scrollToTop = () => {
  scroll.scrollToTop();
};

  return (
    <div className={styles.Promotion}>
      <div id='promotion' className={styles.title}>
        <h2>Акции</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.slider_wrapper}>
        <Slider {...settings}>
          <div className={styles.item}>
            <div className={styles.item_content}>
              <img src="/images/icons/promotion.png" alt=""></img>
              <p>При покупке от пяти межкомнатных дверей ручки в подарок</p>
              <img src="/images/icons/promotion.png" alt=""></img>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.item_content}>
              <img src="/images/icons/promotion.png" alt=""></img>
              <p>Пенсионерам скидка 5%</p>
              <img src="/images/icons/promotion.png" alt=""></img>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.item_content}>
              <img src="/images/icons/promotion.png" alt=""></img>
              <p>Именниникам в день рождения 10% скидка</p>
              <img src="/images/icons/promotion.png" alt=""></img>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.item_content}>
              <img src="/images/icons/promotion.png" alt=""></img>
              <p>Постоянным покупателям предоставляются скидки</p>
              <img src="/images/icons/promotion.png" alt=""></img>
            </div>
          </div>
        </Slider>
        </div>
        <div className={styles.not_slider}>
          <div className={styles.item}>
            <div className={styles.item_content}>
              <img src="/images/icons/promotion.png" alt=""></img>
              <p>При покупке от пяти межкомнатных дверей ручки в подарок</p>
              <img src="/images/icons/promotion.png" alt=""></img>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.item_content}>
              <img src="/images/icons/promotion.png" alt=""></img>
              <p>Пенсионерам скидка 5%</p>
              <img src="/images/icons/promotion.png" alt=""></img>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.item_content}>
              <img src="/images/icons/promotion.png" alt=""></img>
              <p>Именниникам в день рождения 10% скидка</p>
              <img src="/images/icons/promotion.png" alt=""></img>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.item_content}>
              <img src="/images/icons/promotion.png" alt=""></img>
              <p>Постоянным покупателям предоставляются скидки</p>
              <img src="/images/icons/promotion.png" alt=""></img>
            </div>
          </div>
        </div>
        <div className={styles.GoToSale}>
          <NavLink onClick={() => scrollToTop()} to="/Sale"><span>Перейти к распродажам</span> <img src="images/main/sale.png" alt="распродажам" /></NavLink>
        </div>
      </div>
    </div>  
  );
}
 
export default Promotion;
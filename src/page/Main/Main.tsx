import React, {FC, useEffect, useState} from "react";

import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";

import { animateScroll as scroll } from "react-scroll";

import styles from './Main.module.scss'
import Services from "../../components/Services/Services";
import OurWorks from "../../components/OurWorks/OurWorks";
import Promotion from "../../components/Promotion/Promotion";




interface MainProps {
  
}
 
const Main: FC<MainProps> = () => {

  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
};

  useEffect(() => { // Заголовок страницы
    document.title = "Мир Дверей";
  }, []);

useEffect(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  return () => {
      window.removeEventListener('scroll', handleScroll);
      
  };
  
}, []);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
  <div className={styles.Main}>
    <Header></Header>
    {scrollPosition >= 600 ? 
      <div onClick={() => scrollToTop()} className={styles.onTop}>
        <img src="/images/icons/top.png" alt="" />
      </div>  
    : ''}
    <About></About>
    <Contact></Contact>
    <Services></Services>
    <OurWorks></OurWorks>
    <Promotion></Promotion>
  </div>  
  );
}
 
export default Main;
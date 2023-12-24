import React, {FC} from "react";

import styles from './Footer.module.scss'

interface FooterProps {
  
}
 
const Footer: FC<FooterProps> = () => {
  return (
    <footer className={styles}>
      footer
    </footer>  
  );
}
 
export default Footer;
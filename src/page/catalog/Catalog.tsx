import React, {FC} from "react";

import styles from './Catalog.module.scss'

import { DB } from "../../database";

interface CatalogProps {
  
}
 
const Catalog: FC<CatalogProps> = () => {
  return (
  <div className={styles.catalog}>
    <div className={styles.filters}>
      filters
    </div>
    <div className={styles.shop}>
    {DB.map((el) =>(
      <div className={styles.item}>
        <img src=""></img>
        <span>{el.name}</span>
        <span>{el.color}</span>
        <span>{el.price}</span>
        <button>Подробнее</button>
      </div>
      ))}
      
    </div>
    
  </div>
  );
}
 
export default Catalog;
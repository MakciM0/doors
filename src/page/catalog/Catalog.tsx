import React, {FC, useState} from "react";

import styles from './Catalog.module.scss'

import { DB } from "../../database";

interface CatalogProps {
  
}
 
const Catalog: FC<CatalogProps> = () => {

  const [currentPage, setCurrentPage] = useState<number>(1);

  const recordsPerPage = 6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = DB.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(DB.length / recordsPerPage);
  const numbers = Array.from(Array(nPage), (_, index) => index + 1);

  const handlePrevPage = () => {
    if (currentPage > 1) {
    setCurrentPage(currentPage - 1)
    }
  };
  const handleNextPage = () => {
    if (currentPage < nPage) {
      setCurrentPage(currentPage + 1)
    }
  };
  const handleChangeCurrentPage = (id: number) => {
    setCurrentPage(id)
  };

  return (
  <div className={styles.catalog}>
    <div className={styles.filters}>
      filsters
    </div>
    <div className={styles.shop}>
      <div className={styles.pagination_items}>
        {records.map((el) =>(
          <div className={styles.item}>
            <span className={styles.name}>{el.name}</span>
            <img src={`/images/${el.type}/${el.style}/door${el.id}.jpg` }></img>
            <span className={styles.color}>{el.color}</span>
            <span className={styles.price}>
              Цена за полотно:{el.price} ₽<br></br>
              <span className={styles.set}>Цена за комплект: {el.fullPrice} ₽</span>
            </span>
            <button>Подробнее</button>
          </div>
        ))}
      </div>
      <nav className={styles.pagination_nav}>
        <button
          onClick={() => {
            handlePrevPage();
          }}
        >
          Предыдущая страница
        </button>
        {numbers.map((n) => (
          <p key={n}
            className={`${currentPage === n ? styles.nav_active : ""}`} //style----
            onClick={() => {
              handleChangeCurrentPage(n);
            }}
          >
            {n}
          </p>
        ))}
        <button
          onClick={() => {
            handleNextPage();
          }}
        >
          Следущая страница
        </button>
      </nav>
   
      
    </div>
    
  </div>
  );
}
 
export default Catalog;
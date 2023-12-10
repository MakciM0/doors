import React, {FC, useEffect, useState} from "react";

import styles from './Catalog.module.scss'

import { DB } from "../../database";
import { NavLink } from "react-router-dom";
import Filters from "../../components/Filters/Filters";
import { TItem } from "../../const/types";
import { nullItem } from "../../const/const";

interface CatalogProps {
  
}
 
const Catalog: FC<CatalogProps> = () => {

  const [currentPage, setCurrentPage] = useState<number>(1);

  const [currentFilter, setCurrentFilter] = useState<string>('wood')
  const [currentFilterMaterial, setCurrentFilterMaterial] = useState<string>('')

  const [records, setRecords] = useState<TItem[]>([])
  const [nPage, setNPage] = useState<number>(1)

  const recordsPerPage = 6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  let numbers = Array.from(Array(nPage), (_, index) => index + 1);

  useEffect(() =>{//Главный фильтр (железная или межкомнатная)
      setRecords((DB.filter((item) => item.style === currentFilter )).slice(firstIndex, lastIndex))
      setNPage(Math.ceil((DB.filter((item) => item.style === currentFilter ).length / recordsPerPage)))
      
      numbers = Array.from(Array(nPage), (_, index) => index + 1);
      setCurrentFilterMaterial('')
    }, [currentFilter, currentPage])

    useEffect(() =>{
      
      if(currentFilterMaterial){
        setCurrentPage(1)
        setRecords((DB.filter((item) => item.material === currentFilterMaterial)).slice(firstIndex, lastIndex))
        setNPage(Math.ceil((records.filter((item) => item.material === currentFilter ).length / recordsPerPage)))
        numbers = Array.from(Array(nPage), (_, index) => index + 1);
      }
    }, [currentFilterMaterial, currentPage])



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

  const resetFilters = () =>{
    setRecords((DB.filter((item) => item.style === currentFilter )).slice(firstIndex, lastIndex)) // все товары
    setNPage(Math.ceil((DB.filter((item) => item.style === currentFilter ).length / recordsPerPage)))
    
    numbers = Array.from(Array(nPage), (_, index) => index + 1);

    setCurrentFilterMaterial('')
    
  }

  return (
  <div className={styles.catalog}>
    <div className={styles.filters}>
      {/* <Filters></Filters> */}

    <ul>
      <li className={currentFilter === 'wood' ? styles.filter_active : ''} onClick={() => setCurrentFilter('wood')}>
        <span>Межкомнатные двери</span>
        <ul>
          <li> Материал:</li>
          <li  className={currentFilterMaterial === 'экошпон' ? styles.filter_active_material : ''}
              onClick={() => setCurrentFilterMaterial('экошпон')}
          >Экошпон</li>
          <li onClick={() => setCurrentFilterMaterial('эмаль')}
            className={currentFilterMaterial === 'эмаль' ? styles.filter_active_material : ''}
          >Эмаль</li>
        </ul>
      </li>
     
      <li  className={currentFilter === 'metal' ? styles.filter_active : ''} onClick={() => setCurrentFilter('metal')}>
        <span>Железные двери</span>
      </li>
    </ul>
    <button onClick={() => {resetFilters()}}>Сбросить фильтры</button>
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
            <NavLink to={`/Catalog/` + el.id}>Подробнее</NavLink>
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
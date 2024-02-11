import React, {FC, useEffect, useState} from "react";

import styles from './Catalog.module.scss'

import { DB } from "../../database";
import { NavLink } from "react-router-dom";
import Filters from "../../components/Filters/Filters";
import { TItem } from "../../const/types";
import { nullItem } from "../../const/const";
import { useAppDispatch, useAppSelector } from "../../store/appHooks";
import { ChangeCurrentPage, NextPage, PrevPage, SetCurrentFilter, SetCurrentFilterMaterial } from "../../store/productsSlice";


interface CatalogProps {
  
}
 
const Catalog: FC<CatalogProps> = () => {

  const dispatch = useAppDispatch()
  const currentPage = useAppSelector((state) => state.products.CurrentPage);
  const currentFilterMaterial = useAppSelector((state) => state.products.CurrentFilterMaterial);
  const currentFilter = useAppSelector((state) => state.products.CurrentFilter);

  const [currentPriceCategory, setCurrentPriceCategory] = useState<'' | 'eco' | 'budget' | 'premium'>('')

  const [records, setRecords] = useState<TItem[]>([])
  const [nPage, setNPage] = useState<number>(1)

  const recordsPerPage = 6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  let numbers = Array.from(Array(nPage), (_, index) => index + 1);

  const [checkAppar, setCheckAppar] = useState<boolean>(false);
  const [checkMirror, setCheckMirror] = useState<boolean>(false);
  const [checkNoise, setCheckNoise] = useState<boolean>(false);
  const [checkThermal, setCheckThermal] = useState<boolean>(false);

  useEffect(() =>{//Главный фильтр (железная или межкомнатная)
      setRecords((DB.filter((item) => item.style === currentFilter )).slice(firstIndex, lastIndex))
      setNPage(Math.ceil((DB.filter((item) => item.style === currentFilter ).length / recordsPerPage)))
      
      numbers = Array.from(Array(nPage), (_, index) => index + 1);
      dispatch(SetCurrentFilterMaterial(''))
    }, [currentFilter, currentPage])

    useEffect(() =>{//Материал межком двери
      
      if(currentFilterMaterial){  
        dispatch(ChangeCurrentPage(1))
        setRecords((DB.filter((item) => item.material === currentFilterMaterial ))
        .slice(firstIndex, lastIndex))
        setNPage(Math.ceil((records.filter((item) => item.material === currentFilter ).length / recordsPerPage)))
        numbers = Array.from(Array(nPage), (_, index) => index + 1);
      }
    }, [currentFilterMaterial, currentPage])

    useEffect(() =>{ //Ценовая категория желез дверей
      if(currentPriceCategory){
        dispatch(ChangeCurrentPage(1))
        setRecords((DB.filter((item) => item.priceCategory === currentPriceCategory ))
        .slice(firstIndex, lastIndex))
        setNPage(Math.ceil((records.filter((item) => item.priceCategory === currentPriceCategory ).length / recordsPerPage)))
        numbers = Array.from(Array(nPage), (_, index) => index + 1);
      }
    }, [currentPriceCategory, currentPage])

    useEffect(() =>{ //фильтры желез двери
      if(currentFilter === 'metal'){
        dispatch(ChangeCurrentPage(1))
        let filtered : TItem[] = []



        if(checkAppar){
          let NewItems :TItem[] = []
          NewItems = DB.filter((item) => item.priceCategory === currentPriceCategory).filter((item) => item.additional.appar === true)
          filtered = [...filtered, ...NewItems]
        }
        if(checkMirror){
          let NewItems :TItem[] = []
          NewItems = DB.filter((item) => item.additional.mirror === true)
          filtered = [...filtered, ...NewItems]
        }
        if(checkNoise){
          let NewItems :TItem[] = []
          NewItems = DB.filter((item) => item.additional.noise === true)
          filtered = [...filtered, ...NewItems]
        }
        if(checkThermal){
          let NewItems :TItem[] = []
          NewItems = DB.filter((item) => item.additional.thermal === true)
          filtered = [...filtered, ...NewItems]
        }

        if(filtered.length > 1){
          
          const newSet = new Set(filtered);
          let filteredDuplicates : TItem[] = Array.from(newSet)
          console.log(filteredDuplicates)
          if(currentPriceCategory){
            filteredDuplicates.filter((item) => item.priceCategory === currentPriceCategory)
          }
          // console.log(filteredDuplicates)
          
          setRecords(filteredDuplicates)
          // console.log(filteredDuplicates)

          setNPage(Math.ceil((records.filter((item) => item.style === currentFilter ).length / recordsPerPage)))
          numbers = Array.from(Array(nPage), (_, index) => index + 1);
          
          dispatch(SetCurrentFilterMaterial(''))
        }  else{
          setRecords((DB.filter((item) => item.style === currentFilter )).slice(firstIndex, lastIndex))
            setNPage(Math.ceil((DB.filter((item) => item.style === currentFilter ).length / recordsPerPage)))
            console.log(123)
            // console.log(filtered)
            numbers = Array.from(Array(nPage), (_, index) => index + 1);
            dispatch(SetCurrentFilterMaterial(''))
        }
        
        // setRecords(filtered)
        // records.slice(firstIndex, lastIndex)
        // setNPage(Math.ceil((records.filter((item) => item.material === currentFilter ).length / recordsPerPage)))
        // numbers = Array.from(Array(nPage), (_, index) => index + 1);
      }
      console.log(checkAppar)
    }, [checkAppar, checkMirror, checkNoise, checkThermal])



  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(PrevPage())
    }
  };
  const handleNextPage = () => {
    if (currentPage < nPage) {
      dispatch(NextPage())
    }
  };
  const handleChangeCurrentPage = (id: number) => {
    dispatch(ChangeCurrentPage(id))
  };

  const resetFilters = () =>{
    setCurrentPriceCategory('')
    dispatch(SetCurrentFilterMaterial(''))
    setRecords((DB.filter((item) => item.style === currentFilter )).slice(firstIndex, lastIndex)) // все товары
    setNPage(Math.ceil((DB.filter((item) => item.style === currentFilter ).length / recordsPerPage)))
    numbers = Array.from(Array(nPage), (_, index) => index + 1);
    
    setCheckAppar(false)
    setCheckMirror(false)
    setCheckNoise(false)
    setCheckThermal(false)
  }

  return (
  <div className={styles.catalog}>
    <div className={styles.filters}>
      {/* <Filters></Filters> */}

    <ul>
      <li className={currentFilter === 'wood' ? styles.filter_active : ''} onClick={() => dispatch(SetCurrentFilter('wood'))}>
        <span>Межкомнатные двери</span>
        <ul className={styles.article}>
          <li className={styles.title}> Материал:</li>
          <li  className={currentFilterMaterial === 'экошпон' ? styles.filter_active_material : ''}
              onClick={() => dispatch(SetCurrentFilterMaterial('экошпон'))}
          >Экошпон</li>
          <li onClick={() => dispatch(SetCurrentFilterMaterial('эмаль'))}
            className={currentFilterMaterial === 'эмаль' ? styles.filter_active_material : ''}
          >Эмаль</li>
          {/* do this \/ */}
          <li  className={currentFilterMaterial === 'эмалит' ? styles.filter_active_material : ''}
              onClick={() => dispatch(SetCurrentFilterMaterial('эмалит'))}
          >Эмалит</li>
          <li  className={currentFilterMaterial === 'натур' ? styles.filter_active_material : ''}
              onClick={() => dispatch(SetCurrentFilterMaterial('натур'))}
          >Натуральный шпон</li>

          {/* Доп свойства */}
          {/* <li  className={currentFilterMaterial === 'экошпон' ? styles.filter_active_material : ''}
              onClick={() => dispatch(SetCurrentFilterMaterial('экошпон'))}
          >Со стеклом</li>
          <li  className={currentFilterMaterial === 'экошпон' ? styles.filter_active_material : ''}
              onClick={() => dispatch(SetCurrentFilterMaterial('экошпон'))}
          >С зеркалом</li> */}
          

        </ul>
        
      </li>
     
      <li  className={currentFilter === 'metal' ? styles.filter_active : ''} onClick={() => dispatch(SetCurrentFilter('metal'))}>
        <span>Железные двери</span>
        <ul>
          <li>
            <ul className={styles.article}>
              <li className={currentPriceCategory === 'eco' ? styles.filter_active_material : ''}
                onClick={() => setCurrentPriceCategory('eco')}>
              Эконом вариант
            </li>
            <li className={currentPriceCategory === 'budget' ? styles.filter_active_material : ''}
                onClick={() => setCurrentPriceCategory('budget')}>
              Бюджетный вариант
            </li>
            <li className={currentPriceCategory === 'premium' ? styles.filter_active_material : ''}
                onClick={() => setCurrentPriceCategory('premium')}>
              Премиум  класса
            </li>
            </ul>
          </li>
          
          <li >
            Под заказ
          </li>
          <li>
            <input onChange={() => setCheckAppar(!checkAppar) } type="checkbox" id="appar" checked={checkAppar}/>
            <label htmlFor="appar">Квартирный вариант</label>
          </li>
          <li>
            <input onChange={() => setCheckMirror(!checkMirror)} type="checkbox" id="mirror" checked={checkMirror}/>
            <label htmlFor="mirror">С зеркалом</label>
          </li>
          <li>
            <input onChange={() => setCheckNoise(!checkNoise)} type="checkbox" id="noise" checked={checkNoise}/>
            <label htmlFor="noise">Хорошая шумоизоляция</label>
          </li>
          <li>
            <input onChange={() => setCheckThermal(!checkThermal)} type="checkbox" id="thermal" checked={checkThermal}/>
            <label htmlFor="thermal">Терморазрыв</label>
          </li>
        </ul>
      </li>
      <li> <NavLink to="/Arch">Арки и Порталы</NavLink></li>
      <li><NavLink to="/Laminate">Ламинат</NavLink></li>
      <li><NavLink to="/Ceiling">Натяжные потолки</NavLink></li>
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
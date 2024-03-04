import React, {FC, useEffect, useState} from "react";

import styles from './Catalog.module.scss'

// import { DB } from "../../database";

import { NavLink } from "react-router-dom";
import Filters from "../../components/Filters/Filters";
import { TItem, TItemWood, TItemMetal } from "../../const/types";
import { nullItem, nullItemWood } from "../../const/const";
import { useAppDispatch, useAppSelector } from "../../store/appHooks";
import { ChangeCurrentPage, NextPage, PrevPage, SetCurrentFilter, SetCurrentFilterMaterial, SetCurrentItem } from "../../store/productsSlice";
import { DB_Doors_Wood } from "../../DataBase/DB_Doors_Wood";
import { DB_Doors_Metal } from "../../DataBase/DB_Doors_Metal";


interface CatalogProps {
  
}
 
const Catalog: FC<CatalogProps> = () => {

  const dispatch = useAppDispatch()
  const currentPage = useAppSelector((state) => state.products.CurrentPage);
  const currentFilterMaterial = useAppSelector((state) => state.products.CurrentFilterMaterial);
  const currentFilter = useAppSelector((state) => state.products.CurrentFilter);
  const CurrentItem = useAppSelector((state) => state.products.CurrentItem) 

  const [currentPriceCategory, setCurrentPriceCategory] = useState<'' | 'eco' | 'budget' | 'premium'>('')

  const [records, setRecords] = useState<TItemWood[] | TItemMetal[]>([nullItemWood])
  const [nPage, setNPage] = useState<number>(1)

  const recordsPerPage = 6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  let numbers = Array.from(Array(nPage), (_, index) => index + 1);

  const [checkAppar, setCheckAppar] = useState<boolean>(false);
  const [checkMirror, setCheckMirror] = useState<boolean>(false);
  const [checkNoise, setCheckNoise] = useState<boolean>(false);
  const [checkThermal, setCheckThermal] = useState<boolean>(false);

  useEffect(() =>{//Главный фильтр (железная или межкомнатная) + категории
      if(currentFilter === 'metal'){

        if(currentPriceCategory){
          let lastRecordId : string
          if(records.length > 0){
            lastRecordId = records[0].id;
          }
          setRecords((DB_Doors_Metal.filter((item) => item.priceCategory === currentPriceCategory ))
          .slice(firstIndex, lastIndex))
          let newRecordId : string
          if((DB_Doors_Metal.filter((item) => item.priceCategory === currentPriceCategory))[0]){
            newRecordId = DB_Doors_Metal.filter((item) => item.priceCategory === currentPriceCategory)[0].id
          }
          if(lastRecordId && newRecordId){
            if(lastRecordId !== newRecordId) dispatch(ChangeCurrentPage(1))
          }
          setNPage(Math.ceil((DB_Doors_Metal.filter((item) => item.priceCategory === currentPriceCategory ).length / recordsPerPage)))
          numbers = Array.from(Array(nPage), (_, index) => index + 1);

          //Доп.Свойства железных дверей \/ ---------------------------
          
          let filtered : (TItemMetal | TItemWood)[] = []
          if(checkAppar){
            let NewItems = []
            NewItems = DB_Doors_Metal
            .filter((item :TItemMetal) => item.additional.appar === true)
            filtered = [...filtered, ...NewItems]
          }
          if(checkMirror){
            let NewItems = []
            NewItems = DB_Doors_Metal
            .filter((item :TItemMetal) => item.additional.mirror === true) 
            filtered = [...filtered, ...NewItems]
          }
          if(checkNoise){
            let NewItems = []
            NewItems = DB_Doors_Metal
            .filter((item :TItemMetal) => item.additional.noise === true) 
            filtered = [...filtered, ...NewItems]
          }
          if(checkThermal){
            let NewItems = []
            NewItems = DB_Doors_Metal
            .filter((item :TItemMetal) => item.additional.thermal === true) 
            filtered = [...filtered, ...NewItems]
          }
          if(filtered.length > 1){  
            const newSet = new Set(filtered);
            let filteredDuplicates : any[] = Array.from(newSet)
            filteredDuplicates = filteredDuplicates.filter((item) => item.priceCategory === currentPriceCategory)    
            setRecords(filteredDuplicates.slice(firstIndex, lastIndex))
            setNPage(Math.ceil((filteredDuplicates.length / recordsPerPage)))
            numbers = Array.from(Array(nPage), (_, index) => index + 1);
          } 

        } else{ // если нет currentPriceCategory
          setRecords(DB_Doors_Metal.slice(firstIndex, lastIndex))
          setNPage(Math.ceil((DB_Doors_Metal.length / recordsPerPage)))
          //Доп.Свойства железных дверей \/ ---------------------------
          let filtered : (TItemMetal | TItemWood)[] = []
          if(checkAppar){
            let NewItems = []
            NewItems = DB_Doors_Metal
            .filter((item :TItemMetal) => item.additional.appar === true)
            filtered = [...filtered, ...NewItems]
            // console.log(filtered)
          }
          if(checkMirror){
            let NewItems = []
            NewItems = DB_Doors_Metal
            .filter((item :TItemMetal) => item.additional.mirror === true) 
            filtered = [...filtered, ...NewItems]
          }
          if(checkNoise){
            let NewItems = []
            NewItems = DB_Doors_Metal
            .filter((item :TItemMetal) => item.additional.noise === true) 
            filtered = [...filtered, ...NewItems]
          }
          if(checkThermal){
            let NewItems = []
            NewItems = DB_Doors_Metal
            .filter((item :TItemMetal) => item.additional.thermal === true) 
            filtered = [...filtered, ...NewItems]
          }
          if(filtered.length > 1){  
            const newSet = new Set(filtered);
            let filteredDuplicates : any[] = Array.from(newSet)    
            setRecords(filteredDuplicates.slice(firstIndex, lastIndex))
            console.log('итого')
            console.log( filteredDuplicates)
            setNPage(Math.ceil((filteredDuplicates.length / recordsPerPage)))
            numbers = Array.from(Array(nPage), (_, index) => index + 1);
          } 

        }
      } else if(currentFilter === 'wood'){
        if(currentFilterMaterial){  //Материал межком двери 
          let lastRecordId : string
          if(records.length > 0){
            lastRecordId = records[0].id;
          }
          setRecords((DB_Doors_Wood.filter((item) => item.material === currentFilterMaterial ))
          .slice(firstIndex, lastIndex))
          let newRecordId : string
          if((DB_Doors_Wood.filter((item) => item.material === currentFilterMaterial))[0]){
            newRecordId = DB_Doors_Wood.filter((item) => item.material === currentFilterMaterial)[0].id
          }
          if(lastRecordId && newRecordId){
            if(lastRecordId !== newRecordId) dispatch(ChangeCurrentPage(1))
          }
          setNPage(Math.ceil((DB_Doors_Wood.filter((item) => item.material === currentFilterMaterial )).length / recordsPerPage))
          numbers = Array.from(Array(nPage), (_, index) => index + 1); 
        } else {// если нет currentFilterMaterial
          // dispatch(ChangeCurrentPage(1))  // протестить?
          setRecords(DB_Doors_Wood.slice(firstIndex, lastIndex))
          setNPage(Math.ceil((DB_Doors_Wood.length / recordsPerPage)))   
        }
      }



    }, [currentFilter, currentPage, currentFilterMaterial, currentPriceCategory, checkAppar, checkMirror, checkNoise, checkThermal])

    const displayItems = (type : string) =>{
      if(records.length> 0 && records[0].kind === 'TItemWood'){
        return records.filter((item) => item.kind === 'TItemWood').map((el: TItemWood) =>( 
          <div className={styles.item}>
            <span className={styles.name}>{el.name}</span>
  
            
            {/* <span>{el.material}</span>  */}
            <img src={`images/doors/wood/preview/door${el.id}.jpg`} alt="" />
            {/* <span className={styles.color}>{el.colors[0]}</span> */}
            <span className={styles.price}>
              Цена за полотно:{el.price} ₽<br></br>
              <span className={styles.set}>Цена за комплект: {el.fullPrice} ₽</span>
            </span>
            <NavLink to={`/Catalog/` + el.id} onClick={() => dispatch(SetCurrentItem(el))}>Подробнее</NavLink>
          </div>))
      } else
      if(records.length > 0 &&  records[0].kind === 'TItemMetal'  ){
        return records.filter((item) => item.kind === 'TItemMetal').map((el: TItemMetal) =>( 
          <div className={styles.item}>
            <span className={styles.name}>{el.name}</span>
            {/* <span>{el.priceCategory}</span>
            <span>{`${el.additional.appar ? 'appar' : ''} `}</span>
            <span>{`${el.additional.mirror ? 'mirror' : ''} `}</span>
            <span>{`${el.additional.noise ? 'noise' : ''} `}</span>
            <span>{`${el.additional.thermal ? 'thermal' : ''} `}</span> */}

            <img src={`images/doors/metal/preview/door${el.id}.jpg`} alt="" />
            <span className={styles.color}>{el.color}</span>
            <span className={styles.price}>
              Цена: {el.price} ₽<br></br>
            </span>
            <NavLink to={`/Catalog/` + el.id} onClick={() => dispatch(SetCurrentItem(el))}>Подробнее</NavLink>
          </div>))
      } else return(<p>Ничего нет</p>)
    }
      


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
    dispatch(ChangeCurrentPage(1))

    if(currentFilter === 'wood'){
      setRecords(DB_Doors_Wood.slice(firstIndex, lastIndex))
      setNPage(Math.ceil((DB_Doors_Wood.length / recordsPerPage))) 
    } else if(currentFilter === 'metal'){
      setRecords(DB_Doors_Metal.slice(firstIndex, lastIndex))
      setNPage(Math.ceil((DB_Doors_Metal.length / recordsPerPage))) 
    } else{
      setRecords(DB_Doors_Wood.slice(firstIndex, lastIndex))
      setNPage(Math.ceil((DB_Doors_Wood.length / recordsPerPage))) 
    }
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
          
          {/* <li >
            Под заказ
          </li> */}
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
        {currentFilter === 'wood' ? displayItems('wood') : currentFilter === 'metal' ? displayItems('metal') : ''}
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
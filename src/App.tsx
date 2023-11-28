import React from "react";

import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalog from "./page/catalog/Catalog";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";




function App() {
  return (
    <div className={styles.App}>
      {/* <Header></Header> */}
      <BrowserRouter>
      <HeaderMenu></HeaderMenu>
        <Routes>
        <Route
              path={"/"}
              element={<Header></Header>}
            ></Route>
            <Route
              path={"/Catalog"}
              element={<Catalog></Catalog>}
            ></Route>
        </Routes>
        {/* <Catalog></Catalog> */}
      </BrowserRouter>
       {/* <NavLink to="/Shop"> 
            <img src="./img/shop.png" alt="shop" />
            <p>Shop</p>
          </NavLink> */}
    </div>
  );
}

export default App;

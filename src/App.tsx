import React from "react";

import styles from "./App.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Catalog from "./page/Catalog/Catalog";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import Catalog from "./page/Catalog/Catalog";
import ShopItem from "./components/ShopItem/ShopItem";
import Main from "./page/Main/Main";
import Header from "./components/Header/Header";


function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
      {/* <Header></Header> */}
      <HeaderMenu></HeaderMenu>
        <Routes>
            <Route
              path={"/"}
              element={<Main></Main>}>
            </Route>
            <Route
              path={"/Catalog"}
              element={<Catalog></Catalog>}>
            </Route>
            <Route
              path={"/Catalog/:id"}
              element={<ShopItem></ShopItem>}>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";

import styles from "./App.module.scss";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
// import Catalog from "./page/Catalog/Catalog";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import Catalog from "./page/Catalog/Catalog";
import ShopItem from "./components/ShopItem/ShopItem";
import Main from "./page/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Arch from "./page/Arch/Arch";
import Laminate from "./page/Laminate/Laminate";
import Ceiling from "./page/Ceiling/Ceiling";
import Cart from "./page/Cart/Cart";


function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter >
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
            <Route
              path={"/Arch"} 
              element={<Arch></Arch>}>
            </Route>
            <Route
              path={"/Laminate"}
              element={<Laminate></Laminate>}>
            </Route>
            <Route
              path={"/Ceiling"}
              element={<Ceiling></Ceiling>}>
            </Route>
            <Route
              path={"/Cart"}
              element={<Cart></Cart>}>
            </Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

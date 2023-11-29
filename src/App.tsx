import React from "react";

import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Catalog from "./page/Catalog/Catalog";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import Catalog from "./page/Catalog/Catalog";




function App() {
  return (
    <div className={styles.App}>
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
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";

import styles from "./App.module.scss";
import Header from "./components/Header/Header";



function App() {
  return (
    <div className={styles.App}>
      <Header></Header>

       {/* <NavLink to="/Shop"> 
            <img src="./img/shop.png" alt="shop" />
            <p>Shop</p>
          </NavLink> */}
    </div>
  );
}

export default App;

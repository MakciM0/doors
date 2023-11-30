import React, {FC} from "react";

import styles from './Filters.module.scss'

interface FiltersProps {
  
}
 
const Filters: FC<FiltersProps> = () => {
  return (
    <div className={styles.Filters}>
      Filters

    </div>
    );
}
 
export default Filters;
import React from "react";
import styles from "./Content.module.css";
import GetAllModule from "./GetAllModule";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Content = () => {
  

  return (
    <div>
      <div className={styles.Content}>
        <h3>Pemograman</h3>
        <h1>Pemograman Frontend Modern dengan React dan Angular</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
          consequatur suscipit excepturi fuga et magni hic illum asperiores
          debitis necessitatibus accusantium quos porro eum ducimus rem quis ex,
          aliquid laudantium!
        </p>
        <div className={styles.bottom}>
            <p>Pemateri By Nahrul</p>
            <p>14-10-2024</p>
            <button className={styles.button}>Mulai Learning</button>
        </div>
      </div>
      <div className={styles.modul}>
        <h5>Modul Kompetensi</h5>
        <div className={styles.listOfModul}>
            <GetAllModule/>
        </div>
      </div>
    </div>
  );
};

export default Content;

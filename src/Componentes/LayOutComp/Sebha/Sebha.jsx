import React, { useState } from "react";
import style from "./Sebha.module.scss";

export default function Sebha() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div
        className={`${style.sebhaPage} d-flex justify-content-center align-items-center`}
      >
        <div className={style.counterContainer}>
          <h2 className={style.title}>السبحة الإلكترونية 📿</h2>

          {/* الرقم */}
          <div className={style.counter}>
            <h3>{counter}</h3>
          </div>

          {/* مكان الضغط الكبير */}
          <button
            className={style.incrementBtn}
            onClick={() => setCounter(counter + 1)}
          >
            سبح
          </button>

          {/* reset */}
          <button
            className={style.reset}
            onClick={() => setCounter(0)}
          >
            <i className="fa-solid fa-arrow-rotate-left"></i>
          </button>
        </div>
      </div>
    </>
  );
}
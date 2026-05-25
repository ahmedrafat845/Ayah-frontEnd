import React from "react";
import style from "./DoaaList.module.scss";

export default function DoaaList({ title, subtitle, data }) {
  return (
    <div className={style.page}>
      <div className="container">

        <div className={style.header}>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <div className={style.grid}>
          {data.map((item) => (
            <div key={item.id} className={style.card}>

              <div className={style.top}>
                <span className={style.number}>{item.id}</span>
                <span className={style.icon}>📖</span>
              </div>

              <p className={style.doaa}>{item.doaa}</p>

              <span className={style.meta}>
                {item.surah
                  ? `${item.surah} - الآية ${item.ayah}`
                  : item.source}
              </span>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
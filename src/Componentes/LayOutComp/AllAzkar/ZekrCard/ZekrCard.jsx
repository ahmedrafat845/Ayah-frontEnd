import React from "react";
import style from "./ZekrCard.module.scss";

export default function ZekrCard({ item, index, handleCount, handleReset }) {
  return (
    <div className={`${style.card} row py-4 px-4`}>
      
      {/* النص */}
      <div className="col-md-9 order-md-2">
        <div className="content">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h4 className={style.title}>{item.title}</h4>

            <span className={style.numOfZekr}>{item.numOfZekr}</span>
          </div>

          <div className={`${style.zekr} my-3`}>
            {Array.isArray(item.zekr) ? (
              item.zekr.map((group, i) => (
                <div key={i} style={{ marginBottom: "12px" }}>
                  {Array.isArray(group) ? (
                    group.map((text, j) => (
                      <p key={j} style={{ margin: 0 }}>
                        {text}
                      </p>
                    ))
                  ) : (
                    <p style={{ margin: 0 }}>{group}</p>
                  )}
                </div>
              ))
            ) : (
              <h3 className={`${style.zekr} my-3`}>{item.zekr}</h3>
            )}
          </div>

          <h6 className={style.benefit}>
            {item.benefit ? `{${item.benefit}}` : ""}
          </h6>
        </div>
      </div>

      {/* العدّاد */}
      <div className="col-12 col-md-3 order-md-1 counterCol d-flex flex-column align-items-center justify-content-center">
        
        <div onClick={() => handleCount(index)} className={style.count}>
          {item.count}
        </div>

        <div onClick={() => handleReset(index)} className={style.reset}>
          <i className="fa-solid fa-arrow-rotate-left"></i>
        </div>

      </div>
    </div>
  );
}
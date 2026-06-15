import React from "react";
import style from "./Azkar.module.scss";
import { Link } from "react-router-dom";

export default function Azkar() {
  return (
    <div className={style.azkarPage}>
      <div className="container">
        <div className="row pt-5">
          <div className={`${style.captionAzkar} col-lg-10 col-md-12 m-auto p-4 p-md-5`}>
            
            <div className="row g-4 justify-content-center">

              <div className="col-md-4 col-sm-6">
                <Link className={style.link} to="/AzkarElsabah">
                  <div className={`${style.card} ${style.green}`}>
                    <h3>أذكار الصباح 🌅</h3>
                  </div>
                </Link>
              </div>

              <div className="col-md-4 col-sm-6">
                <Link className={style.link} to="/AzkarElmasaa">
                  <div className={`${style.card} ${style.gold}`}>
                    <h3>أذكار المساء 🌙</h3>
                  </div>
                </Link>
              </div>

              <div className="col-md-4 col-sm-6">
                <Link className={style.link} to="/MultipledAzkar">
                  <div className={`${style.card} ${style.navy}`}>
                    <h3>الأذكار المضاعفة ✨</h3>
                  </div>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
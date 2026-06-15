import React from "react";
import style from "../SurahDetails/SurahDetails.module.css";

export default function AyahCard({
  ayah,
  tafseer,
  bookmarkedAyah,
  openTafseer,
  toggleBookmark,
  showTafseer,
}) {
  return (
    <div>
      <div
        id={`ayah-${ayah.number}`}
        className={`${style.surah} rounded-2 p-2 ${
          bookmarkedAyah === ayah.number
            ? style.activeAyah
            : ""
        }`}
      >
        <div className="d-flex justify-content-between align-items-center px-2">
          <div
            className={style.right}
            onClick={() =>
              showTafseer(ayah.numberInSurah)
            }
            style={{ cursor: "pointer" }}
          >
            <div className={style.num}>
              <h5>{ayah.numberInSurah}</h5>
            </div>

            <div>
              <h5 className={`${style.aya} me-1`}>
                {ayah.text}
              </h5>
            </div>
          </div>

          <div className="me-3">
            <div
              onClick={() =>
                toggleBookmark(ayah.number)
              }
              style={{ cursor: "pointer" }}
            >
              <i
                className={
                  bookmarkedAyah === ayah.number
                    ? "fa-solid fa-bookmark text-warning"
                    : "fa-regular fa-bookmark"
                }
              ></i>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${style.tafseerWrapper} ${
          openTafseer === ayah.numberInSurah
            ? style.showTafseer
            : ""
        }`}
      >
        <div className={style.tafseerBox}>
          {tafseer}
        </div>
      </div>
    </div>
  );
}
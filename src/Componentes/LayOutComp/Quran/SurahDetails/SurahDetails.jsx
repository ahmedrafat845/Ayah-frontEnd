import axios from "axios";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import style from "./SurahDetails.module.css";
import tafseerData from "../../../../assets/tafseer.json";
import AyahCard from "../AyahCard/AyahCard";


export default function SurahDetails() {
  const { num } = useParams();

  const [surah, setSurah] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bookmarkedAyah, setBookmarkedAyah] = useState(null);
  const [openTafseer, setOpenTafseer] = useState(null);

  const getSurahDetails = useCallback(async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `https://api.alquran.cloud/v1/surah/${num}/ar`
      );

      setSurah(res.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [num]);

  useEffect(() => {
    getSurahDetails();

    const saved = JSON.parse(
      localStorage.getItem("lastReadAyah")
    );

    if (saved && saved.surahNum === Number(num)) {
      setBookmarkedAyah(saved.ayahNumber);
    }
  }, [num, getSurahDetails]);

  const scrollToBookmarkedAyah = useCallback(() => {
    const element = document.getElementById(
      `ayah-${bookmarkedAyah}`
    );

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    element.classList.add(style.highlight);

    setTimeout(() => {
      element.classList.remove(style.highlight);
    }, 3000);
  }, [bookmarkedAyah]);

  useEffect(() => {
    if (surah && bookmarkedAyah) {
      scrollToBookmarkedAyah();
    }
  }, [surah, bookmarkedAyah, scrollToBookmarkedAyah]);

  const toggleBookmark = (ayahNumber) => {
    if (bookmarkedAyah === ayahNumber) {
      localStorage.removeItem("lastReadAyah");
      setBookmarkedAyah(null);
      return;
    }

    const bookmarkData = {
      surahNum: Number(num),
      ayahNumber,
    };

    localStorage.setItem(
      "lastReadAyah",
      JSON.stringify(bookmarkData)
    );

    setBookmarkedAyah(ayahNumber);
  };

  const showTafseer = (ayahNumber) => {
    setOpenTafseer((prev) =>
      prev === ayahNumber ? null : ayahNumber
    );
  };

  const tafseerMap = useMemo(() => {
    const map = {};

    tafseerData.forEach((item) => {
      if (Number(item.number) === Number(num)) {
        map[item.aya] = item.text;
      }
    });

    return map;
  }, [num]);

  if (loading) {
    return (
      <div className="spin d-flex justify-content-center align-items-center mt-5 pt-5">
        <i className="fa-solid fa-mosque text-white fa-spin fa-5x mt-5 pt-5"></i>
      </div>
    );
  }

  if (!surah) {
    return (
      <div className="text-center text-white mt-5">
        حدث خطأ أثناء تحميل السورة
      </div>
    );
  }

  return (
    <div className={style.surahDetailes}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div
              className={`${style.head} p-3 rounded-3 text-center`}
            >
              <h5>{surah.name}</h5>

              <div className={style.ayahDecor}>
                <span className={style.decor}>۞</span>
                <h4>بسم الله الرحمن الرحيم</h4>
                <span className={style.decor}>۞</span>
              </div>
            </div>

            {surah.ayahs.map((ayah) => (
              <AyahCard
                key={ayah.number}
                ayah={ayah}
                tafseer={
                  tafseerMap[ayah.numberInSurah] ||
                  "لا يوجد تفسير متاح لهذه الآية."
                }
                bookmarkedAyah={bookmarkedAyah}
                openTafseer={openTafseer}
                toggleBookmark={toggleBookmark}
                showTafseer={showTafseer}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
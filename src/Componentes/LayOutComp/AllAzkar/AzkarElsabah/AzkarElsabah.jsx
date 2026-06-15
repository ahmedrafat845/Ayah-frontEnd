import React, { useEffect, useRef, useState } from "react";
import style from "../ZekrCard/ZekrCard.module.scss";
import axios from "axios";
import sound from "../../../../not.wav";
import ZekrCard from "../ZekrCard/ZekrCard";


export default function AzkarElsabah() {
  const [azkarElsabah, setAzkarElsabah] = useState([]);
  const [loading, setloading] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    const getAllAzkarElsabah = async () => {
      setloading(true);

      try {
        const { data } = await axios.get(
          "https://ayah-back-end.vercel.app/azkarElsabah/getAllAzkarElsabah"
        );

        setAzkarElsabah(
          data.allAzkar.map((item) => ({
            ...item,
            initialCount: item.count,
          }))
        );

        setloading(false);
      } catch (error) {
        setloading(false);
        console.error("حدث خطأ:", error);
      }
    };

    getAllAzkarElsabah();
  }, []);

  const handleCount = (index) => {
    const updatedAzkar = [...azkarElsabah];

    if (updatedAzkar[index].count > 0) {
      updatedAzkar[index].count -= 1;
    } else {
      audioRef.current.play();
    }

    setAzkarElsabah(updatedAzkar);
  };

  const handleReset = (index) => {
    const updatedAzkar = [...azkarElsabah];

    updatedAzkar[index].count =
      updatedAzkar[index].initialCount;

    setAzkarElsabah(updatedAzkar);
  };

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <i className="fa-solid fa-mosque fa-10x text-white fa-spin"></i>
        </div>
      ) : (
        <div className={`${style.azkarPage} pb-5 mb-5`}>
          <audio ref={audioRef} src={sound} />

          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <div className={style.header}>
                  <h2>أذكار الصباح 🌅</h2>
                </div>
              </div>
            </div>

            {azkarElsabah.map((item, index) => (
              <ZekrCard
                key={item._id || index}
                item={item}
                index={index}
                handleCount={handleCount}
                handleReset={handleReset}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
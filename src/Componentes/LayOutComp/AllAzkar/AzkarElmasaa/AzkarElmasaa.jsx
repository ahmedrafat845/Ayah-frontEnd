import React, { useEffect, useRef, useState } from "react";
import style from "../ZekrCard/ZekrCard.module.scss";
import sound from "../../../../not.wav";
import ZekrCard from "../ZekrCard/ZekrCard";


export default function AzkarElmasaa() {
  const [azkarElmasaa, setAzkarElmasaa] = useState([]);
  const [loading, setloading] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    (async () => {
      setloading(true);

      try {
        const response = await fetch(
          "https://ayah-back-end.vercel.app/azkarElmasaa/getAllAzkarElmasaa"
        );

        const data = await response.json();

        setAzkarElmasaa(
          data.allAzkar.map((item) => ({
            ...item,
            initialCount: item.count,
          }))
        );

        setloading(false);
      } catch (error) {
        console.error("حدث خطأ:", error);
        setloading(false);
      }
    })();
  }, []);

  const handleCount = (index) => {
    const updatedAzkar = [...azkarElmasaa];

    if (updatedAzkar[index].count > 0) {
      updatedAzkar[index].count -= 1;
    } else {
      audioRef.current.play();
    }

    setAzkarElmasaa(updatedAzkar);
  };

  const handleReset = (index) => {
    const updatedAzkar = [...azkarElmasaa];

    updatedAzkar[index].count =
      updatedAzkar[index].initialCount;

    setAzkarElmasaa(updatedAzkar);
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
                  <h2>أذكار المساء 🌙</h2>
                </div>
              </div>
            </div>

            {azkarElmasaa.map((item, index) => (
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
import React, { useEffect, useRef, useState } from "react";
import style from "./AzkarElmasaa.module.scss";
import sound from "../../../../not.wav";

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
        <div className={`${style.azkarElmasaa} pb-5 mb-5`}>
          <audio ref={audioRef} src={sound} />

          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <div className={style.head_Of_Azkar_Elmasaa}>
                  <h2>أذكار المساء 🌙</h2>
                </div>
              </div>
            </div>

            {azkarElmasaa.map((item, index) => (
              <div
                key={index}
                className={`${style.caption_of_azkarElmasaa} row py-4 px-4`}
              >
                {/* النص */}
                <div className="col-md-9 order-md-2">
                  <div className="content">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h4 className={style.title}>
                        {item.title}
                      </h4>

                      <span className={style.numOfZekr}>
                        {item.numOfZekr}
                      </span>
                    </div>

                    <h3 className={`${style.zekr} my-3`}>
                      {item.zekr}
                    </h3>

                    <h6 className={style.benefit}>
                      {item.benefit
                        ? `{${item.benefit}}`
                        : ""}
                    </h6>
                  </div>
                </div>

                {/* العد */}
                <div className="col-12 col-md-3 order-2 order-md-1 d-flex flex-column align-items-center justify-content-center">
                  <div
                    onClick={() => handleCount(index)}
                    className={style.count}
                  >
                    {item.count}
                  </div>

                  <div
                    onClick={() => handleReset(index)}
                    className={style.reset}
                  >
                    <i className="fa-solid fa-arrow-rotate-left"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
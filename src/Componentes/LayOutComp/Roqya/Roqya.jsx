import React, { useEffect, useState, useRef } from "react";
import style from "../AllAzkar/ZekrCard/ZekrCard.module.scss";
import axios from "axios";
import sound from "../../../not.wav";
import ZekrCard from "../AllAzkar/ZekrCard/ZekrCard";


export default function Roqya() {
  const [roqya, setRoqya] = useState([]);
  const [loading, setloading] = useState(false);

  const audioRef = useRef(null);

  const getAllRoqya = async () => {
    setloading(true);

    try {
      const { data } = await axios.get(
        `https://ayah-back-end.vercel.app/roqya/getAllRoqya`
      );

      const formatted = data.allRoqya.map((item) => ({
        ...item,
  
        zekr: item.roqya,
        numOfZekr: item.numOfRoqya,
        initialCount: item.count,
      }));

      setRoqya(formatted);
      setloading(false);
    } catch (error) {
      console.error("حدث خطأ:", error);
      setloading(false);
    }
  };

  useEffect(() => {
    getAllRoqya();
  }, []);

  const handleCount = (index) => {
    const updated = [...roqya];

    if (updated[index].count > 0) {
      updated[index].count -= 1;
    } else {
      audioRef.current.play();
    }

    setRoqya(updated);
  };

  const handleReset = (index) => {
    const updated = [...roqya];

    updated[index].count = updated[index].initialCount;

    setRoqya(updated);
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
                  <h2>الرقية الشرعية 📿</h2>
                </div>
              </div>
            </div>

            {roqya.map((item, index) => (
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
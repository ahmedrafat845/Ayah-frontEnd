import React, { useEffect, useState, useRef } from "react";
import style from "../AllAzkar/AzkarElsabah/AzkarElsabah.module.scss";
import axios from "axios";
import sound from "../../../not.wav";

export default function Roqya() {
  const [roqya, setRoqya] = useState([]);
  const [countRoqya, setcountRoqya] = useState([]);
  const [loading, setloading] = useState(false);

  const audioRef = useRef(null);

  let getAllRoqya = async () => {
    setloading(true);

    try {
      let { data } = await axios.get(
        `https://ayah-back-end.vercel.app/roqya/getAllRoqya`
      );

      setRoqya(data.allRoqya);

      setcountRoqya(
        data.allRoqya.map((item) => item.count)
      );

      setloading(false);
    } catch (error) {
      console.error("حدث خطأ:", error);
      setloading(false);
    }
  };

  useEffect(() => {
    getAllRoqya();
  }, []);

  let handelCount = (index) => {
    let updateRoqya = [...roqya];

    if (updateRoqya[index].count > 0) {
      updateRoqya[index] = {
        ...updateRoqya[index],
        count: updateRoqya[index].count - 1,
      };
    } else {
      audioRef.current.play();
    }

    setRoqya(updateRoqya);
  };

  let handelReset = (index) => {
    let resetRoqya = [...roqya];

    resetRoqya[index].count =
      countRoqya[index];

    setRoqya(resetRoqya);
  };

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <i className="fa-solid fa-mosque fa-10x text-white fa-spin"></i>
        </div>
      ) : (
        <div className={`${style.azkarElsabah} pb-5 mb-5`}>
          <audio ref={audioRef} src={sound} />

          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <div className={style.head_Of_Azkar_Elsabah}>
                  <h2>الرقية الشرعية 📿</h2>
                </div>
              </div>
            </div>

            {roqya.map((item, index) => (
              <div
                key={index}
                className={`${style.caption_of_azkarElsabah} row py-4 px-4`}
              >
                {/* النص */}
                <div className="col-md-9 order-md-2">
                  <div className="content">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h4 className={style.title}>
                        {item.title}
                      </h4>

                      <span className={style.numOfZekr}>
                        {item.numOfRoqya}
                      </span>
                    </div>

                    <h3 className={`${style.zekr} my-3`}>
                      {item.roqya}
                    </h3>
                  </div>
                </div>

                {/* العد */}
                <div className="col-12 col-md-3 order-2 order-md-1 d-flex flex-column align-items-center justify-content-center">
                  <div
                    onClick={() => handelCount(index)}
                    className={style.count}
                  >
                    {item.count}
                  </div>

                  <div
                    onClick={() => handelReset(index)}
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
import React, { useEffect, useRef, useState } from "react";
import style from "../ZekrCard/ZekrCard.module.scss";
import sound from "../../../../not.wav";
import azkarData from "../../../../assets/zekr.json";
import ZekrCard from './../ZekrCard/ZekrCard';

export default function MultipledAzkar() {
  const [azkar, setAzkar] = useState([]);
  const audioRef = useRef(null);

  useEffect(() => {
    const formatted = azkarData.map((item) => ({
      ...item,

      // توحيد البيانات
      zekr: item.zekr,
      numOfZekr: item.id,
      // العد
      count: item.count || 0,
      initialCount: item.count || 0,
    }));

    setAzkar(formatted);
  }, []);

  const handleCount = (index) => {
    const updated = [...azkar];

    updated[index].count += 1;

    setAzkar(updated);
  };

  const handleReset = (index) => {
    const updated = [...azkar];

    updated[index].count = updated[index].initialCount;

    setAzkar(updated);
  };

  return (
    <div className={`${style.azkarPage} pb-5 mb-5`}>
      <audio ref={audioRef} src={sound} />

      <div className="container">
        {/* Header */}
        <div className="row">
          <div className="col-md-8 m-auto">
            <div className={style.header}>
              <h2>الأذكار المضاعفة ✨</h2>
            </div>
          </div>
        </div>

        {/* Cards */}
        {azkar.map((item, index) => (
          <ZekrCard
            key={item.id || index}
            item={item}
            index={index}
            handleCount={handleCount}
            handleReset={handleReset}
          />
        ))}
      </div>
    </div>
  );
}
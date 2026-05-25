import React from "react";
import { Link } from "react-router-dom";
import style from "./Doaa.module.scss";

export default function Doaa() {
  const doaaCategories = [
    {
      id: 1,
      title: "أدعية من القرآن",
      desc: "أدعية عظيمة وردت في القرآن الكريم",
      icon: "📖",
      path: "/QuranDoaa",
    },
    {
      id: 2,
      title: "أدعية الرزق",
      desc: "أدعية لطلب الرزق والبركة",
      icon: "🤲",
      path: "/RizkDoaa",
    },
    {
      id: 3,
      title: "أدعية يوم عرفه",
      desc: "اغتنم أعظم يوم في السنة بالدعاء والاستغفار" ,
      icon: "🤲",
      path: "/ArafaDoaa",
    },
    // {
    //   id: 4,
    //   title: "أدعية المساء",
    //   desc: "أذكار وأدعية المساء المباركة",
    //   icon: "🌙",
    //   path: "/doaa/evening",
    // },
    // {
    //   id: 5,
    //   title: "أدعية السفر",
    //   desc: "أدعية للحفظ والتيسير أثناء السفر",
    //   icon: "✈️",
    //   path: "/doaa/travel",
    // },
    // {
    //   id: 6,
    //   title: "أدعية الكرب",
    //   desc: "أدعية لتفريج الهم والكرب",
    //   icon: "🤲",
    //   path: "/doaa/distress",
    // },
  ];

  return (
    <div className={style.doaaPage}>
      <div className="container">

        <div className={style.heading}>
          <h2>قسم الأدعية 🤍</h2>
          <p>
            اختر القسم الذي تريده واستمتع بأجمل الأدعية الإسلامية
          </p>
        </div>

        <div className={style.cardsContainer}>
          {doaaCategories.map((item) => (
            <Link
              to={item.path}
              key={item.id}
              className={`link ${style.card}`}
            >
              <div className={style.icon}>
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              <span>
                عرض الأدعية ←
              </span>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
import React, { useContext } from "react";
import { mediaContext } from "../../../Context/MediaStore";
import style from "./Home.module.scss";
import { Link } from "react-router-dom";

export default function Home() {
  let { userData } = useContext(mediaContext);

  let goToAzkar = () => {};
  return (
    <>
      <div className={`${style.Home}`}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8  m-auto text-center  ">
              <div className={`${style.captionHome}`}>
                <h2 className="m-2">
                  أهلاً بك <span style={{ color: "#d4af37" }}>{userData}</span>
                </h2>
                <p>
                  يوفّر موقع آية تجربة إسلامية متكاملة تساعدك على التقرب إلى
                  الله في حياتك اليومية، حيث يمكنك قراءة القرآن الكريم مع
                  التفسير لفهم الآيات وتدبر معانيها، بالإضافة إلى الأذكار
                  اليومية للصباح والمساء، والأحاديث النبوية الشريفة، والرقية
                  الشرعية، وسبحة إلكترونية تساعدك على التسبيح والاستغفار في أي
                  وقت. كما يضم الموقع قسمًا متكاملًا للأدعية يحتوي على أدعية
                  القرآن الكريم، وأدعية الرزق، وأدعية يوم عرفة، وغيرها من
                  الأدعية المناسبة لمختلف الأوقات والمواقف، مما يجعل الوصول إلى
                  المحتوى الإسلامي أكثر سهولة وتنظيمًا.
                </p>
                <div className={`${style.btnGroup} `}>
                  <Link className="link " to={"/quran"}>
                    <button onClick={goToAzkar} className={`${style.btnDini}`}>
                      القران الكريم والتفسير
                    </button>
                  </Link>
                  <Link className="link " to={"/Azkar"}>
                    <button onClick={goToAzkar} className={`${style.btnDini}`}>
                      الأذكار
                    </button>
                  </Link>

                  <Link className="link " to={"/Ahadith"}>
                    <button className={`${style.btnDini}`}>
                      الأحاديث
                    </button>{" "}
                  </Link>

                  <Link className="link " to={"/Roqya"}>
                    <button className={`${style.btnDini}`}>
                      الرقية الشرعية
                    </button>
                  </Link>

                  <Link className="link " to={"/Sebha"}>
                    <button className={`${style.btnDini}`}>السبحة</button>
                  </Link>
                  <Link className="link " to={"/Doaa"}>
                    <button className={`${style.btnDini}`}>الادعيه</button>
                  </Link>
                </div>
                <div className={style.whatsappSection}>
                  <h4>🌿 جروب "آية"</h4>

                  <p>
                    جروب لنشر آيات من القرآن الكريم، وأحاديث نبوية، وأذكار يومية
                    لتذكير القلب بالله 🌙
                  </p>

                  <a
                    href="https://chat.whatsapp.com/FVpKiuvEaUN4i1Jte3sowZ"
                    target="_blank"
                    rel="noreferrer"
                    className={style.whatsappBtn}
                  >
                    انضم إلى جروب آية 📿
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

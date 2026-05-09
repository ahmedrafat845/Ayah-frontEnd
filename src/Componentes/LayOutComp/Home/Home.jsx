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
                  يتيح لك موقع آية الاستفادة من مجموعة متنوعة من الأدوات
                  والموارد لتعزيز عبادتك اليومية عن طريق قراءة الأذكار اليومية،
                  حيث يمكنك تذكير نفسك بذكر الله في الصباح والمساء وكما يمكنك
                  قراءة الاحاديث ويمكنك قراءة الرقية الشرعية عبر الموقع، وهي
                  مجموعة من الآيات القرآنية والأدعية النبوية يقدم الموقع سبحة
                  إلكترونية تسهل عليك القيام بالتسبيح والاستغفار في أي وقت
                  ومكان.
                </p>
                <div className={`${style.btnGroup} `}>
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

import React from "react";
import style from "./Contact.module.scss";

export default function Contact() {
  return (
    <div className={style.contactPage}>
      <div className="container">
        <div className={style.contactCard}>
          <h2>تواصل معنا 🌿</h2>

          <p>يسعدنا استقبال اقتراحاتكم أو التواصل بخصوص الموقع</p>

          <div className={style.contactItem}>
            <span>📧</span>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ahmedrafat01110@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              ahmedrafat01110@gmail.com
            </a>
          </div>

          <div className={style.contactItem}>
            <span>📱</span>
            <a href="tel:+201110275013">01110275013</a>
          </div>

          <div className={style.contactItem}>
            <span>💼</span>
            <a
              href="https://www.linkedin.com/in/ahmed-rafat-355079266/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

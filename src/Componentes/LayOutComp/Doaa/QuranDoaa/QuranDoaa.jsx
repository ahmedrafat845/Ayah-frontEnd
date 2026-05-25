import React from "react";
import doaaData from "../../../../Data/doaa.json";
import DoaaList from "../DoaaList/DoaaList";


export default function QuranDoaa() {
  return (
    <DoaaList
      title="أدعية من القرآن الكريم 🤍"
      subtitle="تأمل في أجمل الأدعية القرآنية واستشعر المعاني"
      data={doaaData.quranDoaa}
    />
  );
}
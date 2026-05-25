import React from "react";
import doaaData from "../../../../Data/doaa.json";
import DoaaList from "../DoaaList/DoaaList";


export default function RizkDoaa() {
  return (
    <DoaaList
      title="أدعية الرزق 🌿"
      subtitle="أدعية مأثورة من القرآن والسنة لطلب الرزق والبركة"
      data={doaaData.rizqDoaa}
    />
  );
}
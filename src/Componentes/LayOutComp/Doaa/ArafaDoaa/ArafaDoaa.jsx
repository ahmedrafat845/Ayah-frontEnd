import React from 'react'
import doaaData from "../../../../Data/doaa.json";
import DoaaList from '../DoaaList/DoaaList'

export default function ArafaDoaa() {
  return (
    <>
     <DoaaList
      title="أدعية يوم عرفه   🤍"
      subtitle="يوم عظيم تُستجاب فيه الدعوات وتُغفر فيه الذنوب ان شاء الله"
      data={doaaData.arafaDoaa}
    />
      
    </>
  )
}

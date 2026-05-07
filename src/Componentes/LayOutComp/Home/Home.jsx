import React, { useContext } from 'react'
import { mediaContext } from '../../../Context/MediaStore'
import style from "./Home.module.scss"

export default function Home() {

  let {userData}= useContext(mediaContext)
  return (
    <>
    <div className={`${style.Home}`}>
      <div className="container">
      <div className="row">
      <div className="col-8 col-sm-6">
          <div className={`${style.captionHome}`}>
          <h2 className='m-2 '>اهلا بك {`<${userData}>`} </h2>
          <p>يتيح لك موقع آية الاستفادة من مجموعة متنوعة من الأدوات والموارد لتعزيز
             عبادتك اليومية عن طريق قراءة 
             الأذكار اليومية، حيث يمكنك تذكير نفسك بذكر الله في الصباح والمساء 
             وكما يمكنك قراءة الاحاديث ويمكنك قراءة الرقية الشرعية عبر الموقع، 
             وهي مجموعة من الآيات القرآنية والأدعية النبوية يقدم الموقع سبحة 
             إلكترونية تسهل عليك القيام بالتسبيح والاستغفار في أي وقت ومكان.</p>
          </div>

        </div>
      </div>
      </div>
    </div>
     
      
    </>
  )
}

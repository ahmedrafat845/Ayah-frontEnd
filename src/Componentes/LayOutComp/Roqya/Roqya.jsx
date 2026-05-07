import React, { useEffect, useState } from 'react'
import style from '../AllAzkar/AzkarElsabah/AzkarElsabah.module.scss'
import axios from 'axios'
export default function Roqya() {

    const [roqya, setRoqya] = useState([])
    const [countRoqya, setcountRoqya] = useState([])
    const [loading, setloading] = useState(false)

    let getAllRoqya=async()=>{
        setloading(true)
      try{
        let {data}=await axios.get(`https://ayah-back-end.vercel.app/roqya/getAllRoqya`)
        setRoqya(data.allRoqya)
       setcountRoqya(data.allRoqya.map(item => item.count))
       setloading(false)
      }catch(error){
        console.error('حدث خطأ:', error);
        setloading(false)
      }   
    }

    useEffect(() => {
        getAllRoqya()
    }, [])

    let handelCount=(index)=>{
        let updateRoqya=[...roqya]
        updateRoqya[index]={...updateRoqya[index], count:updateRoqya[index].count-1}
        setRoqya(updateRoqya)
    }
    let handelReset=(index)=>{
        let resetRoqya=[...roqya]
        resetRoqya[index].count=countRoqya[index]
        setRoqya(resetRoqya)
    }

  return (
    <>
   {loading? (
    <div className='d-flex justify-content-center align-items-center vh-100'>
        <i className="fa-solid fa-mosque  fa-10x   text-white fa-spin"></i>
    </div>
    ):
    ( <div className="azkarElsabah pb-5 mb-5">
     <div className="container">
       <div className="row">
         <div className="col-md-8 m-auto">
           <div className={`${style.head_Of_Azkar_Elsabah}`}>
             <h2>الرقيه الشرعيه 🧡</h2>

           </div>
         </div>

       </div>
      {roqya.map((item,index)=>(
        <div key={index} className={`${style.caption_of_azkarElsabah} row p-5`}>
       
        <div className="col-md-9 order-md-2">
         <div className="content">
         <div className='d-flex justify-content-between'>
             <h4 className={`${style.title}`}>{`{${item.title}}`}</h4> <span className={`${style.numOfZekr}`}>{item.numOfRoqya}</span>
         </div>
          <h3 className='my-3'>{item.roqya}</h3>
         </div>
        </div>
        <div className="col-md-3 order-md-1">
        <div onClick={() => handelCount(index) } className={`${style.count}`}>
               {item.count}
           </div>
         <div onClick={() =>handelReset(index)} className={`${style.reset} py-3`}>
               <i className="fa-solid fa-arrow-rotate-left"></i>
            </div>
        </div>
      </div>
      ))}
     </div>
   </div>)
   
   }
      
    </>
  )
}

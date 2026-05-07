import React, { useEffect, useRef, useState } from 'react'
import style from './AzkarElsabah.module.scss'
import axios from 'axios'
import sound from '../../../../not.wav'

export default function AzkarElsabah() {

  const [azkarElsabah, setAzkarElsabah] = useState([])
  const [loading, setloading] = useState(false)
  const audioRef = useRef(null);


  
  useEffect(() => {
    const getAllAzkarElsabah = async () => {
      setloading(true)
      try {
        const { data } = await axios.get('https://ayah-back-end.vercel.app/azkarElsabah/getAllAzkarElsabah');
        setAzkarElsabah(data.allAzkar.map(item => ({
          ...item,
          initialCount: item.count
        })));
        setloading(false)
      } catch (error) {
        setloading(false)
        console.error('حدث خطأ:', error);
      }
    };

    getAllAzkarElsabah();
  }, []);

  const handleCount = (index) => {
    const updatedAzkar = [...azkarElsabah];
    if (updatedAzkar[index].count > 0) {
      updatedAzkar[index] = { ...updatedAzkar[index], count: updatedAzkar[index].count - 1 };
    }else{
      audioRef.current.play();
    }
    setAzkarElsabah(updatedAzkar);
  };
  const handleReset = (index) => {
    const updatedAzkar = [...azkarElsabah];
    updatedAzkar[index] = { ...updatedAzkar[index], count: updatedAzkar[index].initialCount };
    setAzkarElsabah(updatedAzkar);
  };
  



  return (
    <>
    {loading?(
         <div className='d-flex justify-content-center align-items-center vh-100'>
         <i class="fa-solid fa-mosque  fa-10x   text-white fa-spin"></i>
     </div>
    ):(
      <div className="azkarElsabah pb-5 mb-5">
        <audio ref={audioRef} src={sound} />
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <div className={`${style.head_Of_Azkar_Elsabah}`}>
              <h2>اذكار الصباح 🧡</h2>

            </div>
          </div>

        </div>
       {azkarElsabah.map((item,index)=>(
         <div key={index} className={`${style.caption_of_azkarElsabah} row py-5 px-4`}>
        
         <div className="col-md-9 order-md-2">
          <div className="content">
          <div className='d-flex justify-content-between'>
              <h4 className={`${style.title}`}>{`{${item.title}}`}</h4> <span className={`${style.numOfZekr}`}>{item.numOfZekr}</span>
          </div>
           <h3 className={`${style.zekr} my-3`}>{item.zekr}</h3>
           <h6 className={`${style.benefit} mb-2`}>{item.benefit ? `{${item.benefit}}` : ''}</h6>
          </div>
         </div>
         <div className="col-md-3 order-md-1">
         <div onClick={() => handleCount(index)} className={`${style.count} `}>
                {item.count}
            </div>
          <div onClick={() => handleReset(index)} className={`${style.reset} py-3`}>
                <i className="fa-solid fa-arrow-rotate-left"></i>
             </div>
         </div>
       </div>
       ))}
      </div>
    </div>
    )}
  
      
    </>
  )
}

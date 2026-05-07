import React, { useEffect, useRef, useState } from 'react';
import style from './AzkarElmasaa.module.scss';
import sound from '../../../../not.wav'


export default function AzkarElmasaa() {

  const [azkarElmasaa, setAzkarElmasaa] = useState([])
  const [loading, setloading] = useState(false)
  const audioRef = useRef(null);

  useEffect(() => {
    (async () => {
      setloading(true)
      try {
        const response = await fetch('https://ayah-back-end.vercel.app/azkarElmasaa/getAllAzkarElmasaa');
        const data = await response.json();
        setAzkarElmasaa(data.allAzkar.map(item => ({
          ...item,
          initialCount: item.count
        })));
        setloading(false)
      } catch (error) {
        console.error('حدث خطأ:', error);
        setloading(false)
      }
    })();
  }, []);


  const handleCount = (index) => {
    const updatedAzkar = [...azkarElmasaa];
    if (updatedAzkar[index].count > 0) {
      updatedAzkar[index] = { ...updatedAzkar[index], count: updatedAzkar[index].count - 1 };
    }else{
      audioRef.current.play();
    }
    setAzkarElmasaa(updatedAzkar);
  };

  const handleReset = (index) => {
    const updatedAzkar = [...azkarElmasaa];
    updatedAzkar[index] = { ...updatedAzkar[index], count: updatedAzkar[index].initialCount };
    setAzkarElmasaa(updatedAzkar);
  };

  return (
    <>
    {loading?(
       <div className='d-flex justify-content-center align-items-center vh-100'>
       <i class="fa-solid fa-mosque  fa-10x   text-white fa-spin"></i>
   </div>
    ):(
      <div className="azkarElmasaa">
         <audio ref={audioRef} src={sound} />
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <div className={`${style.head_Of_Azkar_Elmasaa}`}>
              <h2> أذكار المساء 🧡</h2>

            </div>
          </div>

        </div>
        {azkarElmasaa.map((item, index) => (
          <div key={index} className={`${style.caption_of_azkarElmasaa} row py-5 px-4`}>

            <div className="col-md-9 order-md-2">
              <div className="content">
                <div className='d-flex justify-content-between'>
                  <h4 className={`${style.title}`}>{`{${item.title}}`}</h4> <span className={`${style.numOfZekr}`}>{item.numOfZekr}</span>
                </div>
                <h3 className={`${style.zekr} my-3`}>{item.zekr}</h3>
                <h5 className={`${style.benefit} mb-2`}>{item.benefit ? `{${item.benefit}}` : ''}</h5>
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

import React, { useState } from 'react'
import style from "./Sebha.module.scss"

export default function Sebha() {
    const [counter, setCounter] = useState(0);
  return (
    <>
      <div className='d-flex justify-content-center align-items-center mt-5 pt-5'>
        <div className={`${style.counterContainer} `}>
                <div className={`${style.counter}`}><h3>{counter}</h3></div>
                <button className={`${style.incrementBtn}`} onClick={() => setCounter(counter + 1)}>زيادة</button> <br />
                <button  className={`${style.reset}`} onClick={() => setCounter(0)}>إعادة تعيين</button>
            </div>
      </div>
      
    </>
  )
}

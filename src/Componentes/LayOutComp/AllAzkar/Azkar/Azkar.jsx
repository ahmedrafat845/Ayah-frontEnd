import React from 'react'
import style from './Azkar.module.scss'
import { Link } from 'react-router-dom'

export default function Azkar() {
  return (
    <>
    <div className="Azkar">
        <div className="container">
            <div className="row pt-5 mt-5">
               <div className={`${style.captionAzkar} col-md-8 m-auto mt-5 py-5`}>
                <div className="row">
              
                <div className="col-md-6">
                <Link className='link ' to={'/AzkarElsabah'}>
                        <div className={`${style.azkarElsabah} mb-5`}>
                            <h2>اذكار الصباح</h2>

                        </div>
                </Link>
                </div>
            
              
                <div className="col-md-6">
                <Link className='link' to={'/AzkarElmasaa'}>
                        <div className={`${style.azkarElmasaa} `}>
                            <h2>اذكار المساء</h2>
                            
                        </div>
                </Link>
                </div>
             
                </div>
               </div>
            </div>
        </div>
    </div>
     
    </>
  )
}

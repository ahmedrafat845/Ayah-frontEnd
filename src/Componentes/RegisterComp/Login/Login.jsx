import React, { useContext, useState } from 'react'
import style from './Login.module.scss'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { mediaContext } from './../../../Context/MediaStore';
import { toast } from 'react-toastify'
import { Navigate, useNavigate } from 'react-router-dom'
import ErrorList from './../../LayOutComp/ErrorList/ErrorList';

export default function Login() {
  const [loading, setLoading] = useState(false)
  let {saveUserData}=useContext(mediaContext)
  const navigate = useNavigate();

  const notify = (msg,type) => {
    toast[type](msg,{
      autoClose:1000 ,
    });
  }

  let validationSchema=Yup.object({
    
    name:Yup.string().required().min(3, 'Name must be at least 3 characters'), 
  })

  let Formik = useFormik({
    initialValues:{
      name:'',
    },
    validationSchema,

    onSubmit:async(values)=>{
      setLoading(true)
      try{
        const { data, status } = await axios.post('https://ayah-back-end.vercel.app/users/login', values);
        if (status === 201) {
          notify('تم التسجيل بنجاح', 'success');
          localStorage.setItem('token', data.token);
          saveUserData();
          setLoading(false);
          Formik.resetForm();
          navigate('/');
        }

      } catch(error){
        if (error.response || error.response.status === 400) {
          setLoading(false);
          const errorMessage = error.response.data.message || "An error occurred";
          notify(errorMessage, 'error');
        }
      };
    }
  })


  
  return (
    <>
    <div className={`${style.Login}`}>
      <div className="container">
        <div className="row">
        <div className="col-md-8 m-auto mt-5">
          <div className={`${style.caption} mt-5 text-center`}>
              <h3 >بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ :</h3>
              <h3 className='my-3'>(إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ ۚ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا) </h3>
              <form onSubmit={Formik.handleSubmit}>
              <input
               onBlur={Formik.handleBlur}
               onChange={Formik.handleChange} 
               value={Formik.values.name}
               name='name'
               type="text" 
               className='form-control w-75 m-auto my-3'
               placeholder='برجاء ادخال الاسم ...' />
               <button disabled={!(Formik.isValid && Formik.dirty && !loading)} type='submit' className='btn btn-success w-50 mb-3'>
                   
                   {!loading? ("تسجيل"):
                   <i className='fa-spinner fa-spin fas'></i>
                   
                   }
              
                </button>

              </form>
             
              <div >
                     <ErrorList Formik={Formik} type={"name"} />
              </div>


          </div>
        </div>
        </div>
      </div>
    </div>
   
   
      
    </>
  )
}

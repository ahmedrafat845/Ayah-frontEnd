
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import MasterLayOut from './../LayOutComp/MaterLayOut/MasterLayOut';
import NotFound from './../RegisterComp/NotFound/NotFound';
import Home from './../LayOutComp/Home/Home';
import ProtectRouter from './../RegisterComp/ProtectRouter/ProtectRouter';
import Login from '../RegisterComp/Login/Login';
import ReverseProtect from './../RegisterComp/ReverseProtectRouter/ReverseProtect';
import { ToastContainer } from 'react-toastify';
import Azkar from '../LayOutComp/AllAzkar/Azkar/Azkar';
import AzkarElsabah from './../LayOutComp/AllAzkar/AzkarElsabah/AzkarElsabah';
import AzkarElmasaa from '../LayOutComp/AllAzkar/AzkarElmasaa/AzkarElmasaa';
import Roqya from '../LayOutComp/Roqya/Roqya';
import Ahadith from './../LayOutComp/Ahadith/Ahadith';
import Sebha from '../LayOutComp/Sebha/Sebha';
import Contact from '../LayOutComp/ContactUs/Contact';
import Doaa from '../LayOutComp/Doaa/Doaa';
import QuranDoaa from '../LayOutComp/Doaa/QuranDoaa/QuranDoaa';
import RizkDoaa from './../LayOutComp/Doaa/RizkDoaa/RizkDoaa';
import ArafaDoaa from '../LayOutComp/Doaa/ArafaDoaa/ArafaDoaa';
import Quran from './../LayOutComp/Quran/Quran';
import SurahDetails from './../LayOutComp/Quran/SurahDetails/SurahDetails';



export default function App() {
 






let routes = createBrowserRouter([
  {
    path: '/',
    element: <MasterLayOut />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <ProtectRouter><Home/></ProtectRouter> },
      { path: 'quran', element: <ProtectRouter><Quran/></ProtectRouter> },
      { path: 'surahDetails/:num', element: <ProtectRouter><SurahDetails/></ProtectRouter> },

      { path: 'Azkar', element: <ProtectRouter><Azkar/></ProtectRouter> },
      { path: 'AzkarElsabah', element: <ProtectRouter><AzkarElsabah/></ProtectRouter> },
      { path: 'AzkarElmasaa', element: <ProtectRouter><AzkarElmasaa/></ProtectRouter> },

      { path: 'Ahadith', element: <ProtectRouter><Ahadith/></ProtectRouter> },
      { path: 'Roqya', element: <ProtectRouter><Roqya/></ProtectRouter> },
      { path: 'Sebha', element: <ProtectRouter><Sebha/></ProtectRouter> },
      { path: 'Doaa', element: <ProtectRouter><Doaa/></ProtectRouter> },
      { path: 'QuranDoaa', element: <ProtectRouter><QuranDoaa/></ProtectRouter> },
      { path: 'RizkDoaa', element: <ProtectRouter><RizkDoaa/></ProtectRouter> },
       { path: 'ArafaDoaa', element: <ProtectRouter><ArafaDoaa/></ProtectRouter> },
      { path: 'contact', element: <ProtectRouter><Contact/></ProtectRouter> },
      { path: 'Login', element: <ReverseProtect><Login/></ReverseProtect> },
    ],
  }
])
  
  return (
    <>
    <RouterProvider router={routes}/>  
    <ToastContainer theme='colored'/>
    </>
  )
}

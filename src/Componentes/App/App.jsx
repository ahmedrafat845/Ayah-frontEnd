
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


export default function App() {
 






let routes = createBrowserRouter([
  {
    path: '/',
    element: <MasterLayOut />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <ProtectRouter><Home/></ProtectRouter> },
      { path: 'Azkar', element: <ProtectRouter><Azkar/></ProtectRouter> },
      { path: 'AzkarElsabah', element: <ProtectRouter><AzkarElsabah/></ProtectRouter> },
      { path: 'AzkarElmasaa', element: <ProtectRouter><AzkarElmasaa/></ProtectRouter> },
      { path: 'Ahadith', element: <ProtectRouter><Ahadith/></ProtectRouter> },
      { path: 'Roqya', element: <ProtectRouter><Roqya/></ProtectRouter> },
      { path: 'Sebha', element: <ProtectRouter><Sebha/></ProtectRouter> },
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

import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { mediaContext } from '../../../Context/MediaStore';
import logo from "../../../images/صل على محمد.jpg"
import style from "./NavBar.module.scss"



export default function NavBar() {
  let {userData,LogOut}= useContext(mediaContext)
  const navigate = useNavigate();
  const handleLogout = () => {
  LogOut();
  navigate('/Login'); // ✅ التحويل الصح
};


    
  return (
    <>
       <Navbar expand="lg" className={`${style.bgNav} `}>
        <Container fluid>
            <img src={logo} className={`${style.logo} `} alt="" />
            <Navbar.Brand href="#" className='fw-bold fs-4 text-muted  '> آية (صل علي محمد)🧡</Navbar.Brand>
            
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="ms-auto  my-lg-0"
              
            
            >
                {userData?(
                  <>
                    <Nav.Link as={Link} to="">الصفحه الرئيسيه</Nav.Link>
                    <Nav.Link as={Link} to="Azkar">الاذكار</Nav.Link>
                    <Nav.Link as={Link} to="Ahadith">الاحاديث</Nav.Link>
                    <Nav.Link as={Link} to="Roqya">الرقيه الشرعيه</Nav.Link>
                    <Nav.Link as={Link} to="Sebha">سبحه</Nav.Link>


                  </>
                ):('')}
                
                
                
               
                
            </Nav>
            <Form className="d-flex justify-content-end pb-2  ps-4">

           
                {userData?(
                  <>
                <button onClick={handleLogout} className={`${style.btn} btn btn-danger mt-2`}>
                  خروج
                </button>
                  </>
                ):('')}
               

                
                
            </Form>
            </Navbar.Collapse>
        </Container>
       </Navbar>

    
    </>
  )
}

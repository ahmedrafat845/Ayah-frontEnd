import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { mediaContext } from "../../../Context/MediaStore";

import logo from "../../../images/صل على محمد.jpg";
import style from "./NavBar.module.scss";

export default function NavBar() {
  let { userData, LogOut } = useContext(mediaContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    LogOut();
    navigate("/Login");
  };

  return (
    <Navbar expand="lg" className={style.bgNav}>
      <Container fluid className="align-items-center">

        {/* LEFT SIDE */}
        <div className={style.leftSide}>
          <img
            src={logo}
            className={style.logo}
            alt="Ayah Logo"
          />

          <Navbar.Brand className={style.brand}>
            (آية) صلِّ على النبي ﷺ
          </Navbar.Brand>
        </div>

        {/* TOGGLE */}
        <Navbar.Toggle
          aria-controls="navbarScroll"
          className={style.toggle}
        />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-lg-0 align-items-lg-center">

            {userData ? (
              <>
                <Nav.Link as={Link} to="" className={style.navLink}>
                  الرئيسية
                </Nav.Link>

                <Nav.Link as={Link} to="Azkar" className={style.navLink}>
                  الأذكار
                </Nav.Link>

                <Nav.Link as={Link} to="Ahadith" className={style.navLink}>
                  الأحاديث
                </Nav.Link>

                <Nav.Link as={Link} to="Roqya" className={style.navLink}>
                  الرقية
                </Nav.Link>

                <Nav.Link as={Link} to="Sebha" className={style.navLink}>
                  السبحة
                </Nav.Link>
                 <Nav.Link as={Link} to="Doaa" className={style.navLink}>
                  دعاء
                </Nav.Link>
                 <Nav.Link as={Link} to="contact" className={style.navLink}>
                  اتصل بنا
                </Nav.Link>
              </>
            ) : null}
          </Nav>

          <Form className="d-flex justify-content-end ps-lg-3">
            {userData ? (
              <button
                onClick={handleLogout}
                className={style.logoutBtn}
              >
                خروج
              </button>
            ) : null}
          </Form>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}
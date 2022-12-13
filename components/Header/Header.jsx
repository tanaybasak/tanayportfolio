import React, { useRef, useEffect, useState } from "react";

import { Container, Input, Form, FormGroup, Label } from "reactstrap";
import classes from "./header.module.css";
import Link from "next/link";
import localStorageUtil from "./util";

const NAV__LINK = [
  {
    path: "/",
    display: "Home",
  },

  {
    path: "#services",
    display: "Services",
  },
  {
    path: "#portfolio",
    display: "Projects",
  },
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#contact",
    display: "Contact",
  },
];

const Header = ({ setAppTheme }) => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [theme, themeSet] = useState('');


  useEffect(() => {
    
    themeSet(localStorageUtil());

  }, [])

  const handleTheme = (value) => {
    const themevalue = value ? 'Light' : 'Dark';
    themeSet(themevalue);
    setAppTheme(themevalue);
  }



  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add(`${classes.header__shrink}`);
    } else {
      headerRef.current.classList.remove(`${classes.header__shrink}`);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const toggleMenu = () =>
    menuRef.current.classList.toggle(`${classes.menu__active}`);

  return (
    <header className={`${classes.header}`} ref={headerRef}>
      <Container>
        <div className={`${classes.nav__wrapper}`}>
          {/* ======== navigation logo ======== */}
          <div className={`${classes.logo}`}>
            <h1>
              <span>T</span>
            </h1>
          </div>

          {/* ========= nav menu =========== */}
          <div
            className={`${classes.navigation}`}
            ref={menuRef}
            onClick={toggleMenu}
          >
            <div className={`${classes.nav__menu}`}>
              {NAV__LINK.map((item, index) => (
                <Link href={item.path} key={index}>
                  {item.display}
                </Link>
              ))}

              <div className={`${classes.nav__right}`}>
                <p className=" d-flex align-items-center gap-2 mb-0">
                  <i className="ri-phone-line"></i> +91-863-897-4203{" "}
                </p>
              </div>
              <div>
                <Form>
                  <FormGroup switch>
                    <p className=" d-flex align-items-center gap-2 mb-0">
                      <Input type="switch" role="switch" onChange={(e) => handleTheme(e.target.checked)} />
                      <Label check>{theme}</Label>
                    </p>
                  </FormGroup>
                </Form>
              </div>
            </div>
          </div>

          <span className={`${classes.mobile__menu}`}>
            <i className="ri-menu-line" onClick={toggleMenu}></i>
          </span>
        </div>
      </Container>
    </header >
  );
};

export default Header;

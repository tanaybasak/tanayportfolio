import React, { useRef, useEffect, useState, cloneElement } from "react";

import { Container, Input, Form, FormGroup, Label, NavLink } from "reactstrap";
import classes from "./header.module.css";
import Link from "next/link";
import localStorageUtil from "./util";
import { useRouter } from "next/router";

console.log(classes.nav__menu);

const NAV__LINK = [
  {
    path: "/",
    id: 1,
    display: "Home",
    active: true
  },

  {
    path: "/#services",
    id: 2,
    display: "Services"

  },
  {
    path: "/#portfolio",
    id: 3,
    display: "Projects"
  },
  {
    path: "/#about",
    id: 4,
    display: "About"
  },
  {
    path: "/#contact",
    id: 5,
    display: "Contact"

  },
];

const Header = ({ setAppTheme }) => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [theme, themeSet] = useState('');
  const [currentPath, setCurrentPath] = useState('/');
  useEffect(() => {

    themeSet(localStorageUtil());

  }, [])

  const handleTheme = (value) => {
    const themevalue = value ? 'Light' : 'Dark';
    themeSet(themevalue);
    setAppTheme(themevalue);
  }

const selectedPath = (item) => {
  setCurrentPath(item.path);
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
              {NAV__LINK.map((item) => (
                <NavLink href={item.path} key={item.id} onClick={() => selectedPath(item)} active={currentPath == item.path ? true : false}>
                  {item.display}
                </NavLink>
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

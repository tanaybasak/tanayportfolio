import React, { Fragment, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  // const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useState('Dark');

  const setAppTheme = () => {
    const newTheme = theme === 'Dark' ? 'Light' : 'Dark'
    setTheme(newTheme);
  }
  return (
    <div data-theme={theme}>
      <Header setAppTheme={setAppTheme} />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import classes from './Header.module.css';
import { ReactComponent as Logo } from '../../assets/icons/coffee.svg';
import HeaderButton from './HeaderButton';

function Header() {
  const { pathname } = useLocation();
  const [navbarClasses, setNavbarClasses] = useState(`${classes.navbar}`);

  useEffect(() => {
    switch (pathname) {
      case '/':
        setNavbarClasses(`${classes.navbar}`);
        break;
      case '/products':
        setNavbarClasses(`${classes.navbar} ${classes.navbar_products}`);
        break;
      default:
        setNavbarClasses(`${classes.navbar}`);
        break;
    }
  }, [pathname]);

  return (
    <header className={navbarClasses}>
      <button className={classes.logo} type="button">
        <Logo />
        <h1>COFFEE SHOP</h1>
      </button>
      <div>
        <HeaderButton text="Home" to="/" />
        <HeaderButton text="About" to="/" />
        <HeaderButton text="Products" to="/products" />
      </div>
    </header>
  );
}

export default Header;

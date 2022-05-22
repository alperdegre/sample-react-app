import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import classes from './Header.module.css';
import { ReactComponent as Logo } from '../../assets/icons/coffee.svg';
import HeaderButton from './HeaderButton';
import ShopIcon from './ShopIcon';

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
      <Link className={classes.logo} to="/">
        <Logo />
        <h1>COFFEE SHOP</h1>
      </Link>
      <div className={classes['navbar-options']}>
        <HeaderButton text="Home" to="/" />
        <HeaderButton text="About" to="/" />
        <HeaderButton text="Products" to="/products" />
        {pathname === '/products' && <ShopIcon />}
      </div>
    </header>
  );
}

export default Header;

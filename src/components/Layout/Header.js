import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './Header.module.css';
import { ReactComponent as Logo } from '../../assets/icons/coffee.svg';
import HeaderButton from './HeaderButton';
import ShopIcon from './ShopIcon';

function Header({ onShowCart }) {
  const { pathname } = useLocation();
  const [navbarClasses, setNavbarClasses] = useState(`${classes.navbar}`);

  useEffect(() => {
    switch (pathname) {
      case '/':
        setNavbarClasses(`${classes.navbar}`);
        break;
      case '/products':
      case '/about':
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
        <HeaderButton text="About" to="/about" />
        <HeaderButton text="Products" to="/products" />
        {pathname === '/products' && <ShopIcon onShowCart={onShowCart} />}
      </div>
    </header>
  );
}

Header.propTypes = {
  onShowCart: PropTypes.func.isRequired,
};

export default Header;

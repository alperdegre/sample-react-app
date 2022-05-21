import React from 'react';
import classes from './Header.module.css';
import { ReactComponent as Logo } from '../../assets/icons/coffee.svg';
import HeaderButton from './HeaderButton';

function Header() {
  return (
    <header className={classes.navbar}>
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

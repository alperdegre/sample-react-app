import React from 'react';
import classes from './Header.module.css';
import { ReactComponent as Logo } from '../../assets/icons/coffee.svg';
import HeaderButton from './HeaderButton';

function Header() {
  return (
    <header className={classes.navbar}>
      <div className="container-flex justify">
        <button className={classes.logo} type="button">
          <Logo />
          <h1>COFFEE SHOP</h1>
        </button>
        <nav className={classes.nav}>
          <HeaderButton text="Home" />
          <HeaderButton text="About" />
          <HeaderButton text="Products" />
        </nav>
      </div>
    </header>
  );
}

export default Header;

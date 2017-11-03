import React from 'react';

import HeaderButton from './HeaderButton.jsx';
import HeaderBalance from './HeaderBalance.jsx';

import './Header.sass';

const Header = () => (
  <header className="header">
    <HeaderButton form="income" name="add" />
    <HeaderBalance />
    <HeaderButton form="expend" name="remove" />
  </header>
);

export default Header;

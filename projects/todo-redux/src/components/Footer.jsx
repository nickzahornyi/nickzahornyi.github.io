import React from 'react';

import FilterLink from '../containers/FilterLink.jsx';

import styles from './Footer.less';

const Footer = () => (
  <div className={styles.root}>
    <FilterLink filter="SHOW_ALL">All</FilterLink>
    <FilterLink filter="SHOW_NEW">New</FilterLink>
    <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
  </div>
);

export default Footer;

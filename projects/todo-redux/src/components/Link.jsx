import React from 'react';
import PropTypes from 'prop-types';

import styles from './Link.less';

const Link = props => {
  const { active, children, onClick } = props;

  if (active) {
    return <span className={styles.active}>{children}</span>;
  }

  return (
    <span className={styles.root} onClick={onClick}>
      {children}
    </span>
  );
};

Link.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.string,
  onClick: PropTypes.func
};

export default Link;

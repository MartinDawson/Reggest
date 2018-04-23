import React from 'react';
import PropTypes from 'prop-types';

import styles from './overlay.less';

/* eslint-disable jsx-a11y/click-events-have-key-events */
// No Key event as it should be handled by other objects such as a modal close icon
const Overlay = ({ onClick, children }) => (
  <div className={styles.overlay}>
    {children}
    <div className={styles.clickableOverlay} tabIndex={-1} role="button" onClick={onClick} />
  </div>
);

Overlay.defaultProps = {
  onClick: Function.prototype,
};

Overlay.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Overlay;

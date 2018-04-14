import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './button.less';

const Button = ({ children, styleName, className, ...props }) => (
  <button
    {...props}
    className={classnames(styles.button, styleName && styles[styleName], className)}
  >
    {children}
  </button>
);

Button.defaultProps = {
  styleName: null,
  className: null,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  styleName: PropTypes.string,
};

export default Button;

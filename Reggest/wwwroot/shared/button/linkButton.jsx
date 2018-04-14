import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'found';

import styles from './button.less';

const LinkButton = ({ children, styleName, className, ...props }) => (
  <Link {...props} className={classnames(styles.button, styles[styleName], className)}>
    {children}
  </Link>
);

LinkButton.defaultProps = {
  styleName: 'primary',
  className: null,
};

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  styleName: PropTypes.string,
};

export default LinkButton;

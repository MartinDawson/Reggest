import React from 'react';
import PropTypes from 'prop-types';

import Button from './buttonContainer';

const ModalButton = ({ children, onClick, className, ...props }) => (
  <Button styleName="primary" onClick={onClick} className={className} {...props}>
    {children}
  </Button>
);

ModalButton.defaultProps = {
  className: null,
};

ModalButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ModalButton;

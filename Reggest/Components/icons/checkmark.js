import React from 'react';
import PropTypes from 'prop-types';

const CheckmarkIcon = ({ className, ...props }) => (
  <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    <path d="M15.36 1c-5.227 3.956-10.239 9.247-10.239 9.247L1.509 7 0 8.537C1.485 9.932 4.924 13.618 6.088 15 9.363 9.528 12.767 5.448 16 1.716L15.36 1z" />
  </svg>
);

CheckmarkIcon.defaultProps = {
  className: null,
};

CheckmarkIcon.propTypes = {
  className: PropTypes.string,
};

export default CheckmarkIcon;

import React from 'react';
import PropTypes from 'prop-types';

const CrossIcon = ({ className, ...props }) => (
  <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    <title>Close</title>
    <path d="M13.957 3.457l-1.414-1.414L8 6.586 3.457 2.043 2.043 3.457 6.586 8l-4.543 4.543 1.414 1.414L8 9.414l4.543 4.543 1.414-1.414L9.414 8z" />
  </svg>
);

CrossIcon.defaultProps = {
  className: null,
};

CrossIcon.propTypes = {
  className: PropTypes.string,
};

export default CrossIcon;

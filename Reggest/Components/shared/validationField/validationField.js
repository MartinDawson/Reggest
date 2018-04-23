import React from 'react';
import PropTypes from 'prop-types';

import ValidationErrors from './validationErrors';

const ValidationField = ({
  children,
  error,
  touched,
  className,
}) => {
  let errors = error;

  if (!Array.isArray(error)) {
    errors = [error];
  }

  return (
    <div className={className}>
      {children}
      {touched ? <ValidationErrors errors={errors} /> : null}
    </div>
  );
};

ValidationField.defaultProps = {
  error: null,
  className: null,
};

ValidationField.propTypes = {
  children: PropTypes.node.isRequired,
  touched: PropTypes.bool.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  className: PropTypes.string,
};

export default ValidationField;

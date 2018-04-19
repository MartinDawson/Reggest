import React from 'react';
import PropTypes from 'prop-types';

import ValidationError from './validationError';

const Errors = ({ errors }) => (
  errors.length ? (
    <div>
      {errors.map(error => <ValidationError key={error} error={error} />)}
    </div>
  ) : null
);

Errors.propTypes = {
  errors: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

export default Errors;

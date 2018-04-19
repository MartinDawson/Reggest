/* eslint-disable jsx-a11y/label-has-for */

import React from 'react';
import PropTypes from 'prop-types';

import ValidationField from '../validationField/validationField';
import InputRadioButton from './inputRadioButton';

const InputRadioButtonGroup = ({
  input,
  meta: { touched, error = [] },
  options,
  groupClassName,
  ...props
}) => (
  <ValidationField touched={touched} error={error}>
    <div className={groupClassName} >
      {options.map(option => (
        <InputRadioButton key={option.id} input={input} {...props} {...option} />
      ))}
    </div>
  </ValidationField>
);

InputRadioButtonGroup.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  }).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      value: PropTypes.any,
    }).isRequired,
  ).isRequired,
  groupClassName: PropTypes.string.isRequired,
};

export default InputRadioButtonGroup;

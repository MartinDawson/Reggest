/* eslint-disable jsx-a11y/label-has-for */

import React from 'react';
import PropTypes from 'prop-types';

import ValidationField from '../validationField/validationField';
import CheckmarkIcon from '../../icons/checkmark';
import styles from './inputCheckboxField.less';

const InputCheckboxField = ({
  input,
  meta: { touched, error = [] },
  id,
  label,
  ...props
}) => (
  <ValidationField touched={touched} error={error}>
    <label className={styles.inputCheckboxField} htmlFor={id}>
      <input
        {...input}
        className={styles.input}
        type="checkbox"
        id={id}
        checked={input.value}
        {...props}
      />
      <label className={styles.customCheckbox} htmlFor={id}>
        <CheckmarkIcon />
      </label>
      {label}
    </label>
  </ValidationField>
);

InputCheckboxField.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  }).isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};


export default InputCheckboxField;

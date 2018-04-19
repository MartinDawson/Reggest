/* eslint-disable jsx-a11y/label-has-for */

import React from 'react';
import PropTypes from 'prop-types';

import styles from './inputRadioButton.less';
import CheckmarkIcon from '../../icons/checkmark';

const InputRadioButton = ({
  input,
  id,
  customValue,
  label,
  ...props
}) => (
  <div className={styles.radioButtonContainer}>
    <input
      {...input}
      className={styles.input}
      type="radio"
      value={customValue}
      checked={input.value === customValue}
      id={id}
      {...props}
    />
    <label className={styles.customRadioButton} htmlFor={id}>
      <CheckmarkIcon />
    </label>
    <label className={styles.label} htmlFor={id}>
      {label}
    </label>
  </div>
);

InputRadioButton.defaultProps = {
  customValue: null,
};

InputRadioButton.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  customValue: PropTypes.any,
};

export default InputRadioButton;

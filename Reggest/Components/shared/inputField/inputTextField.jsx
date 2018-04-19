import React from 'react';
import PropTypes from 'prop-types';

import ValidationField from '../validationField/validationField';
import styles from './inputTextField.less';

const InputTextField = ({
  input,
  meta: { touched, error = [] },
  ...props
}) => (
  <ValidationField touched={touched} error={error}>
    <input
      {...input}
      className={styles.input}
      {...props}
    />
  </ValidationField>
);

InputTextField.propTypes = {
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
};


export default InputTextField;

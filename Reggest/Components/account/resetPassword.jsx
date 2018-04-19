import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import Input from '../shared/inputField/inputTextField';

const ResetPassword = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} action="">
    <div>
      <Field name="password" component={Input} type="password" placeholder="Password" />
      <Field name="confirmPassword" component={Input} type="password" placeholder="Confirm password" />
    </div>

    <button>
      Reset Password
    </button>
  </form>
);

ResetPassword.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ResetPassword;

/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import InputTextField from '../shared/inputField/inputTextField';

const SocialLoginConfirmation = ({
  handleSubmit,
  loginProvider,
}) => (
  <div>
    <h3>Associate your {loginProvider} account.</h3>

    <form onSubmit={handleSubmit} action="" method="post">
      <h4>Association Form</h4>

      <hr />

      <p className="text-info">
        You&apos;ve successfully authenticated with {loginProvider}.
          Please enter a user name for this site below and click the Register button to finish
          logging in.
      </p>
      <div className="form-group">
        <Field name="userName" component={InputTextField} type="userName" placeholder="User name" />
      </div>
      <button>
        Register
      </button>
    </form>
  </div>
);

SocialLoginConfirmation.propTypes = {
  loginProvider: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SocialLoginConfirmation;

import React from 'react';
import PropTypes from 'prop-types';

import Register from './registerContainer';
import Login from './loginContainer';
import ForgotPassword from './forgotPasswordContainer';

const Account = ({ loginProviders }) => (
  <div>
    <Register loginProviders={loginProviders} />
    <Login loginProviders={loginProviders} />
    <ForgotPassword />
  </div>
);

Account.propTypes = {
  loginProviders: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Account;

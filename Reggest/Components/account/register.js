import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import styles from './register.less';
import InputTextField from '../shared/inputField/inputTextField';
import ModalButton from '../shared/button/modalButton';
import Modal from '../shared/modal/modalContainer';
import SocialLogins from './socialLogins';
import Button from '../shared/button/button';
import ValidationErrors from '../shared/validationField/validationErrors';

const Register = ({ handleSubmit, loginProviders, error }) => (
  <Modal title="Register." id="register">
    <SocialLogins loginProviders={loginProviders} />
    <ValidationErrors errors={error} />
    <form onSubmit={handleSubmit} action="">

      <div className={styles.fields}>
        <Field name="username" component={InputTextField} placeholder="Username" />
        <Field name="email" component={InputTextField} type="email" placeholder="Email" />
        <Field name="password" component={InputTextField} type="password" placeholder="Password" />
        <Field name="confirmPassword" component={InputTextField} type="password" placeholder="Confirm password" />
      </div>
      <div className={styles.loginLink}>
        Or <ModalButton type="button" styleName="tertiary" modalId="login">login</ModalButton> if you already have an account.
      </div>

      <Button styleName="primary" className={styles.registerButton}>Register</Button>
    </form>
  </Modal>
);

Register.defaultProps = {
  error: [],
};

Register.propTypes = {
  loginProviders: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ),
};

export default Register;

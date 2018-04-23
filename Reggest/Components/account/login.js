import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import styles from './login.less';
import ModalButton from '../shared/button/modalButtonContainer';
import InputTextField from '../shared/inputField/inputTextField';
import InputCheckboxField from '../shared/inputField/inputCheckboxField';
import Modal from '../shared/modal/modalContainer';
import SocialLogins from './socialLoginsContainer';
import Button from '../shared/button/button';
import ValidationErrors from '../shared/validationField/validationErrors';

const Login = ({ handleSubmit, loginProviders, error }) => (
  <Modal title="Login." id="login">
    <SocialLogins loginProviders={loginProviders} />
    <ValidationErrors errors={error} />
    <form onSubmit={handleSubmit} action="">
      <div className={styles.fields}>
        <Field name="username" component={InputTextField} placeholder="Username" />
        <Field name="password" component={InputTextField} type="password" placeholder="Password" />
        <Field
          name="rememberMe"
          id="rememberMe"
          component={InputCheckboxField}
          type="checkbox"
          label="Remember login?"
        />
      </div>

      <div className={styles.forgotPasswordLink}>
        <ModalButton type="button" styleName="tertiary" modalId="forgotPassword">Reset your password</ModalButton> if you have forgotten it.
      </div>
      <div className={styles.registerAccountLink}>
        Or <ModalButton type="button" styleName="tertiary" modalId="register">register</ModalButton> if you don&apos;t have an account.
      </div>

      <Button styleName="primary" className={styles.loginButton}>Login</Button>
    </form>
  </Modal>
);

Login.defaultProps = {
  error: [],
};

Login.propTypes = {
  loginProviders: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ),
};

export default Login;

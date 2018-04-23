import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Modal from '../shared/modal/modalContainer';
import Button from '../shared/button/button';
import InputTextField from '../shared/inputField/inputTextField';
import ValidationErrors from '../shared/validationField/validationErrors';
import styles from './forgotPassword.less';

const ForgotPassword = ({ handleSubmit, error }) => (
  <Modal title="Reset your password." id="forgotPassword">
    <ValidationErrors errors={error} />
    <form onSubmit={handleSubmit} action="">
      <div className={styles.fields}>
        <Field name="email" component={InputTextField} type="email" placeholder="Email" />
      </div>

      <Button styleName="primary">Reset password</Button>
    </form>
  </Modal>
);

ForgotPassword.defaultProps = {
  error: [],
};

ForgotPassword.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ),
};

export default ForgotPassword;

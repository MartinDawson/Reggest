import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import styles from './newsletterModal.less';
import InputTextField from '../shared/inputField/inputTextField';
import Modal from '../shared/modal/modalContainer';
import Button from '../shared/button/button';
import ValidationErrors from '../shared/validationField/validationErrors';
import Recaptcha from '../email/recaptcha';

const NewsletterModal = ({ handleSubmit, error, hideModal }) => (
  <Modal title="Subscribe." id="fitnessPlans" allowOverlayHideModal={false}>
    <ValidationErrors errors={error} />
    <div className={styles.subscribeText}>
      <div>Subscribe to get your fitness plans emailed to you.</div>
    </div>
    <form onSubmit={handleSubmit} action="">
      <div className={styles.fields}>
        <Field name="email" component={InputTextField} placeholder="email (required)" />
      </div>

      <Field name="recaptcha" component={Recaptcha} />

      <div className={styles.buttons}>
        <Button styleName="primary" className={styles.emailButton}>
          Subscribe me
        </Button>
        <Button styleName="primary" type="button" className={styles.noThanksButton} onClick={hideModal}>
          No thanks
        </Button>
      </div>
    </form>
  </Modal>
);

NewsletterModal.defaultProps = {
  error: [],
};

NewsletterModal.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ),
  hideModal: PropTypes.func.isRequired,
};

export default NewsletterModal;

import React from 'react';
import PropTypes from 'prop-types';
import Recaptcha from 'react-recaptcha';

import ValidationField from '../shared/validationField/validationField';

const Captcha = ({
  input,
  meta: { touched, error = [] },
}) => (
  <ValidationField touched={touched} error={error}>
    <Recaptcha
      verifyCallback={response => input.onChange(response)}
      sitekey={process.env.RECAPTCHA_SITE_KEY}
    />
  </ValidationField>
);

Captcha.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  }).isRequired,
};

export default Captcha;

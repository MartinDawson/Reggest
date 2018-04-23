import noWhiteSpace from '../shared/noWhiteSpace';

const validation = (values) => {
  const errors = {};

  if (!values.recaptcha) {
    errors.recaptcha = 'reCAPTCHA is required';
  }

  if (!values.email || !noWhiteSpace(values.email)) {
    errors.email = 'Email is required';
  } else if (!/^.+@.+$/i.test(values.email)) {
    errors.email = 'Must be a valid email address';
  }

  return errors;
};

export default validation;

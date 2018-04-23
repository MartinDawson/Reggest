import { reduxForm, SubmissionError } from 'redux-form';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import NewsletterModal from './newsletterModal';
import newsletterValidation from './validation';
import subscribeNewsletterMutation from './subscribeNewsletterMutation';
import { hideModal } from '../shared/modal/actions';

const handlers = {
  hideModal: ({ dispatch }) => () => dispatch(hideModal()),
  onSubmit: ({ dispatch }) => input =>
    subscribeNewsletterMutation(input, dispatch)
      .then(() => dispatch(hideModal()))
      .catch((error) => {
        throw new SubmissionError(error);
      }),
};

export default compose(
  connect(),
  withHandlers(handlers),
  reduxForm({
    form: 'newsletter',
    validate: newsletterValidation,
  }),
)(NewsletterModal);

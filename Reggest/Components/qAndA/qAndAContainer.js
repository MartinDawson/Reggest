import { graphql } from 'react-relay';
import { compose, withHandlers, setPropTypes, flattenProp } from 'recompose';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fragment } from 'relay-compose';

import qAndA from './qAndA';
import submitAnswerMutation from './submitAnswerMutation';

let questionIndex = 0;

const handlers = {
  answerOnClick: ({ dispatch, getNextQuestion }) => (id) => {
    questionIndex += 1;
    submitAnswerMutation(id, dispatch);
    getNextQuestion(questionIndex);
  },
};

const fragments = graphql`
  fragment qAndAContainer_question on Question {
    questionText
    answers {
      answerId
      answerText
    }
  }
`;

const propTypes = {
  getNextQuestion: PropTypes.func.isRequired,
};

export default compose(
  setPropTypes(propTypes),
  connect(),
  fragment(fragments),
  flattenProp('question'),
  withHandlers(handlers),
)(qAndA);

import { graphql } from 'react-relay';
import { compose, withHandlers, setPropTypes, flattenProp, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fragment } from 'relay-compose';

import qAndA from './qAndA';
import submitAnswerMutation from './submitAnswerMutation';

const stateHandlers = {
  answerOnClick: ({ questionIndex }, { dispatch, getNextQuestion }) => (id) => {
    const newQuestionIndex = questionIndex + 1;

    submitAnswerMutation(id, dispatch);
    getNextQuestion(newQuestionIndex);

    return {
      questionIndex: newQuestionIndex,
    };
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
  withStateHandlers({
    questionIndex: 0,
  }, stateHandlers),
)(qAndA);

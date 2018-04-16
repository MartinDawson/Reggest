import { graphql } from 'react-relay';
import { compose, flattenProp, withHandlers } from 'recompose';
import { refetchContainer } from 'relay-compose';
import { connect } from 'react-redux';

import qAndA from './qAndA';
import submitAnswerMutation from './submitAnswerMutation';

const fragments = graphql`
  fragment qAndAContainer_question on Question {
    questionText
    answers {
      answerId
      answerText
      points
    }
  }
`;

const refetchQuery = graphql`
  query qAndAContainerRefetchQuery {
    question {
      ...qAndAContainer_question
    }
  }
`;

const handlers = {
  answerOnClick: ({ dispatch, relay }) => (id) => {
    submitAnswerMutation(id, dispatch);
    relay.refetch();
  },
};

export default compose(
  connect(),
  refetchContainer(fragments, refetchQuery),
  flattenProp('question'),
  withHandlers(handlers),
)(qAndA);

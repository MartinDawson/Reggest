import { graphql } from 'react-relay';
import { compose, flattenProp, withHandlers, branch, renderComponent } from 'recompose';
import { refetchContainer } from 'relay-compose';
import { connect } from 'react-redux';

import qAndA from './qAndA';
import submitAnswerMutation from './submitAnswerMutation';
import fitnessPlansRanked from '../fitness/fitnessPlansRankedContainer';

let questionIndex = 0;

const fragments = graphql`
  fragment qAndAContainer on Query {
    questionByIndex (
      index: $questionIndex
    ) {
      questionText
      answers {
        answerId
        answerText
      }
    }
  }
`;

const refetchQuery = graphql`
  query qAndAContainerRefetchQuery(
    $questionIndex: Int
  ) {
    ...qAndAContainer
  }
`;

const handlers = {
  answerOnClick: ({ dispatch, relay }) => (id) => {
    questionIndex += 1;
    submitAnswerMutation(id, dispatch);
    relay.refetch({ questionIndex });
  },
};

export default compose(
  connect(),
  refetchContainer(fragments, refetchQuery),
  flattenProp('data'),
  flattenProp('questionByIndex'),
  branch(
    props => props.questionByIndex === null,
    renderComponent(fitnessPlansRanked),
  ),
  withHandlers(handlers),
)(qAndA);

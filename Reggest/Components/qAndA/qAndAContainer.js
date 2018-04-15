import { graphql } from 'react-relay';
import { compose, flattenProp } from 'recompose';
import { fragment } from 'relay-compose';

import qAndA from './qAndA';

const fragments = graphql`
  fragment qAndAContainer_question on Question {
    questionText
    answers {
      answerText
    }
  }
`;

export default compose(
  fragment(fragments),
  flattenProp('question'),
)(qAndA);

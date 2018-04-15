import { graphql } from 'react-relay';

import Fitness from './fitness';

const FitnessContainer = Fitness;

const query = graphql`
  query fitnessContainerQuery {
    question {
      ...qAndAContainer_question
    }
  }
`;

export const routeConfig = {
  Component: FitnessContainer,
  query,
};

export default FitnessContainer;

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { graphql } from 'react-relay';
import { compose, withHandlers, withProps, lifecycle, setPropTypes, branch, renderNothing } from 'recompose';
import { refetchContainer } from 'relay-compose';
import { withRouter } from 'found';

import Fitness from './fitness';

const mapStateToProps = ({ user }) => ({
  rankedFitnessPlans: user.rankedFitnessPlans,
});

const fragments = graphql`
  fragment fitnessContainer on Query {
    questionByIndex (
      index: $questionIndex
    ) {
      ...qAndAContainer_question
    }
    ...fitnessPlansContainer
  }
`;

const refetchQuery = graphql`
  query fitnessContainerRefetchQuery(
    $questionIndex: Int
    $order: FitnessPlanOrderInput
  ) {
    ...fitnessContainer
  }
`;

const query = graphql`
  query fitnessContainerQuery(
    $questionIndex: Int
    $order: FitnessPlanOrderInput
  ) {
    ...fitnessContainer
    ...fitnessPlansContainer
  }
`;

const handlers = {
  getNextQuestion: ({ relay }) => questionIndex => relay.refetch({ questionIndex }),
};

const FitnessContainer = compose(
  connect(mapStateToProps),
  withRouter,
  refetchContainer(fragments, refetchQuery),
  withProps(props => ({
    hasQuestion: props.data.questionByIndex !== null,
  })),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      if (!nextProps.hasQuestion) {
        this.props.router.push({
          pathname: '/yourFitnessPlans',
          state: {
            order: {
              planIds: this.props.rankedFitnessPlans,
            },
          },
        });
      }
    },
  }),
  withHandlers(handlers),
  branch(
    props => !props.hasQuestion,
    renderNothing,
  ),
)(Fitness);

export const routeConfig = {
  Component: FitnessContainer,
  query,
  render: ({ props }) => props && <FitnessContainer data={props} />,
};

export default FitnessContainer;

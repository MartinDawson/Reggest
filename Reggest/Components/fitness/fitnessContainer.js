import React from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-relay';
import { compose, withHandlers, withProps, lifecycle } from 'recompose';
import { refetchContainer } from 'relay-compose';
import { withCookies } from 'react-cookie';

import Fitness from './fitness';
import { showModal } from '../shared/modal/actions';

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
  ) {
    ...fitnessContainer
  }
`;

const query = graphql`
  query fitnessContainerQuery(
    $questionIndex: Int
  ) {
    ...fitnessContainer
    ...fitnessPlansContainer
  }
`;

const handlers = {
  getNextQuestion: ({ relay }) => questionIndex => relay.refetch({ questionIndex }),
};

const FitnessContainer = compose(
  connect(),
  withCookies,
  refetchContainer(fragments, refetchQuery),
  withProps(props => ({
    hasQuestion: props.data.questionByIndex !== null,
  })),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      if (nextProps.hasQuestion !== this.props.hasQuestion &&
          !nextProps.hasQuestion) {
        const newsletterPopupShown = this.props.cookies.get('newsletterPopupShown');

        if (!newsletterPopupShown) {
          this.props.dispatch(showModal('fitnessPlans'));
          const expires = new Date();

          expires.setDate(expires.getDate() + 15);

          this.props.cookies.set('newsletterPopupShown', true, {
            expires,
          });
        }
      }
    },
  }),
  withHandlers(handlers),
)(Fitness);

export const routeConfig = {
  Component: FitnessContainer,
  query,
  render: ({ props }) => props && <FitnessContainer data={props} />,
};

export default FitnessContainer;

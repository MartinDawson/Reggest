import React from 'react';
import { graphql } from 'react-relay';
import { withCookies } from 'react-cookie';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import fitnessPlansRanked from './fitnessPlansRanked';
import { showModal } from '../shared/modal/actions';

const query = graphql`
  query fitnessPlansRankedContainerQuery(
    $order: FitnessPlanOrderInput
  ) {
    ...fitnessPlansContainer
  }
`;

const FitnessPlansRankedContainer = compose(
  connect(null, {
    showModal,
  }),
  withCookies,
  lifecycle({
    componentDidMount() {
      const newsletterPopupShown = this.props.cookies.get('newsletterPopupShown');

      if (!newsletterPopupShown) {
        this.props.showModal('fitnessPlans');
        const expires = new Date();

        expires.setDate(expires.getDate() + 15);

        this.props.cookies.set('newsletterPopupShown', true, {
          expires,
        });
      }
    },
  }),
)(fitnessPlansRanked);

export const routeConfig = {
  Component: FitnessPlansRankedContainer,
  query,
  render: ({ props }) => props && <FitnessPlansRankedContainer data={props} />,
  prepareVariables: (_, { location }) => ({
    order: location.state.order,
  }),
};

export default FitnessPlansRankedContainer;

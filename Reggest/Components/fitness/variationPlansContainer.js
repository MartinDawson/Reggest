// import { compose, flattenProp, branch, renderNothing } from 'recompose';
// import { fragment } from 'relay-compose';
// import { graphql } from 'react-relay';

// import VariationPlans from './variationPlans';

// const fragments = graphql`
//   fragment variationPlansContainer_fitnessPlan on FitnessPlan {
//     variationPlans {
//       planId
//       daysPerWeek
//     }
//   }
// `;

// export default compose(
//   fragment(fragments),
//   flattenProp('fitnessPlan'),
//   branch(
//     props => props.variationPlans.length === 0,
//     renderNothing,
//   ),
// )(VariationPlans);

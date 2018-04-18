/* eslint-disable no-underscore-dangle */
const fitnessPlansDefault = {};

window._Constants.fitnessPlans.forEach((x) => {
  fitnessPlansDefault[x.Name] = {
    points: 0,
  };
});

const defaultState = {
  fitnessPlans: fitnessPlansDefault,
  rankedFitnessPlans: [],
};

/* eslint-enable no-underscore-dangle */

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'RANK_FITNESS_PLANS': {
      const fitnessPlans = {};

      action.fitnessPlansPoints.forEach((x) => {
        const maxNumber = Math.max(action.answerPoints, x.points);
        const minNumber = Math.min(action.answerPoints, x.points);
        const difference = maxNumber - minNumber;
        const newPoints = state.fitnessPlans[x.name].points + difference;

        fitnessPlans[x.name] = {
          ...state.fitnessPlans[x.name],
          id: x.id,
          name: x.name,
          points: newPoints,
        };
      });

      const rankedFitnessPlans = Object.keys(fitnessPlans).map(key => fitnessPlans[key]);

      rankedFitnessPlans.sort((a, b) => a.points - b.points);

      return {
        ...state,
        rankedFitnessPlans,
        fitnessPlans,
      };
    }
    default: return state;
  }
};

export default reducer;

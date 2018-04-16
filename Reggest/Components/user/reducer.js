/* eslint-disable no-underscore-dangle */
const fitnessPlansDefault = {};

window._Constants.fitnessPlans.forEach((x) => {
  fitnessPlansDefault[x.Name] = {
    points: 0,
  };
});

const defaultState = {
  fitnessPlans: fitnessPlansDefault,
};

/* eslint-enable no-underscore-dangle */

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_POINTS': {debugger
      const fitnessPlans = {};

      action.fitnessPlansPoints.forEach((x) => {
        const maxNumber = Math.max(action.answerPoints, x.points);
        const minNumber = Math.min(action.answerPoints, x.points);
        const difference = maxNumber - minNumber;
        const newPoints = state.fitnessPlans[x.name].points + difference;

        fitnessPlans[x.name] = {
          ...state.fitnessPlans[x.name],
          points: newPoints,
        };
      });

      return {
        ...state,
        fitnessPlans,
      };
    }
    default: return state;
  }
};

export default reducer;

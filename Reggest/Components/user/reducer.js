/* eslint-disable no-underscore-dangle */
const fitnessPlansDefault = {};

window._Constants.fitnessPlans.forEach((x) => {
  fitnessPlansDefault[x.Id] = {
    points: 0,
  };
});

const defaultState = {
  rankedFitnessPlans: [],
  fitnessPlans: fitnessPlansDefault,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CLEAR_FITNESS_PLANS_RANKING': {
      return {
        ...state,
        ...defaultState,
      };
    }
    case 'RANK_FITNESS_PLANS': {
      const fitnessPlans = {};
      const planAnswerPoints = {};

      window._Constants.fitnessPlans.forEach((x) => {
        planAnswerPoints[x.Id] = {
          points: [],
        };
      });

      action.question.planAnswerPoints.forEach((x) => {
        const planAnswerPoint = planAnswerPoints[x.fitnessPlan.planId];

        planAnswerPoint.points = [
          ...planAnswerPoint.points,
          x.points,
        ];

        planAnswerPoints[x.fitnessPlan.planId] = planAnswerPoint;
      });

      Object.keys(planAnswerPoints).forEach((key) => {
        const planAnswerPoint = planAnswerPoints[key];
        let closestPoint = Number.MAX_SAFE_INTEGER;

        planAnswerPoint.points.forEach((point) => {
          const maxNumber = Math.max(action.answerPoints, point);
          const minNumber = Math.min(action.answerPoints, point);
          const difference = maxNumber - minNumber;

          if (difference < closestPoint) {
            closestPoint = difference;
          }
        });

        const newPoints = state.fitnessPlans[key].points + closestPoint;

        fitnessPlans[key] = {
          points: newPoints,
        };
      });

      const rankedFitnessPlans = Object.keys(fitnessPlans)
        .map(key => ({
          fitnessPlanId: parseInt(key, 10),
          points: fitnessPlans[key].points,
        }))
        .sort((a, b) => a.points - b.points);

      return {
        ...state,
        rankedFitnessPlans: rankedFitnessPlans.map(x => x.fitnessPlanId),
        fitnessPlans,
      };
    }
    default: return state;
  }
};

export default reducer;

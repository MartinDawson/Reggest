export const rankFitnessPlans = (question, answerPoints) => ({
  type: 'RANK_FITNESS_PLANS',
  question,
  answerPoints,
});

export const clearFitnessPlansRanking = () => ({
  type: 'CLEAR_FITNESS_PLANS_RANKING',
});

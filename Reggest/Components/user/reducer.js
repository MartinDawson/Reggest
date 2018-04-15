const defaultState = {};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_POINTS': {
      return {
        ...state,
        points: state.points + action.points,
      };
    }
    default: return state;
  }
};

export default reducer;

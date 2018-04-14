const defaultState = {
  popups: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SHOW_POPUP': {
      const popups = [...state.popups, {
        id: action.id,
        text: action.text,
        millisecondsToShow: action.millisecondsToShow,
      }];

      return {
        ...state,
        popups,
      };
    }
    case 'HIDE_POPUP': {
      const popups = state.popups.filter((_, i) => i !== action.index);

      return {
        ...state,
        popups,
      };
    }
    default: return state;
  }
};

export default reducer;

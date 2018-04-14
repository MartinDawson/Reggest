export default (state = {}, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return {
        ...state,
        ...action.variables,
        currentModal: action.id,
      };
    case 'HIDE_MODAL':
      return {
        ...state,
        currentModal: null,
      };
    default: return state;
  }
};

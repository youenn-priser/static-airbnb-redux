const selectedFlatReducer = (state, action) => {
  if (state === undefined) {
    return null;
  }

  // TODO: Handle actions
  switch (action.type) {
    case "SELECT_FLAT":
      return action.payload;
    default:
      return state;
  }
};

export default selectedFlatReducer;

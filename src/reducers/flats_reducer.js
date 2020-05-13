const flatsReducer = (state, action) => {
  if (state === undefined) {
    return [];
  }

  // TODO: Handle actions
  switch (action.type) {
    case "SET_FLATS":
      return action.payload;
    default:
      return state;
  }
};

export default flatsReducer;

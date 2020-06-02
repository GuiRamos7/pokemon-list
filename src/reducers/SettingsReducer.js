const INITIAL_STATE = {
  theme: "light",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DARK_MODE":
      return { ...state, theme: "dark" };
    case "LIGHT_MODE":
      return { ...state, theme: "light" };
    default:
      return state;
  }
};

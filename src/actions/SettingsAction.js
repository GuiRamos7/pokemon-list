const initialAction = {
  toogleTheme: (theme) => ({
    type: theme,
  }),
};

export default {
  toogleTheme: (theme) => async (dispatch) => {
    try {
      await dispatch(initialAction.toogleTheme(theme));
    } catch (err) {
      return err;
    }
  },
};

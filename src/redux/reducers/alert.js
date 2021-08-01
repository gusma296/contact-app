const initialState = {
  isVisible: false,
  alert_type: null,
  title: null,
  message: null,
  title_button: null,
};

const alert = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ALERT':
      return {
        isVisible: true,
        ...action.payload
      };
    case 'REMOVE_ALERT':
      return initialState;
    default:
      return state;
  }
};

export default alert;

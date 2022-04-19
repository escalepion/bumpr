import {
  POST_INFORMATION,
  POST_INFORMATION_SUCCESS,
  POST_INFORMATION_FAIL,
} from "./actionTypes";

const initialState = {
  infoData: [],
  submittingForm: false,
  error: {
    message: "",
  },
};

let initState = initialState;
if(localStorage.getItem('state')) {
  initState = JSON.parse(localStorage.getItem('state'));
}

const InformationsReducer = (state = initState, action) => {
  switch (action.type) {
    case POST_INFORMATION:
      state = { ...state, submittingForm: true };
      break;
    case POST_INFORMATION_SUCCESS:
      state = { ...state, submittingForm: false, infoData: [ ...state.infoData, action?.payload?.data] };
      const stringStateImg = JSON.stringify(state);
      localStorage.setItem('state', stringStateImg);
      break;
    case POST_INFORMATION_FAIL:
      state = {
        ...state,
        error: {
          message: "Error",
        },
        submittingForm: false,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default InformationsReducer;

import {
  POST_INFORMATION,
  POST_INFORMATION_SUCCESS,
  POST_INFORMATION_FAIL,
} from "./actionTypes";

export const postInformation = (data) => {
  return {
    type: POST_INFORMATION,
    data
  };
};

export const postInformationSuccess = (data) => {
  return {
    type: POST_INFORMATION_SUCCESS,
    payload: data
  };
};

export const postInformationFail = (error) => {
  return {
    type: POST_INFORMATION_FAIL,
    payload: error,
  };
};

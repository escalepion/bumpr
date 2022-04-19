import { takeLatest, put, call } from "redux-saga/effects";
import { POST_INFORMATION } from "./actionTypes";
import { serviceUrl } from "api/serviceUrl";
import { apiCall } from "api/axiosApiCallWrapper";

import {
  postInformationSuccess,
  postInformationFail,
} from "./actions";

function* onPostInformation(data) {
  const { navigate, ...restData } = data?.data;
  try {
    const url = serviceUrl.infoPostUrl;
    const response = yield call(
      apiCall,
      "POST",
      url,
      restData,
    );
    if(response?.message === 'SUCCESS') {
      yield put(postInformationSuccess({ data: data?.data }));
      navigate('/list');
    }
  } catch (error) {
    yield put(postInformationFail(error.response));
  }
}

function* CartSaga() {
  yield takeLatest(POST_INFORMATION, onPostInformation);
}

export default CartSaga;
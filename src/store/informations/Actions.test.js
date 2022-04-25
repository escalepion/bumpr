import { postInformation, postInformationSuccess, postInformationFail } from "./actions";

describe('actions', () => {
  it('should test post information', () => {
    const postInformationTest = postInformation('a');
    expect(postInformationTest).toEqual({ type: 'POST_INFORMATION', data: 'a' });
  });

  it('should test post information success', () => {
    const postInformationSuccessTest = postInformationSuccess('a');
    expect(postInformationSuccessTest).toEqual({ type: 'POST_INFORMATION_SUCCESS', payload: 'a' });
  });

  it('should test post information fail', () => {
    const postInformationFailTest = postInformationFail('a');
    expect(postInformationFailTest).toEqual({ type: 'POST_INFORMATION_FAIL', payload: 'a' });
  });
})
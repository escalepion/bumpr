import Reducer from './reducer';

describe('reducer', () => {
  it('should return default', () => {
    const reducerTest = Reducer({ a: 'aa' }, { type: 'non type' });
    expect(reducerTest).toEqual({ a: 'aa' });
  });

  it('should return post information', () => {
    const reducerTest = Reducer({}, { type: 'POST_INFORMATION'});
    expect(reducerTest.submittingForm).toBe(true);
  });

  it('should return post information success', () => {
    const reducerTest = Reducer({ infoData: [] }, { type: 'POST_INFORMATION_SUCCESS', payload: { data: 'a' }});
    expect(reducerTest.infoData.length).toBe(1);
  });

  it('should return post information fail', () => {
    const reducerTest = Reducer({}, { type: 'POST_INFORMATION_FAIL', payload: { data: 'a' }});
    expect(reducerTest.error.message).toEqual('Error');
  });
})

import getResponseFromAPI from '../0-promise';

describe('getResponseFromAPI', () => {
  it('returns a promise', () => {
    expect.assertions(1);
    const result = getResponseFromAPI();
    expect(result instanceof Promise).toBe(true);
  });
});

import Helpers from '../../helpers/helpers';
const testToken = 'sampe-token';
describe('Helper.js', () => {
  beforeEach(() => {
    localStorage.setItem('test-token', 'some-token');
  });
  test('Should set token', () => {
    Helpers.setToken(testToken);
  });
  test('Should set alert error', () => {
    Helpers.setAlertError(testToken);
  });
  test('Should set alert info', () => {
    Helpers.setAlertInfo(testToken);
  });
});

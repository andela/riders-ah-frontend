/* eslint-disable no-undef */
import { GET_ERRORS, SET_CURRENT_USER, REMOVE_CURRENT_USER, SOCIAL_LOGIN_PASS,SOCIAL_LOGIN_FAIL } from '../../../store/actions/types'

test('should GET_ERRORS', () => {
    expect(GET_ERRORS).toEqual('GET_ERRORS');
    expect(SET_CURRENT_USER).toEqual('SET_CURRENT_USER');
    expect(REMOVE_CURRENT_USER).toEqual('REMOVE_CURRENT_USER');
    expect(SOCIAL_LOGIN_PASS).toEqual('SOCIAL_LOGIN_PASS');
    expect(SOCIAL_LOGIN_FAIL).toEqual('SOCIAL_LOGIN_FAIL');
})

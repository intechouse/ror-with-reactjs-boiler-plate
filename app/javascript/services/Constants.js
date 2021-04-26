export const WEBSITE_BASE_URL = 'http://localhost:3000';

export const authUrl = WEBSITE_BASE_URL + '/api/v1/auth';
export const SIGNUP = WEBSITE_BASE_URL + '/api/v1/auth';
export const FORGET_PASSWORD = WEBSITE_BASE_URL + '/api/v1/auth/password';
export const RESEND_CONFIRMATION =
  WEBSITE_BASE_URL + '/api/v1/auth/confirmation';
export const RESET_PASSWORD = WEBSITE_BASE_URL + '/api/v1/auth/password';

export const userAttributes = {
  id: 'id',
  name: 'name',
  uid: 'uid',
  username: 'username'
};

export const userRegistrationAttributes = {
  email: 'email',
  name: 'name',
  username: 'username',
  mobile: 'mobile',
  uid: 'uid',
  provider: 'provider'
};

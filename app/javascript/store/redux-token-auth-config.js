import {generateAuthActions} from 'redux-token-auth';

import {
  authUrl,
  userAttributes,
  userRegistrationAttributes,
} from '../services/Constants';

const config = {
  authUrl,
  userAttributes,
  userRegistrationAttributes,
};

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
} = generateAuthActions(config);

export {registerUser, signInUser, signOutUser, verifyCredentials};
